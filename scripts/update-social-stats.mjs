#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scriptPath = path.join(root, "script.js");
const statsPath = path.join(root, "data", "social-stats.json");
const compactFormat = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });

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

function parseCompact(value) {
  const match = String(value).replace(/,/g, "").match(/([0-9]+(?:\.[0-9]+)?)\s*([KMB])?/i);
  if (!match) return null;
  const scale = { K: 1e3, M: 1e6, B: 1e9 }[match[2]?.toUpperCase()] || 1;
  return Math.round(Number(match[1]) * scale);
}

async function collectYouTube() {
  const html = await (await get("https://www.youtube.com/@Tegowalik/about?hl=en&cbrd=1&ucbcb=1")).text();
  const match = html.match(/"subscriberCountText":"([0-9][0-9.,]*\s*[KMB]? subscribers)"/i);
  if (!match) throw new Error("Subscriber count not found in public channel header");
  const compact = match[1].replace(/\s+subscribers$/i, "").replace(/\s+/g, "");
  const count = parseCompact(compact);
  if (!Number.isFinite(count)) throw new Error("Subscriber count could not be parsed");
  return { platform: "YouTube", count, display: `${compactFormat.format(count)} subscribers`, metric: "subscribers", source: "Public YouTube channel header" };
}

async function collectTikTok() {
  const data = await (await get("https://tokgauge.com/api/users/tegowalik?live=1")).json();
  const count = Number(data.card?.followers);
  if (!Number.isFinite(count)) throw new Error("Follower count not found in public TikTok profile data");
  return { platform: "TikTok", count, display: `${compactFormat.format(count)} followers`, metric: "followers", source: "Public TikTok profile data" };
}

function instagramCount(data) {
  const user = data.data?.user || data.user || {};
  return Number(user.follower_count ?? user.edge_followed_by?.count);
}

async function collectInstagram() {
  const endpoint = "https://www.instagram.com/api/v1/users/web_profile_info/?username=tegowalik";
  const data = await (await get(endpoint, {
    "x-ig-app-id": "936619743392459",
    Referer: "https://www.instagram.com/tegowalik/",
  })).json();
  const count = instagramCount(data);
  if (!Number.isFinite(count)) throw new Error("Follower count not found in public Instagram profile data");
  return { platform: "Instagram", count, display: `${compactFormat.format(count)} followers`, metric: "followers", source: "Public Instagram profile data" };
}

function currentSocials(source) {
  const match = source.match(/socials:\s*(\[[\s\S]*?\n  \]),\n\n  partners:/);
  if (!match) throw new Error("Could not find CONFIG.socials in script.js");
  return Function(`"use strict"; return (${match[1]});`)();
}

function previousEntries() {
  if (!fs.existsSync(statsPath)) return [];
  const parsed = JSON.parse(fs.readFileSync(statsPath, "utf8"));
  return Array.isArray(parsed.entries) ? parsed.entries : [];
}

function socialLine(item) {
  const base = `    { name: ${JSON.stringify(item.name)}, handle: ${JSON.stringify(item.handle)}, url: ${JSON.stringify(item.url)}, icon: ${JSON.stringify(item.icon)}`;
  return item.audience ? `${base}, audience: ${JSON.stringify(item.audience)}, audienceCount: ${Math.round(item.audienceCount)}, audienceMetric: ${JSON.stringify(item.audienceMetric)} }` : `${base} }`;
}

function updateSocialConfig(source, entries) {
  const replacement = `socials: [\n${entries.map(socialLine).join(",\n")}\n  ],\n\n  partners:`;
  return source.replace(/socials:\s*\[[\s\S]*?\n  \],\n\n  partners:/, replacement);
}

const previous = new Map(previousEntries().map((item) => [item.platform, item]));
const coverage = {};
const collected = new Map();
for (const [platform, collector] of [["YouTube", collectYouTube], ["Instagram", collectInstagram], ["TikTok", collectTikTok]]) {
  try {
    const entry = await collector();
    collected.set(platform, { ...entry, status: "fresh" });
    coverage[platform] = { status: "fresh" };
  } catch (error) {
    const fallback = previous.get(platform);
    if (!fallback) throw new Error(`${platform} failed and has no verified fallback: ${error.message}`);
    collected.set(platform, { ...fallback, display: `${compactFormat.format(fallback.count)} ${fallback.metric}`, status: "retained" });
    coverage[platform] = { status: "retained", error: String(error.message || error) };
  }
}

const source = fs.readFileSync(scriptPath, "utf8");
const socials = currentSocials(source).map((item) => {
  const stats = collected.get(item.name);
  return stats ? { ...item, audience: stats.display, audienceCount: stats.count, audienceMetric: stats.metric } : item;
});
fs.writeFileSync(scriptPath, updateSocialConfig(source, socials));
fs.writeFileSync(statsPath, JSON.stringify({
  generatedAt: new Date().toISOString(),
  entries: [...collected.values()],
  coverage,
}, null, 2) + "\n");

console.log([...collected.values()].map((item) => `${item.platform}: ${item.display} (${item.status})`).join("\n"));
