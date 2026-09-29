/*
 * TEGOWALIK SITE CONFIGURATION
 * Edit the values below to update the whole site. Optional entries with an
 * empty URL are hidden automatically, so the live page never shows dead links.
 */
const CONFIG = {
  profile: {
    name: "Tegowalik",
    pageTitle: "Tegowalik — LEGO engineering in motion",
    tagline: "Built. Automated. Crashed.",
    description: "Large indoor and garden railways with automated stations, train elevators, and Powered Up control.",
    primaryUrl: "https://www.youtube.com/@Tegowalik",
    email: "tegowalik@gmail.com"
  },

  heroImage: {
    src: "assets/photos/tegowalik-2023-v2-min-fixed-min-2-960.webp",
    srcset: "assets/photos/tegowalik-2023-v2-min-fixed-min-2-960.webp 960w, assets/photos/tegowalik-2023-v2-min-fixed-min-2-1600.webp 1600w",
    alt: "A huge multi-level LEGO railway filling a room with trains, bridges, and a train elevator"
  },

  popularSnapshot: "28 September 2026",
  popularVideos: [
    { platform: "TikTok", icon: "tiktok", title: "Long LEGO Trains Through a Gigantic Track Setup", views: 1100000, image: "assets/photos/tegowalik-2023-v3-960.webp", alt: "Long LEGO trains running through a gigantic indoor track setup", url: "https://www.tiktok.com/@tegowalik/video/7515723242867264790" },
    { platform: "YouTube", icon: "youtube", title: "350 m Track, Large Bridges, Automated Switches & Station", views: 793834, image: "assets/photos/2022-16-9-960.webp", alt: "A large LEGO railway with bridges, switches, and multiple trains", url: "https://www.youtube.com/watch?v=CItJ504veHI" },
    { platform: "YouTube", icon: "youtube", title: "LEGO Train Crashes #01", views: 561654, image: "assets/photos/crashes5-960.webp", alt: "LEGO trains colliding on a railway layout", url: "https://www.youtube.com/watch?v=x1rFqrJJlTo" },
    { platform: "YouTube", icon: "youtube", title: "15 Trains, 400 m Track & a Multi-Level Suspension Bridge", views: 359046, image: "assets/photos/tegowalik-2023-v2-min-fixed-min-2-960.webp", alt: "A multi-level LEGO railway with a large suspension bridge", url: "https://www.youtube.com/watch?v=RmNIQbDIi-M" },
    { platform: "TikTok", icon: "tiktok", title: "LEGO Train Crashes on a Bridge", views: 260800, image: "assets/photos/crashes5-960.webp", alt: "A LEGO train crash on a bridge", url: "https://www.tiktok.com/@tegowalik/video/7492348795515063574" },
    { platform: "YouTube", icon: "youtube", title: "400 m Track, Train Elevator, Suspension Bridge & Automation", views: 225544, image: "assets/photos/engineering-1200.webp", alt: "A large indoor LEGO railway with an elevator and elevated bridges", url: "https://www.youtube.com/watch?v=dowNK4egV6Y" },
    { platform: "YouTube", icon: "youtube", title: "LEGO City Train Crashes #03", views: 217643, image: "assets/photos/crashes5-960.webp", alt: "LEGO trains crashing on a complex track layout", url: "https://www.youtube.com/watch?v=2slQXb5EGVo" },
    { platform: "YouTube", icon: "youtube", title: "LEGO Train Crashes #02", views: 138397, image: "assets/photos/crashes5-960.webp", alt: "LEGO train crash compilation", url: "https://www.youtube.com/watch?v=fIOEzxcv-cM" },
    { platform: "YouTube", icon: "youtube", title: "LEGO City Train Crashes #04", views: 127191, image: "assets/photos/crashes5-960.webp", alt: "LEGO trains falling from bridges and colliding", url: "https://www.youtube.com/watch?v=fHL549lLpn0" },
    { platform: "TikTok", icon: "tiktok", title: "Train POV Through a Gigantic Track Setup #02", views: 108300, image: "assets/photos/2022-16-9-960.webp", alt: "Point-of-view run through a gigantic LEGO train track setup", url: "https://www.tiktok.com/@tegowalik/video/7440394892691410198" }
  ],

  socials: [
    { name: "YouTube", handle: "@Tegowalik", url: "https://www.youtube.com/@Tegowalik", icon: "youtube" },
    { name: "Instagram", handle: "@tegowalik", url: "https://www.instagram.com/tegowalik", icon: "instagram" },
    { name: "TikTok", handle: "@tegowalik", url: "https://www.tiktok.com/@tegowalik", icon: "tiktok" },
    { name: "GitHub", handle: "@Tegowalik", url: "https://github.com/Tegowalik", icon: "github" }
  ],

  partners: [
    {
      name: "TrixBrix",
      description: "Tracks, switches, and railway parts. The link is affiliate; enter the code separately at checkout for the discount.",
      discount: "10% off all products",
      code: "TEGOWALIK",
      displayUrl: "trixbrix.eu/?ref=tegowalik",
      image: "assets/photos/5-nah-960.webp",
      srcset: "assets/photos/5-nah-960.webp 960w, assets/photos/5-nah-1600.webp 1057w",
      alt: "A LEGO freight train crossing a TrixBrix bridge above a swimming pool",
      cta: "Visit TrixBrix",
      url: "https://trixbrix.eu/?ref=tegowalik"
    },
    {
      name: "Mould King",
      description: "Save on every product through the Tegowalik partner link.",
      discount: "5% off all products",
      displayUrl: "mouldkingcorp.com/Tegowalik5",
      image: "assets/photos/eurostar-01-960.webp",
      alt: "Mould King Eurostar model on a LEGO railway layout",
      cta: "Visit Mould King",
      url: "https://mouldkingcorp.com/Tegowalik5"
    },
    {
      name: "Cubertime BigBoy",
      description: "See the Cubertime BigBoy steam locomotive through the Tegowalik partner link.",
      discount: "Affiliate link",
      displayUrl: "bit.ly/4hWd3Bp",
      image: "assets/photos/bigboy-01-960.webp",
      alt: "Cubertime BigBoy steam locomotive model on railway track",
      cta: "View the set",
      url: "https://bit.ly/4hWd3Bp"
    }
  ],

  projects: [
    {
      title: "200 m Garden Railway",
      tag: "Outdoor layout",
      description: "Two gardens, more than 200 metres of track, over 2 metres of elevation, long bridges, and a pool crossing.",
      image: "assets/photos/garden-bridge-1200.webp",
      alt: "A large outdoor LEGO railway crossing a garden",
      cta: "Watch the full build",
      url: "https://www.youtube.com/watch?v=fDoafbhYeCU"
    },
    {
      title: "22 Trains on 450 m of Track",
      tag: "Two-room layout",
      description: "A multi-level indoor network running 22 trains across 450 metres of track in two rooms.",
      image: "assets/photos/layout-1200.webp",
      alt: "A large indoor LEGO railway layout with many trains across several levels",
      cta: "Watch setup #07",
      url: "https://www.youtube.com/watch?v=6I8Wf-ZTa8M"
    },
    {
      title: "400 m Indoor Railway",
      tag: "Engineering showcase",
      description: "A room-scale network with a train elevator, suspension bridge, and automated switches.",
      image: "assets/photos/engineering-1200.webp",
      alt: "An expansive indoor LEGO railway with elevated tracks and bridges",
      cta: "Watch the full layout",
      url: "https://www.youtube.com/watch?v=dowNK4egV6Y"
    }
  ],

  resources: [
    {
      title: "20-Way LEGO Train Crossing",
      label: "Free 3D-print files",
      description: "Download the STL files and assembly requirements for the custom 20-way track crossing.",
      image: "assets/photos/2021-2-960.webp",
      alt: "A custom multi-direction LEGO railway crossing",
      cta: "Open the instructions",
      url: "https://pinshape.com/items/112981-3d-printed-lego-trains-20-way-crossing"
    },
    {
      title: "Dual-Motor Train Controller",
      label: "Pybricks code & guide",
      description: "Run two train motors from one City Hub and control both from a single Powered Up remote.",
      image: "assets/photos/60337-2-960.webp",
      alt: "A motorized LEGO passenger train on track",
      cta: "View on GitHub",
      url: "https://github.com/Tegowalik/Pybricks-Train-Controller"
    },
    {
      title: "Three-Level Train Elevator",
      label: "Pybricks code & guide",
      description: "Route trains between three levels with a lift that becomes part of the bridge when aligned.",
      image: "assets/photos/project-elevator.webp",
      alt: "A three-level LEGO train elevator system",
      cta: "View on GitHub",
      url: "https://github.com/Tegowalik/LEGO-Train-Elevator"
    },
    {
      title: "Automated Train Station",
      label: "EV3 code & guide",
      description: "Send arriving trains to a free platform and keep the route reserved until departure.",
      image: "assets/photos/station-1200.webp",
      alt: "Multiple LEGO trains at an automated station",
      cta: "View on GitHub",
      url: "https://github.com/Tegowalik/LEGO-MINDSTORMS-EV3-Automated-Train-Station"
    },
    {
      title: "Automated Switch Controller",
      label: "Pybricks code & examples",
      description: "Detect incoming trains and operate one or more switches with Powered Up or MINDSTORMS hardware.",
      image: "assets/photos/img-8253-960.webp",
      alt: "A LEGO railway with motorized switches and sensors",
      cta: "View on GitHub",
      url: "https://github.com/Tegowalik/LEGO-Switch-Controller"
    }
  ],

  features: [
    {
      publication: "All3DP",
      title: "The 30 Best 3D-Printed Trains & Railways",
      description: "Tegowalik's multi-way LEGO crossing was selected for All3DP's editorial roundup of railway print projects.",
      cta: "Read the feature",
      url: "https://all3dp.com/2/3d-printed-railway-3d-printed-train/"
    },
    {
      publication: "Rebrickable",
      title: "Tegowalik's train builds",
      description: "Instructions and build references collected on the LEGO building community.",
      cta: "View the builds",
      url: "https://rebrickable.com/users/Tegowalik/mocs/"
    },
    {
      publication: "Reddit",
      title: "Tegowalik around the LEGO community",
      description: "Find community discussions and shared Tegowalik railway projects.",
      cta: "Search Reddit",
      url: "https://www.reddit.com/search/?q=tegowalik"
    }
  ],

  gallery: [
    {
      src: "assets/photos/layout-1200.webp",
      alt: "A large multi-level LEGO railway layout filled with passenger trains",
      title: "The full network"
    },
    {
      src: "assets/photos/rail-network-1200.webp",
      alt: "LEGO passenger trains crossing a complex bridge and track network",
      title: "Engineered crossings"
    },
    {
      src: "assets/photos/engineering-1200.webp",
      alt: "An expansive LEGO railway system with many elevated tracks",
      title: "Built at scale"
    },
    {
      src: "assets/photos/station-1200.webp",
      alt: "Several LEGO passenger trains waiting beside a station platform",
      title: "At the station"
    },
    {
      src: "assets/photos/garden-freight-1200.webp",
      alt: "Two turquoise LEGO freight locomotives running through a garden",
      title: "Garden freight"
    },
    {
      src: "assets/photos/garden-pool-1200.webp",
      alt: "A LEGO freight train crossing a long bridge above a swimming pool",
      title: "Across the pool"
    }
  ]
};

