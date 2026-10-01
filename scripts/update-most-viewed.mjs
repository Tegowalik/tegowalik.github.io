#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scriptPath = path.join(root, "script.js");
const auditPath = path.join(root, "data", "most-viewed-audit.json");
const curatedPath = path.join(root, "data", "most-viewed-curated.json");
const photoDir = path.join(root, "assets", "photos");
const topCount = 10;

async function get(url, headers = {}) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/129 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      ...headers,
    },
    signal: AbortSignal.timeout(60000),
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response;
}

function balancedJson(text, marker) {
  const markerAt = text.indexOf(marker);
  if (markerAt < 0) return null;
  const start = text.indexOf("{", markerAt + marker.length);
  if (start < 0) return null;
  let depth = 0;
  let quoted = false;
  let escaped = false;
  for (let index = start; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === '"') quoted = false;
      continue;
    }
    if (char === '"') quoted = true;
    else if (char === "{") depth += 1;
    else if (char === "}" && --depth === 0) return JSON.parse(text.slice(start, index + 1));
  }
  return null;
}

function walk(value, visit) {
  if (!value || typeof value !== "object") return;
  visit(value);
  if (Array.isArray(value)) value.forEach((item) => walk(item, visit));
  else Object.values(value).forEach((item) => walk(item, visit));
}

function textOf(value) {
  if (!value) return "";
  if (value.simpleText) return value.simpleText;
  return Array.isArray(value.runs) ? value.runs.map((run) => run.text || "").join("") : "";
}

function parseViews(label) {
  if (!label) return null;
  const normalized = label.replace(/\u00a0/g, " ").trim();
  const compact = normalized.match(/([0-9]+(?:[.,][0-9]+)?)\s*([KMB])/i);
  if (compact) {
    const scale = { K: 1e3, M: 1e6, B: 1e9 }[compact[2].toUpperCase()];
    return Math.round(Number(compact[1].replace(",", ".")) * scale);
  }
  const digits = normalized.replace(/[^0-9]/g, "");
  return digits ? Number(digits) : null;
}

