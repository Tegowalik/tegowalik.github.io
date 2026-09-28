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
    src: "assets/photos/hero-960.webp",
    srcset: "assets/photos/hero-960.webp 960w, assets/photos/hero-1600.webp 1600w",
    alt: "A multi-level LEGO railway with several trains and a Tegowalik sign"
  },

  socials: [
    { name: "YouTube", handle: "@Tegowalik", url: "https://www.youtube.com/@Tegowalik", icon: "youtube" },
    { name: "Instagram", handle: "@tegowalik", url: "https://www.instagram.com/tegowalik", icon: "instagram" },
    { name: "TikTok", handle: "@tegowalik", url: "https://www.tiktok.com/@tegowalik", icon: "tiktok" },
    { name: "GitHub", handle: "@Tegowalik", url: "https://github.com/Tegowalik", icon: "github" }
  ],

  partners: [
    {
      name: "TrixBrix",
      description: "Save on all TrixBrix products with the Tegowalik discount code.",
      discount: "Code TEGOWALIK · 10% off",
      cta: "Shop with discount",
      url: "https://trixbrix.eu/?ref=tegowalik"
    },
    {
      name: "Mould King",
      description: "Save on every product through the Tegowalik partner link.",
      discount: "5% discount",
      cta: "Shop with discount",
      url: "https://mouldkingcorp.com/Tegowalik5"
    },
    {
      name: "Cubertime BigBoy",
      description: "Open the BigBoy partner link from Tegowalik.",
      discount: "",
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
      title: "Three-Level Train Elevator",
      tag: "Pybricks system",
      description: "A modular lift that routes trains between three levels and converts into a bridge when aligned.",
      image: "assets/photos/project-elevator.webp",
      alt: "A three-level LEGO train elevator system",
      cta: "Explore the code",
      url: "https://github.com/Tegowalik/LEGO-Train-Elevator"
    },
    {
      title: "Automated Train Station",
      tag: "EV3 automation",
      description: "Three EV3 bricks guide incoming trains to the best free platform and reserve it until departure.",
      image: "assets/photos/station-1200.webp",
      alt: "Multiple LEGO trains positioned at an automated station",
      cta: "Explore the code",
      url: "https://github.com/Tegowalik/LEGO-MINDSTORMS-EV3-Automated-Train-Station"
    }
  ],

  resources: [
    {
      title: "20-Way LEGO Train Crossing",
      label: "Free 3D-print files",
      description: "Download the STL files and assembly requirements for the custom 20-way track crossing.",
      cta: "Open the instructions",
      url: "https://pinshape.com/items/112981-3d-printed-lego-trains-20-way-crossing"
    },
    {
      title: "Dual-Motor Train Controller",
      label: "Pybricks code & guide",
      description: "Run two train motors from one City Hub and control both from a single Powered Up remote.",
      cta: "View on GitHub",
      url: "https://github.com/Tegowalik/Pybricks-Train-Controller"
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

function renderPartners() {
  const entries = CONFIG.partners.filter((item) => item.name && item.description && item.cta && validWebUrl(item.url));
  if (!entries.length) return;

  const section = document.querySelector("#partners");
  const container = document.querySelector("#partner-links");
  entries.forEach((item, index) => {
    const link = document.createElement("a");
    link.className = "partner-card";
    link.href = item.url;
    externalLinkAttributes(link, true);

    const number = document.createElement("span");
    number.className = "partner-index";
    number.textContent = String(index + 1).padStart(2, "0");
    const title = document.createElement("h3");
    title.textContent = item.name;
    const description = document.createElement("p");
    description.textContent = item.description;
    link.append(number, title, description);

    if (item.discount) {
      const discount = document.createElement("span");
      discount.className = "discount";
      discount.textContent = item.discount;
      link.append(discount);
    }

    const cta = document.createElement("span");
    cta.className = "partner-cta";
    cta.innerHTML = `<span></span><span aria-hidden="true">↗</span>`;
    cta.firstElementChild.textContent = item.cta;
    link.append(cta);
    container.append(link);
  });
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
    item.title && item.label && item.description && item.cta && validWebUrl(item.url)
  );
  if (!entries.length) return;

  const section = document.querySelector("#resources");
  const container = document.querySelector("#resource-grid");
  entries.forEach((item) => {
    const link = document.createElement("a");
    link.className = "resource-card";
    link.href = item.url;
    externalLinkAttributes(link);

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

    link.append(label, title, description, cta);
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
renderProjects();
renderResources();
renderSocials();
renderGallery();
renderBusiness();
document.querySelector("#year").textContent = new Date().getFullYear();