const ICONS = {
  youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm-.2 2A3.3 3.3 0 0 0 4 7.3v9.4A3.3 3.3 0 0 0 7.3 20h9.4a3.3 3.3 0 0 0 3.3-3.3V7.3A3.3 3.3 0 0 0 16.7 4H7.3Zm10.2 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.7 2c.3 2.6 1.8 4.1 4.3 4.3v3a8.8 8.8 0 0 1-4.3-1v6.1a7.1 7.1 0 1 1-6.1-7V11a3.6 3.6 0 1 0 2.5 3.4V2h3.6Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z"/></svg>'
};

function validWebUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

function externalLinkAttributes(anchor, sponsored = false) {
  anchor.target = "_blank";
  anchor.rel = `noopener noreferrer${sponsored ? " sponsored" : ""}`;
}

function renderProfile() {
  document.title = CONFIG.profile.pageTitle;
  document.querySelector('meta[name="description"]').content = CONFIG.profile.description;
  document.querySelector('meta[property="og:title"]').content = CONFIG.profile.pageTitle;
  document.querySelector('meta[property="og:description"]').content = CONFIG.profile.description;
  document.querySelector('meta[name="twitter:title"]').content = CONFIG.profile.pageTitle;
  document.querySelector('meta[name="twitter:description"]').content = CONFIG.profile.description;
  document.querySelectorAll("[data-profile-name]").forEach((element) => {
    element.textContent = CONFIG.profile.name;
  });
  document.querySelector("[data-tagline]").textContent = CONFIG.profile.tagline;
  document.querySelector("[data-description]").textContent = CONFIG.profile.description;

  const heroImage = document.querySelector("[data-hero-image]");
  if (CONFIG.heroImage.src && CONFIG.heroImage.alt) {
    heroImage.src = CONFIG.heroImage.src;
    heroImage.alt = CONFIG.heroImage.alt;
    if (CONFIG.heroImage.srcset) heroImage.srcset = CONFIG.heroImage.srcset;
  }

  const primaryLink = document.querySelector("[data-primary-link]");
  if (validWebUrl(CONFIG.profile.primaryUrl)) {
    primaryLink.href = CONFIG.profile.primaryUrl;
    externalLinkAttributes(primaryLink);
  } else {
    primaryLink.hidden = true;
  }
}

