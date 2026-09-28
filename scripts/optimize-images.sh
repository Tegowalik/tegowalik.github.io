#!/usr/bin/env bash
set -euo pipefail

input_dir=${1:-img}
output_dir=${2:-assets/photos}

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg is required." >&2
  exit 1
fi

if [[ ! -d "$input_dir" ]]; then
  echo "Error: input directory '$input_dir' does not exist." >&2
  exit 1
fi

mkdir -p "$output_dir"
shift $(( $# >= 2 ? 2 : $# ))

declare -a files
if (( $# > 0 )); then
  for filename in "$@"; do
    files+=("$input_dir/$filename")
  done
else
  while IFS= read -r -d '' image_path; do
    files+=("$image_path")
  done < <(find "$input_dir" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0)
fi

for image_path in "${files[@]}"; do
  if [[ ! -f "$image_path" ]]; then
    echo "Skipping missing file: $image_path" >&2
    continue
  fi

  filename=$(basename "$image_path")
  stem=${filename%.*}
  slug=$(printf '%s' "$stem" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-|-$//g')

  for width in 960 1600; do
    output_path="$output_dir/${slug}-${width}.webp"
    ffmpeg -loglevel error -y -i "$image_path" \
      -vf "scale='min(${width},iw)':-2" \
      -c:v libwebp -quality 78 -compression_level 6 -an "$output_path"
    echo "Created $output_path"
  done
done
