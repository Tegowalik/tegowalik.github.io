# Tegowalik link-in-bio website

A fast, dependency-free static site for GitHub Pages. Open `index.html` directly to preview it—there is no build step.

## Update content and links

All editable page content is in the clearly marked `CONFIG` object at the top of `script.js`:

- `profile` controls the name, page title, tagline, description, primary YouTube link, and business email.
- `heroImage` controls the main image and its accessible description.
- `popularSnapshot` and `popularVideos` control the dated cross-platform Top 10. Update the date and counts together; entries are sorted automatically.
- `socials` controls the social profile cards.
- `partners` controls affiliate and discount cards.
- `projects` controls the featured signature projects.
- `resources` controls downloadable files, tutorials, and code links.
- `features` controls editorial coverage and community references.
- `gallery` controls the photo gallery.

An entry is displayed only when it has the required content and, for links, a valid `http://` or `https://` URL. Remove an entry or leave its URL empty to hide it. If all partner, popular-video, or gallery entries are removed, that complete section is hidden.

## Replace imagery

Keep original photos locally in `img/`. This directory is ignored by Git so the large source files are not deployed. Website-ready WebP versions live in `assets/photos/`.

The reusable optimizer requires FFmpeg:

```bash
./scripts/optimize-images.sh img assets/photos
```

Pass filenames after the two directories to process only selected images:

```bash
./scripts/optimize-images.sh img assets/photos "01.JPG" "2022_16.9.jpg"
```

It produces 960 px and 1600 px WebP variants with safe lowercase filenames. After adding images, reference the generated paths in any image-enabled `CONFIG` entry. Filenames ending in `-960.webp` automatically use their matching `-1600.webp` file as a responsive high-resolution source.

For social sharing, replace `assets/share-card.jpg` with another 1200 × 630 image and keep both matching metadata paths in `index.html` aligned if the filename changes.

## Change text

The main name, tagline, and description live in `CONFIG.profile`. Section headings and the LEGO trademark notice are in `index.html`.

## Deploy with GitHub Pages

1. Push these files to the repository's default branch.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the default branch and the `/ (root)` folder, then save.

All asset paths are relative, so the site works on a custom domain and on a GitHub Pages repository subdirectory.