function renderGallery() {
  const entries = CONFIG.gallery.filter((item) => item.src && item.alt && item.title);
  if (!entries.length) return;

  const section = document.querySelector("#gallery");
  const container = document.querySelector("#gallery-grid");
  entries.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-item";
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 1200;
    image.height = 675;
    const caption = document.createElement("figcaption");
    caption.textContent = item.title;
    figure.append(image, caption);
    container.append(figure);
  });
  section.hidden = false;
}

function renderSocials() {
  const container = document.querySelector("#social-links");
  CONFIG.socials.filter((item) => validWebUrl(item.url)).forEach((item) => {
    const link = document.createElement("a");
    link.className = "social-card";
    link.href = item.url;
    link.setAttribute("aria-label", `Open ${item.name}: ${item.handle}`);
    externalLinkAttributes(link);

    const icon = document.createElement("span");
    icon.className = "social-icon";
    icon.innerHTML = ICONS[item.icon] || "";

    const meta = document.createElement("span");
    meta.className = "social-meta";
    const name = document.createElement("span");
    name.className = "social-name";
    name.textContent = item.name;
    const handle = document.createElement("span");
    handle.className = "social-handle";
    handle.textContent = item.handle;
    meta.append(name, handle);

    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    link.append(icon, meta, arrow);
    container.append(link);
  });
}