function cleanTitle(title, fallback) {
  return String(title || fallback).replace(/\s*\.?\s*#(?=[A-Za-z]).*$/, "").replace(/[.|\s]+$/, "").trim() || fallback;
}

async function collectYouTube(seedIds = []) {
  const found = new Map();
  const pages = [
    "search?query=lego&hl=en&cbrd=1&ucbcb=1",
    "search?query=train&hl=en&cbrd=1&ucbcb=1",
    "search?query=crash&hl=en&cbrd=1&ucbcb=1",
    "search?query=pybricks&hl=en&cbrd=1&ucbcb=1",
    "videos?view=0&sort=p&flow=grid&hl=en&cbrd=1&ucbcb=1",
    "shorts?hl=en&cbrd=1&ucbcb=1",
  ];
  for (const suffix of pages) {
    const html = await (await get(`https://www.youtube.com/@Tegowalik/${suffix}`)).text();
    const data = balancedJson(html, "var ytInitialData =") || balancedJson(html, "ytInitialData =");
    if (!data) continue;
    walk(data, (node) => {
      const video = node.videoRenderer || node.gridVideoRenderer || node.reelItemRenderer;
      if (!video?.videoId) return;
      const views = parseViews(textOf(video.viewCountText) || textOf(video.shortViewCountText) || textOf(video.viewCount));
      if (!Number.isFinite(views)) return;
      const previous = found.get(video.videoId);
      const pageType = video.navigationEndpoint?.commandMetadata?.webCommandMetadata?.webPageType;
      const shortsOverlay = (video.thumbnailOverlays || []).some((entry) => entry.thumbnailOverlayTimeStatusRenderer?.style === "SHORTS");
      const reel = Boolean(node.reelItemRenderer || video.navigationEndpoint?.reelWatchEndpoint || pageType === "WEB_PAGE_TYPE_SHORTS" || shortsOverlay || suffix.startsWith("shorts"));
      found.set(video.videoId, {
        platform: "YouTube",
        icon: "youtube",
        id: video.videoId,
        format: previous?.format === "reel" || reel ? "reel" : "video",
        title: cleanTitle(textOf(video.title) || textOf(video.headline), "YouTube video"),
        views,
        url: `https://www.youtube.com/watch?v=${video.videoId}`,
        thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`,
      });
    });
  }
  const seeds = new Set([...seedIds, "QWWF9u0q5Ek"]);
  for (const id of seeds) {
    try {
      const html = await (await get(`https://www.youtube.com/watch?v=${id}&hl=en`)).text();
      const player = balancedJson(html, "var ytInitialPlayerResponse =") || balancedJson(html, "ytInitialPlayerResponse =");
      const details = player?.videoDetails;
      if (!details || details.author?.toLowerCase() !== "tegowalik") continue;
      const formats = player.streamingData?.adaptiveFormats || [];
      const vertical = formats.some((format) => Number(format.height) > Number(format.width));
      const format = vertical && Number(details.lengthSeconds) <= 180 ? "reel" : found.get(id)?.format || "video";
      const old = found.get(id) || {};
      found.set(id, {
        ...old,
        platform: "YouTube",
        icon: "youtube",
        id,
        format,
        title: cleanTitle(details.title, "YouTube video"),
        views: Number(details.viewCount),
        url: `https://www.youtube.com/watch?v=${id}`,
        thumbnailUrl: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      });
    } catch (error) {
      console.warn(`Could not refresh YouTube seed ${id}: ${error.message}`);
    }
  }
  return [...found.values()];
}

async function collectTikTok() {
  const data = await (await get("https://tokgauge.com/api/users/tegowalik?live=1")).json();
  const items = (data.feed || []).map((video) => ({
    platform: "TikTok",
    icon: "tiktok",
    id: String(video.id || ""),
    format: "reel",
    title: cleanTitle(String(video.desc || "TikTok video").split(" #")[0], "TikTok video"),
    views: Number(video.plays),
    url: video.url || `https://www.tiktok.com/@tegowalik/video/${video.id}`,
    thumbnailUrl: video.cover_remote,
  })).filter((item) => item.id && Number.isFinite(item.views) && item.thumbnailUrl?.startsWith("https://"));
  return {
    items,
    coverage: {
      profileVideos: Number(data.card?.videos || 0),
      collectedVideos: items.length,
      complete: items.length >= Number(data.card?.videos || 0),
    },
  };
}

function instagramMedia(data) {
  const items = [];
  walk(data, (node) => {
    const shortcode = node.shortcode || node.code;
    const views = Number(node.video_view_count ?? node.video_play_count ?? node.play_count);
    const thumbnailUrl = node.thumbnail_src || node.display_url || node.image_versions2?.candidates?.[0]?.url;
    if (!shortcode || !Number.isFinite(views) || views <= 0 || !thumbnailUrl) return;
    const caption = node.edge_media_to_caption?.edges?.[0]?.node?.text || node.caption?.text || "Instagram Reel";
    items.push({
      platform: "Instagram",
      icon: "instagram",
      id: String(shortcode),
      format: "reel",
      title: String(caption).split("\n")[0].slice(0, 100),
      views,
      url: `https://www.instagram.com/reel/${shortcode}/`,
      thumbnailUrl,
    });
  });
  return dedupe(items);
}

async function collectInstagram() {
  const endpoint = "https://www.instagram.com/api/v1/users/web_profile_info/?username=tegowalik";
  const data = await (await get(endpoint, {
    "x-ig-app-id": "936619743392459",
    Referer: "https://www.instagram.com/tegowalik/",
  })).json();
  const items = instagramMedia(data);
  const profileVideos = Number(data.data?.user?.edge_felix_video_timeline?.count || data.data?.user?.edge_owner_to_timeline_media?.count || 0);
  return { items, coverage: { profileVideos, collectedVideos: items.length, complete: profileVideos > 0 && items.length >= profileVideos } };
}

function dedupe(items) {
  return [...new Map(items.map((item) => [`${item.platform}:${item.id}`, item])).values()];
}

function idFrom(item) {
  try {
    const url = new URL(item.url);
    if (item.platform === "YouTube") return url.searchParams.get("v") || url.pathname.split("/").filter(Boolean).at(-1);
    if (item.platform === "TikTok") return url.pathname.match(/\/video\/(\d+)/)?.[1];
    return url.pathname.split("/").filter(Boolean).at(-1);
  } catch {
    return null;
  }
}

function currentEntries(source) {
  const match = source.match(/popularVideos:\s*(\[[\s\S]*?\n  \]),\n\n  socials:/);
  if (!match) throw new Error("Could not find CONFIG.popularVideos in script.js");
  const entries = Function(`"use strict"; return (${match[1]});`)();
  return entries.map((item) => ({ ...item, id: idFrom(item) })).filter((item) => item.id);
}

function mergeFreshWithPrevious(previous, fresh) {
  const merged = new Map(previous.map((item) => [`${item.platform}:${item.id}`, item]));
  fresh.forEach((item) => {
    const key = `${item.platform}:${item.id}`;
    const old = merged.get(key) || {};
    merged.set(key, { ...old, ...item, title: old.title || item.title, image: old.image, alt: old.alt });
  });
  return [...merged.values()].filter((item) => Number.isFinite(item.views)).sort((a, b) => b.views - a.views);
}

function selectedUnion(items) {
  return dedupe([
    ...items.slice(0, topCount),
    ...items.filter((item) => item.format === "video").slice(0, topCount),
    ...items.filter((item) => item.format === "reel").slice(0, topCount),
  ]).sort((a, b) => b.views - a.views);
}

async function downloadImage(item, filename) {
  let sources = [item.thumbnailUrl];
  if (item.platform === "YouTube") {
    const base = `https://i.ytimg.com/vi/${item.id}/`;
    sources = ["maxresdefault.jpg", "sddefault.jpg", "hqdefault.jpg"].map((name) => base + name);
  }
  let lastError;
  for (const url of sources) {
    try {
      const response = await get(url);
      const buffer = Buffer.from(await response.arrayBuffer());
      if (buffer.length < 1000) throw new Error("Image response is too small");
      fs.writeFileSync(filename, buffer);
      return;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error(`No preview found for ${item.url}`);
}

async function ensurePreview(item) {
  if (item.image && fs.existsSync(path.join(root, item.image))) return item;
  if (!item.thumbnailUrl) throw new Error(`No thumbnail URL for ${item.url}`);
  const slug = `popular-${item.platform.toLowerCase()}-${item.id.toLowerCase().replace(/[^a-z0-9-]+/g, "-")}`;
  const temp = path.join(os.tmpdir(), `${slug}-${process.pid}.image`);
  await downloadImage(item, temp);
  fs.mkdirSync(photoDir, { recursive: true });
  for (const width of [960, 1600]) {
    execFileSync("ffmpeg", [
      "-loglevel", "error", "-y", "-i", temp,
      "-vf", `scale='min(${width},iw)':-2`,
      "-c:v", "libwebp", "-quality", "78", "-compression_level", "6", "-an",
      path.join(photoDir, `${slug}-${width}.webp`),
    ]);
  }
  fs.rmSync(temp, { force: true });
  return { ...item, image: `assets/photos/${slug}-960.webp`, alt: `Preview image from ${item.title}` };
}

function jsString(value) {
  return JSON.stringify(String(value));
}

function entryLine(item) {
  const title = cleanTitle(item.title, `${item.platform} video`);
  return `    { platform: ${jsString(item.platform)}, icon: ${jsString(item.icon)}, format: ${jsString(item.format)}, title: ${jsString(title)}, views: ${Math.round(item.views)}, image: ${jsString(item.image)}, alt: ${jsString(item.alt || `Preview image from ${title}`)}, url: ${jsString(item.url)} }`;
}

function updateConfig(source, date, items) {
  const nextArray = `popularVideos: [\n${items.map(entryLine).join(",\n")}\n  ],\n\n  socials:`;
  const withDate = source.replace(/popularSnapshot:\s*"[^"]*"/, `popularSnapshot: ${jsString(date)}`);
  return withDate.replace(/popularVideos:\s*\[[\s\S]*?\n  \],\n\n  socials:/, nextArray);
}

const source = fs.readFileSync(scriptPath, "utf8");
const previous = currentEntries(source);
const curated = fs.existsSync(curatedPath) ? JSON.parse(fs.readFileSync(curatedPath, "utf8")) : [];
const coverage = {};
const fresh = [];

const previousYouTubeIds = previous.filter((item) => item.platform === "YouTube").map((item) => item.id);
for (const [platform, collect] of [["YouTube", () => collectYouTube(previousYouTubeIds)], ["TikTok", collectTikTok], ["Instagram", collectInstagram]]) {
  try {
    const result = await collect();
    const items = Array.isArray(result) ? result : result.items;
    fresh.push(...items);
    coverage[platform] = Array.isArray(result) ? { collectedVideos: items.length } : result.coverage;
  } catch (error) {
    coverage[platform] = { collectedVideos: 0, complete: false, error: String(error.message || error) };
  }
}

const baseline = dedupe([...previous, ...curated]);
const merged = mergeFreshWithPrevious(baseline, dedupe(fresh));
const selected = [];
for (const item of selectedUnion(merged)) {
  try {
    selected.push(await ensurePreview(item));
  } catch (error) {
    console.warn(`Skipping ${item.url}: ${error.message}`);
  }
}
if (!selected.length) throw new Error("No ranked entries have usable preview images");

const date = new Intl.DateTimeFormat("en-GB", {
  day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Berlin",
}).format(new Date());
fs.writeFileSync(scriptPath, updateConfig(source, date, selected));

const ranking = (format) => selected.filter((item) => !format || item.format === format).slice(0, topCount).map(({ thumbnailUrl, ...item }) => item);
fs.mkdirSync(path.dirname(auditPath), { recursive: true });
fs.writeFileSync(auditPath, JSON.stringify({
  generatedAt: new Date().toISOString(),
  policy: "Publicly available platform data is merged with the last verified snapshot; incomplete platform coverage does not block an update.",
  curatedCandidates: curated.map(({ thumbnailUrl, ...item }) => item),
  coverage,
  rankings: { all: ranking(), videos: ranking("video"), reels: ranking("reel") },
}, null, 2) + "\n");

console.log(`Updated ${selected.length} ranked entries for ${date}.`);
Object.entries(coverage).forEach(([platform, details]) => console.log(`${platform}: ${details.collectedVideos || 0} public posts collected${details.complete === false ? " (partial)" : ""}`));
