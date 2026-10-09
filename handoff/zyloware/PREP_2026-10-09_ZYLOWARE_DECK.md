# PREP: Zyloware / "send to anyone" version of the Safilo AI Bulk Studio deck
Status 2026-10-09 evening: GATHERED, NOT BUILT. Juan: "let's do this in the morning... gather what you need but don't build yet."
Nothing published. No credits spent. Test files live only in the cloud scratchpad + this folder.

## The ask
Same 12-slide deck as Safilo, but the product carries NO Levi's mark: OCD icon (orange-bolt O) on the temple, OCD RAPID STUDIO wordmark on the lens. Then the deck can go to Zyloware or anyone. (Zyloware: 1.800.765.3700, zyloware.com; old Shaq QD 165 layout PDF in Drive.)

## Assets gathered (Drive ids)
- Icon: OCD_RAPID_STUDIO_ICON_O_ZEUS_1024_NO-GROUND.png (1qKk-2CvJ31-C5CYzA9sCwnJiTj7jaX_F), 1024 sq, transparent. SVG also exists (1L8F0NN6RDymXS_QE0gov8v-SRW0j6Z07).
- Wordmark: OCD_RAPID_STUDIO_LOCKUP_ONELINE_FOR_DARK_BACKGROUNDS.png (1sg9VYnNK8ZdQ88hsheYXNqBfi_eAG0hN) 2400x368, cream text; top 240 px = "OCD/RAPID STUDIO" line (used on the brown lens). Light-bg version 1XZDxTQ3rsqWJ-2x_dIiHOVFD9p-kn-zn.
- Product stills already in hand from the Safilo job (2048 sq PNGs): 3/4 build shot, front, side, 3/4 right, back, two camera-height 3/4 views.
- Videos: 360 spin (1280x720, 9.5 s) + 4 on-model clips (832x1120, 5 s). ALL show the Levi's temple print.

## Where every Levi's mark is (2048-px coords, measured)
original 3/4: temple (1460,915)-(1575,985) · far-temple tiny text (320,712)-(410,758) · no lens mark (add wordmark at (1150,915)-(1320,975))
front v_eb88: right lens (1650,735)-(1810,810)
side v_5fc8: temple (1430,880)-(1610,955) · inside text "Levi's ... 58" (1170,785)-(1370,825)
3/4R v_right: temple (420,845)-(570,905) · lens (1690,780)-(1810,840)
back v_dfb8: mirrored "Levi's" seen THROUGH the left lens (390,640)-(530,700) — it is dark-on-brown, the silver mask found 0 px: needs a different mask (dark text) or manual patch
cam eye view_a: temple (1460,845)-(1580,905) · lens (1140,825)-(1310,895)
cam high view_b: temple (1440,945)-(1610,1010) · lens (1150,995)-(1340,1070)

## Test pass result (debrand.py, OpenCV Telea inpaint + overlay) — see test_pass_review_A/B.jpg
Works: temple print removal on original, side, 3/4R, view_a (clean tortoise fill). Wordmark on lens reads well on front and view_a.
Not good enough yet:
1. Icon on temple is too small (reads as a dot). Needs ~2x size and a slight silver/etched treatment, not a white sticker.
2. view_b: Levi's on BOTH temple and lens only partly removed (boxes 20-40 px too high/left); wordmark overlaps leftover "Lev".
3. back view: mirrored dark Levi's untouched (mask tuned for silver).
4. 3/4R lens: wordmark too wide for that lens, sits on the frame rim.
5. Some mask bleed onto temple edge highlights (white specks) on original/view_b: shrink dilation or clip mask to the dark-pixel region.

## Decision for the morning (Juan)
A. Retouch route (here, free): fix the 5 points above on 7 stills (~1 h). VIDEOS cannot be fixed here frame-by-frame with quality: spin = 229 frames, 4 clips x 121 frames. Either leave videos out of the "anyone" deck or route them through the PC inpaint lane (ComfyUI/Wan, ogando-local-inpaint-platforms).
B. Re-run route (the honest demo, costs app credits): de-brand ONLY the 3/4 build shot here, upload it to OCD Rapid Studio, and let the app regenerate views, spin, looks and clips from it. Engine cost about $1.50 for the full frame (list 994 cr); then every asset in the deck is genuinely app-made from one OCD-branded photo, videos included. Recommended.
C. Hybrid: A for stills now, B for videos.

## Deck changes once assets exist
Copy the Safilo deck files (handoff/safilo/slides) -> new artifact "AI Bulk Studio" (or "Zyloware AI Bulk Studio"); swap the 13 /_blob ids; cover line "Presented by Ali · Safilo" -> client-neutral or Zyloware; prices unchanged (994 cr / $99.40 per frame, 10 s 1080p catalog turn). New artifact = new link, fine: the Safilo PRESENTS link is never replaced by this.