function copyText(value, button) {
  const fallback = () => {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    document.execCommand("copy");
    field.remove();
  };

  const action = navigator.clipboard?.writeText
    ? navigator.clipboard.writeText(value).catch(fallback)
    : Promise.resolve(fallback());

  Promise.resolve(action).then(() => {
    const original = button.textContent;
    button.textContent = "Copied";
    button.classList.add("copied");
    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("copied");
    }, 1600);
  });
}

function makeCopyButton(label, value) {
  const button = document.createElement("button");
  button.className = "copy-button";
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", () => copyText(value, button));
  return button;
}

function renderPartners() {
  const entries = CONFIG.partners.filter((item) =>
    item.name && item.description && item.image && item.alt && item.cta && validWebUrl(item.url)
  );
  if (!entries.length) return;

  const section = document.querySelector("#partners");
  const container = document.querySelector("#partner-links");
  entries.forEach((item) => {
    const card = document.createElement("article");
    card.className = "partner-card";

    const imageLink = document.createElement("a");
    imageLink.className = "partner-image-link";
    imageLink.href = item.url;
    imageLink.setAttribute("aria-label", "Open " + item.name + " partner link");
    externalLinkAttributes(imageLink, true);
    const image = document.createElement("img");
    image.src = item.image;
    if (item.srcset || item.image.endsWith("-960.webp")) {
      image.srcset = item.srcset || item.image + " 960w, " + item.image.replace("-960.webp", "-1600.webp") + " 1600w";
      image.sizes = "(min-width: 1020px) 33vw, (min-width: 700px) 50vw, 100vw";
    }
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 960;
    image.height = 540;
    imageLink.append(image);

    const body = document.createElement("div");
    body.className = "partner-body";
    const title = document.createElement("h3");
    title.textContent = item.name;
    const description = document.createElement("p");
    description.textContent = item.description;
    body.append(title, description);

    if (item.discount) {
      const offer = document.createElement("div");
      offer.className = "partner-offer";
      const discount = document.createElement("span");
      discount.className = "discount";
      discount.textContent = item.discount;
      offer.append(discount);
      if (item.code) {
        const code = document.createElement("code");
        code.className = "discount-code";
        code.textContent = item.code;
        offer.append(code, makeCopyButton("Copy code", item.code));
      }
      body.append(offer);
    }

    const visibleUrl = document.createElement("span");
    visibleUrl.className = "partner-url";
    visibleUrl.textContent = item.displayUrl || new URL(item.url).hostname;
    body.append(visibleUrl);

    const actions = document.createElement("div");
    actions.className = "partner-actions";
    const link = document.createElement("a");
    link.className = "partner-cta";
    link.href = item.url;
    link.innerHTML = `<span></span><span aria-hidden="true">↗</span>`;
    link.firstElementChild.textContent = item.cta;
    externalLinkAttributes(link, true);
    actions.append(link, makeCopyButton("Copy link", item.url));
    body.append(actions);

    card.append(imageLink, body);
    container.append(card);
  });
  section.hidden = false;
}

