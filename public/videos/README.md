# Video files

Encoded clips go in this folder and are served from `/videos/<name>`.

- Ship an `.mp4` (H.264 + AAC) for compatibility, and optionally a `.webm` (VP9 or
  AV1) listed first for the browsers that take it.
- Give every clip a poster image so the page has something to show before playback.
- Caption anything with speech: put a `.vtt` file next to the clip and point the
  entry's `captions` field at it.
- Cloudflare Workers static assets cap a single file at 25 MiB. Anything longer or
  larger belongs on a streaming host — set `src` to that URL instead.