function renderPopular() {
  const entries = CONFIG.popularVideos
    .filter((item) => item.platform && item.title && Number.isFinite(item.views) && item.image && item.alt && validWebUrl(item.url))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);
  if (!entries.length) return;

  const section = document.querySelector("#popular");
  const container = document.querySelector("#popular-grid");
  const numberFormat = new Intl.NumberFormat("en-US");

  entries.forEach((item, index) => {
    const link = document.createElement("a");
    link.className = "popular-card" + (index === 0 ? " popular-card-lead" : "");
    link.href = item.url;
    link.setAttribute("aria-label", "Number " + (index + 1) + ": " + item.title + " on " + item.platform + ", " + numberFormat.format(item.views) + " views");
    externalLinkAttributes(link);

    const image = document.createElement("img");
    image.src = item.image;
    if (item.image.endsWith("-960.webp")) {
      image.srcset = item.image + " 960w, " + item.image.replace("-960.webp", "-1600.webp") + " 1600w";
      image.sizes = index === 0 ? "(min-width: 800px) 58vw, 100vw" : "(min-width: 800px) 28vw, 100vw";
    }
    image.alt = item.alt;
    image.loading = index < 2 ? "eager" : "lazy";
    image.decoding = "async";

    const shade = document.createElement("span");
    shade.className = "popular-shade";
    const rank = document.createElement("span");
    rank.className = "popular-rank";
    rank.textContent = String(index + 1).padStart(2, "0");

    const content = document.createElement("span");
    content.className = "popular-content";
    const platform = document.createElement("span");
    platform.className = "popular-platform";
    const icon = document.createElement("span");
    icon.innerHTML = ICONS[item.icon] || "";
    const platformName = document.createElement("span");
    platformName.textContent = item.platform;
    platform.append(icon, platformName);

    const title = document.createElement("strong");
    title.className = "popular-title";
    title.textContent = item.title;
    const views = document.createElement("span");
    views.className = "popular-views";
    views.textContent = numberFormat.format(item.views) + " views";

    content.append(platform, title, views);
    link.append(image, shade, rank, content);
    container.append(link);
  });

  const snapshot = document.querySelector("#popular-snapshot");
  snapshot.textContent = "View-count snapshot: " + CONFIG.popularSnapshot + ". Counts change continuously and are refreshed manually.";
  section.hidden = false;
}

function renderProjects() {
  const entries = CONFIG.projects.filter((item) =>
    item.title && item.tag && item.description && item.image && item.alt && item.cta && validWebUrl(item.url)
  );
  if (!entries.length) return;

  const section = document.querySelector("#projects");
  const container = document.querySelector("#project-grid");
  entries.forEach((item, index) => {
    const link = document.createElement("a");
    link.className = "project-card";
    link.href = item.url;
    externalLinkAttributes(link);

    const image = document.createElement("img");
    image.src = item.image;
    if (item.image.endsWith("-960.webp")) {
      image.srcset = item.image + " 960w, " + item.image.replace("-960.webp", "-1600.webp") + " 1600w";
      image.sizes = "(min-width: 1020px) 33vw, (min-width: 700px) 50vw, 100vw";
    }
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 1200;
    image.height = 675;

    const content = document.createElement("span");
    content.className = "project-content";
    const meta = document.createElement("span");
    meta.className = "project-meta";
    meta.textContent = `${String(index + 1).padStart(2, "0")} · ${item.tag}`;
    const title = document.createElement("strong");
    title.className = "project-title";
    title.textContent = item.title;
    const description = document.createElement("span");
    description.className = "project-description";
    description.textContent = item.description;
    const cta = document.createElement("span");
    cta.className = "project-cta";
    cta.innerHTML = `<span></span><span aria-hidden="true">↗</span>`;
    cta.firstElementChild.textContent = item.cta;

    content.append(meta, title, description, cta);
    link.append(image, content);
    container.append(link);
  });
  section.hidden = false;
}

function renderResources() {
  const entries = CONFIG.resources.filter((item) =>
    item.title && item.label && item.description && item.image && item.alt && item.cta && validWebUrl(item.url)
  );
  if (!entries.length) return;

  const section = document.querySelector("#resources");
  const container = document.querySelector("#resource-grid");
  entries.forEach((item) => {
    const link = document.createElement("a");
    link.className = "resource-card";
    link.href = item.url;
    externalLinkAttributes(link);

    const image = document.createElement("img");
    image.src = item.image;
    if (item.image.endsWith("-960.webp")) {
      image.srcset = item.image + " 960w, " + item.image.replace("-960.webp", "-1600.webp") + " 1600w";
      image.sizes = "(min-width: 1020px) 33vw, (min-width: 700px) 50vw, 100vw";
    }
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 960;
    image.height = 540;

    const content = document.createElement("span");
    content.className = "resource-content";
    const label = document.createElement("span");
    label.className = "resource-label";
    label.textContent = item.label;
    const title = document.createElement("strong");
    title.className = "resource-title";
    title.textContent = item.title;
    const description = document.createElement("span");
    description.className = "resource-description";
    description.textContent = item.description;
    const cta = document.createElement("span");
    cta.className = "resource-cta";
    cta.innerHTML = `<span></span><span aria-hidden="true">↗</span>`;
    cta.firstElementChild.textContent = item.cta;

    content.append(label, title, description, cta);
    link.append(image, content);
    container.append(link);
  });
  section.hidden = false;
}

function renderFeatures() {
  const entries = CONFIG.features.filter((item) =>
    item.publication && item.title && item.description && item.cta && validWebUrl(item.url)
  );
  if (!entries.length) return;

  const section = document.querySelector("#features");
  const container = document.querySelector("#feature-links");
  entries.forEach((item) => {
    const link = document.createElement("a");
    link.className = "feature-card";
    link.href = item.url;
    externalLinkAttributes(link);

    const publication = document.createElement("span");
    publication.className = "feature-publication";
    publication.textContent = item.publication;
    const text = document.createElement("span");
    text.className = "feature-text";
    const title = document.createElement("strong");
    title.textContent = item.title;
    const description = document.createElement("span");
    description.textContent = item.description;
    text.append(title, description);
    const cta = document.createElement("span");
    cta.className = "feature-cta";
    cta.textContent = item.cta + " ↗";
    link.append(publication, text, cta);
    container.append(link);
  });
  section.hidden = false;
}

function renderBusiness() {
  const container = document.querySelector("#business-actions");

  if (CONFIG.profile.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.profile.email)) {
    const email = document.createElement("a");
    email.className = "business-button";
    email.href = `mailto:${CONFIG.profile.email}?subject=Collaboration%20inquiry`;
    email.textContent = CONFIG.profile.email;
    container.append(email);
  }

  const instagram = CONFIG.socials.find((item) => item.icon === "instagram" && validWebUrl(item.url));
  if (instagram) {
    const message = document.createElement("a");
    message.className = `business-button${container.children.length ? " secondary" : ""}`;
    message.href = instagram.url;
    message.textContent = "Message on Instagram ↗";
    externalLinkAttributes(message);
    container.append(message);
  }

  if (!container.children.length) document.querySelector("#business").hidden = true;
}

renderProfile();
renderPartners();
renderPopular();
renderProjects();
renderResources();
renderFeatures();
renderSocials();
renderGallery();
renderBusiness();
document.querySelector("#year").textContent = new Date().getFullYear();
