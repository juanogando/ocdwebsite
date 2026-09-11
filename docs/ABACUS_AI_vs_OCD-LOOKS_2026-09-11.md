# Abacus AI vs OCD•LOOKS — research and comparison

Written 2026-09-11 (Juan: "Research abacus ai and compare to OCD-LOOKS").
Lane: cloud session, no device bridge. OCD-LOOKS facts below come from files read this session in the Drive bridge
(`OCD_PRICING_MASTER_2026-09-11.md`, `OCD-LOOKS_360_EXACT_STUDIO_and_OCD_ACADEMY_BUILD_SPEC.md`,
`OCD-LOOKS_BATCH_DESIGN_VIDEO_PROCESS.md`, `PROPOSAL_360_EXACT_PRICING_2026-09-11.md`,
`COMPARE_CURRENT_vs_PROPOSED_2026-09-11.md`, `SESSION_RECAP_2026-09-11_EVE_360_EXACT_BUILD.md`, all read at their
21:27 UTC versions) and the "OCD LOOKS (PHASE 1-OFFERING)" emails sent 2026-08-31.
Abacus facts come from web search on 2026-09-11; abacus.ai's own pages are blocked from this container, so every
Abacus number is second-hand and is cited. Nothing about `dev\ocd-looks` code was read this session.

---

## 0 · The one-paragraph answer

Abacus AI is a general-purpose "super assistant": one $10 or $20 seat that fronts more than 100 chat, image and video
models, an autonomous agent (DeepAgent, now "Abacus AI Agent") that builds and deploys apps, and a creative Studio for
image and video generation. It is horizontal and model-first. OCD•LOOKS is vertical and workflow-first: a directed studio
for product and fashion designers that takes a spec drawing to rendered product, on-model, campaign and 360 with a locked
cast and locked look. **They are not the same product and they do not compete on the same axis.** The real overlap is
that a resourceful designer can reach the same underlying model families (Nano Banana, FLUX, Seedream, Kling, Seedance,
Magnific upscaling) inside Abacus Studio for $10 a month and hand-assemble part of what OCD•LOOKS does in one click. Abacus
does not offer a fashion try-on engine, a locked cast, a spec-accurate multi-view, an exact 360, a tech pack, or any
fashion vocabulary. OCD•LOOKS' moat is the pipeline and the fidelity, not the models; the price gap per action is the
thing to be ready to explain. **And the gap is widening in OCD•LOOKS' favour tonight:** 360 EXACT STUDIO is built on
the `exact360` branch and deployed to a Vercel preview, four more tabs are specified behind it, per-action prices are
priced out, and Juan decided at 17:25 to raise ELITE to $99 and LICENSE to $249 (not yet in code). Section 2b has all of
it. None of that has an Abacus equivalent; Abacus is a price anchor, not a rival.

---

## 1 · What Abacus AI is (verified 2026-09-11, second-hand)

**Company and shape.** Abacus.AI sells two very different things under one brand: an enterprise MLOps / custom-model
platform (quote-only, reported from $5,000 per month) and a consumer/prosumer bundle called ChatLLM Teams.
Sources: [Abacus blog review](https://blog.abacus.ai/blog/2026/03/23/abacus-ai-review-chatllm-deepagent-pricing-2026/),
[eesel pricing guide](https://www.eesel.ai/blog/abacus-ai-pricing),
[KDnuggets honest review](https://www.kdnuggets.com/2026/08/abacus/honest-abacus-ai-review).

**Products in the bundle.**
- **ChatLLM** — the chat interface. Routes to more than 100 models (GPT-5.5/5.6, Claude Opus 4.8 and Sonnet, Gemini 3.1 Pro,
  Grok, DeepSeek, Kimi, Qwen, open-source), with RouteLLM auto-picking a model. Documents, code, web search, custom chatbots,
  Slack and Teams integration. [ChatLLM FAQ](https://chatllm.abacus.ai/faq), [Abacus.AI home](https://abacus.ai/).
- **Abacus AI Studio** — the creative surface. Text-to-image, image edit (GPT Image 1.5/2 Edit, Qwen Image Edit),
  text-to-video, image-to-video, video-to-video, lip-sync, motion control (reference video up to 30 s), image and video
  upscaling, SVG output. Image models listed: GPT Image 1.5 and 2, Nano Banana 2 and Pro, Seedream 4.5, Midjourney,
  Grok Imagine, FLUX.2 Pro, Hunyuan Image 3.0, Wan 2.7, Imagen 4, Recraft SVG, Ideogram 3.0, Magnific Upscaler. Video models
  listed: Sora 2, Seedance 2.0 and 1.5 Pro, Wan 2.5, Hailuo 2, Kling v3 / O3 / v2.6 Motion Control, Luma, Veo 3.1, Grok
  Imagine Video, Topaz Upscaler. [Studio FAQ](https://studio.abacus.ai/faq), [Studio](https://studio.abacus.ai/),
  [Kompozy review](https://kompozy.io/reviews/abacus-ai-studio),
  [Abacus on X](https://x.com/abacusai/status/2032593044739149911).
- **DeepAgent / Abacus AI Agent** — autonomous agent: deep research, presentations, browser automation, building and
  deploying web apps, connecting Gmail and Google Workspace, short videos. [DeepAgent](https://deepagent.abacus.ai/),
  [myclaw review](https://myclaw.ai/blog/abacus-ai-agent-review).
- **AppLLM** ($10 per month) — browser app builder that bundles ChatLLM; **SuperComputer** — persistent hosting, databases,
  scheduled jobs. [AppLLM](https://appllm.abacus.ai/),
  [Robotics & Automation News guide](https://roboticsandautomationnews.com/2026/08/24/abacus-ai-complete-guide-chatllm-personal-agents-supercomputer-and-studio-explained/104435/).

**Pricing (MONEY).**

| Plan | Price | Credits / month | Notes |
|---|---:|---:|---|
| ChatLLM Basic | $10 per user per month ($7 first month) | 20,000 | 3 agent conversations; advanced models throttled at 15,000 credits per reviewers |
| ChatLLM Pro | $20 per user per month | 30,000 | unrestricted agent use, broader Studio access |
| AppLLM | $10 per month | — | app builder + ChatLLM |
| Enterprise | from $5,000 per month, sales-led | — | full API, SSO, RBAC, private deployment, custom models |

Credits are spent per action; heavier media and agent work costs more. **No public per-image or per-video credit table
was found**; the Basic tier caps a single conversation at 2,500 credits. Full API access is Enterprise-only; Basic and Pro
get limited API for custom chatbots. Sources: [eesel review](https://www.eesel.ai/blog/abacus-ai),
[UsagePricing](https://www.usagepricing.com/blueprint/abacus-ai), [AITrendTool](https://aitrendtool.com/tools/abacus-ai),
[Krater](https://krater.ai/blog/abacus-ai-chatllm-alternative), [Scribe pricing](https://scribehow.com/page/Abacus_AI_Pricing_2026_How_Much_Does_ChatLLM_Actually_Cost_Per_User__ATMfDmLJTr2mp507p335FQ).

**What users complain about.** Credits burn faster than expected and the service locks users out of advanced models at
roughly 75 % of the monthly allotment; a March 2026 incident had the OpenClaw product drain full balances in under a week;
no refunds when the platform malfunctions; opaque credit accounting; steep learning curve; Trustpilot 3.7 / 5 from 180
reviews. Sources: [eesel reviews roundup](https://www.eesel.ai/blog/abacus-ai-reviews),
[checkthat.ai](https://checkthat.ai/brands/abacus-ai/reviews), [Trustpilot](https://se.trustpilot.com/review/abacus.ai),
[dev.to](https://dev.to/jules_ndanga_623ac876c3bc/honest-review-of-mamouthia-and-chatllmabacusai-a-shiny-front-but-an-empty-back-room-1bn4).

**Not found.** A published content policy for image generation (no search hit on Abacus NSFW rules); per-model credit
costs; any fashion, try-on, product-consistency, tech-pack or 3-D feature. Absence in search is not proof of absence.

**Juan's own exposure.** Gmail searched for "abacus", "ChatLLM", "DeepAgent": four hits, all unrelated newsletters.
No Abacus account, receipt or trial in mail. $0 spent.

---

## 2 · What OCD•LOOKS is (from Juan's own files, read this session)

**Positioning (Juan's words, 2026-08-31 emails).** "An AI studio platform for product and fashion brands." One unbroken
take: spec sheet → rendered product → still life → on-model → campaign image → campaign film. "This isn't a prompt box —
it's a directed studio." Eyewear shown; apparel, footwear, handbags, accessories, jewelry, tech "if it has a silhouette and
a spec." Live at looks.ogandocreativedesign.com, every plan starts with a free week. Walkthrough film:
https://youtu.be/Tk-J9_cFFAM.

**Shipped actions and credits (pricing master §1, mirrors `src/lib/pricing.ts`, locked 2026-07-15).**
Sketch Render 5 · Enhance 3 · Flat-lay 8 · Packshot 8 · Build-the-Look try-on HD 4 (standard 2) · chained Edit 4 ·
Model Swap 10 · Product-to-Model 12 · Cast-a-Model 8 · Video 720p 5 s 12 · Video 1080p 10 s 45. 1 credit = $0.10 in plan;
top-ups $0.12 per credit, $25 minimum. A Rapid Batch Design run per product at list ≈ 117 credits ≈ $11.70.

**Plans (MONEY).**

| Plan | Monthly | Yearly | Credits / month | Includes |
|---|---:|---:|---:|---|
| STUDENT | $14 | $140 | 200 | 720p video, .edu |
| STARTER | $19 | $190 | 200 | 720p video |
| PRO | $29 per seat | $290 per seat | 300 | locked cast · model swap · 1080p |
| ELITE | $79 per seat | $790 per seat | 900 | + Signature shelf · priority queue |
| LICENSE | $199 per seat | $1,990 per seat | 2,600 | + commercial license · 2 Cast-a-Model casts / mo |
| RAPID_BATCH_DESIGN (KIKO) | not set | — | — | Claude-driven console; not built |

⚠️ Pricing master header (Juan, 2026-09-11 16:35): "our pricing has just changed." The ladder above is what the code charges
today; new per-action rows are pending Juan's numbers.

**Engines behind it (pricing master §5, MONEY out).** fal.ai for Sketch Render, Flat-lay, Enhance and Nano Banana Pro edit
($0.15 per image at 1K/2K, $0.30 at 4K); FASHN for Video, Try-On, Model Swap ($0.075 per credit on demand; a 10 s 1080p 360
≈ $0.90); HeyGen voice on plan credits. Magnific and Higgsfield are connectors on the PC, not in the app.

**Planned, specified 2026-09-11 (build spec).** 360 EXACT STUDIO first (seven view boxes → 3-D reconstruction → exact
turntable → restyle to the app look; 5–20 s; draft 90–180 credits); OCD ACADEMY (tutorials with the strong prompt and
steps); CAMPAIGN scene composer (environment + up to three locked-look models on OpenPose skeletons, camera presets, zoom
that re-renders the space); product mesh as scene guide; standalone offerings; KIKO Command Station last. Cost-capture
ledger (vendor, units, USD per action) does not exist yet and is flagged to build before the new tabs ship.

**Deploy.** Next.js app in `dev\ocd-looks` (package name `ocd-ai-studio`), Vercel project `ocd-looks`, Clerk billing.
Production `ocd-looks-d44oe8hg8` (Sep 9) still serves looks.ogandocreativedesign.com; the `exact360` work is
preview-only. A Vercel "Failed production deployment" notice for ocd-looks arrived 2026-09-01 19:37 UTC (Gmail, unread) —
not investigated here, noted so it is not lost.

---

## 2b · What OCD•LOOKS is adding RIGHT NOW — built, being built, and being priced (as of 2026-09-11 21:27 UTC)

Everything in this section is Juan's own record from tonight. Status words are exact: BUILT means code exists on a
branch; LIVE means on production; DRAFT means a number in code or a note that Juan has not approved; DECIDED means Juan
said yes but it is not yet in code or on the pages.

**The five capabilities and where each stands (build order fixed by Juan: 360 EXACT first, KIKO last).**

| # | Capability | What it is | Status 2026-09-11 eve |
|---|---|---|---|
| 1 | **360 EXACT STUDIO** | Seven view boxes (front, 3/4 L, 3/4 R, side L, side R, back, top) → 3-D reconstruction → exact turntable on the RTX 4090 (frame N == frame 0) → restyle to the app look. 5 / 10 / 15 / 20 s, ×1 / ×2, direction, seamless loop, MP4 1080p + ProRes, proof sheet, in-app 3-D spin viewer. | **BUILT** on branch `exact360` (commit e7bc95d plus an uncommitted turntable fix). `npm run build` passes; preview deployed at ocd-looks-dxn2719ay; turntable smoke render verified on EW-001 (12 frames). **Not yet:** `db/exact360.sql` run in Supabase (B-35), worker started, signed-in browser check, Meshy key. Deadline: meeting week of 2026-09-14. |
| 2 | **Tier gating** | `TAB_ACCESS` map, ghosted locked tabs with lock glyph, server-side check. Full sidebar shipped: Studio · Spec Creator · Campaign · 360 EXACT · 3-D Spin · Models · Video · Enhance · Gallery · Academy · KIKO; unbuilt tabs greyed with SOON. | **BUILT** with 360 EXACT (same branch). |
| 3 | **OCD ACADEMY** | Tutorial tab mirroring the service tabs; each card is a film plus the strong prompt (copy button) plus numbered steps. Seed: the six Rapid Batch Design films in EN and ES. All plans. | **NEXT** (content exists; about a day). |
| 4 | **SPEC CREATOR** | Same seven boxes in reverse: drawings in, or one drawing plus "Fill the sides"; user types the dimensions (app never invents a number, arithmetic check flagged); output is the tech pack: labelled spec sheet in house style, per-view PNGs, written spec with dimensions table, BOM, construction notes. May replace the separate OCD·SPECS product. | **SPECIFIED**, third in order. |
| 5 | **OCD-3D VIEWER + export packs** | Orbit viewer on the product's GLB; export packs: web (HTML + GLB + poster), model (GLB + USDZ at real scale), spin set (36 and 24 frames), proof. Retailer presets (Walmart, Amazon, Shopify) read from their current supplier docs at delivery. | **SPECIFIED**; viewer lives inside the 360 EXACT result panel until the tab ships. |
| 6 | **CAMPAIGN scene composer** | Environment (upload or stock library: STUDIO interiors in white / pastels / grey / dark with a colour prompt, LIVING interiors, exteriors) plus up to three locked-look cast members on 3-D OpenPose skeletons and the product mesh; drag, pose presets, joint edit, camera presets, zoom that re-renders the space; scene rotation appears once an environment and a model are on stage. "Studio Shot" removed from Studio and moved here. | **SPECIFIED**, after the cost ledger. |
| 7 | **Vendor cost ledger** | Per-action vendor, units and USD on every credit ledger row (fal, FASHN, Magnific, Higgsfield, Meshy), daily reconciliation against vendor balances, margin report per action and plan. | **NOT BUILT**; ordered before Spec Creator and Campaign ship. |
| 8 | **KIKO Command Station** | The Claude-driven console that runs the whole chain (Spec Creator → render → 360 EXACT → Campaign → film) on a folder of tech packs. Inside OCD•LOOKS as the RAPID_BATCH_DESIGN tier, and standalone. | **LAST**; nothing built. |

**Per-action prices being set (MONEY, 1 credit = $0.10 in plan, $0.12 on top-up). Formula approved by Juan 17:10:
included runs are free on top of monthly credits → then list credits from the pool → then top-ups. Row numbers DRAFT.**

| Action | Credits | $ in plan | Status |
|---|---:|---:|---|
| 360 EXACT 5 s · 10 s · 15 s · 20 s (first run, builds the 3-D) | 120 · 160 · 200 · 240 | $12 · $16 · $20 · $24 | PROPOSED; code still carries the earlier 90 / 120 / 150 / 180 draft |
| 360 EXACT re-run from cached 3-D | 60 · 80 · 100 · 120 | $6 · $8 · $10 · $12 | PROPOSED |
| Fill one box from all sides (Edit) | 4 | $0.40 | PROPOSED, equals today's Edit |
| 3-D Spin viewer | 0 | included with a run | PROPOSED |
| Export pack, first (web + GLB/USDZ + spin set + proof) | 40 | $4 | PROPOSED |
| Extra retailer preset | 20 | $2 | PROPOSED |
| Spec Creator sheet | 25 | $2.50 | DRAFT placeholder |
| Campaign scene (environment + 1 model) · extra model · new angle | 27 · 12 · 10 | $2.70 · $1.20 · $1 | DRAFT placeholder |

Vendor cost per 360 EXACT run is about $0.60 to $1.60 first run (Meshy about $0.40 to $0.50, turntable electricity on
the 4090), so margin at these rows is above 90 %. One full product through the new chain at list is 287 credits, about
$28.70; with a free run and a free sheet it is 102 credits, about $10.20. Market equivalent bought outside: a spin
shoot at $35 to $150 plus a 3-D model at $40 to $200 plus a photographer.

**Plan changes being set.**

| Plan | Seat today (LIVE) | Seat DECIDED 17:25 | Free 360 EXACT runs / mo | Free Spec sheets (draft) | Free Campaign scenes (draft) | New tabs |
|---|---:|---:|---:|---:|---:|---|
| STUDENT | $14 | $14 | 0 | 0 | 0 | Academy only; Spec, 360, Campaign ghosted → upgrade |
| STARTER | $19 | $19 | 0 | 0 | 0 | same |
| PRO | $29 per seat | $29 | 0 | 0 | 0 | same |
| ELITE | $79 per seat | **$99** | **3** ($48 at list) | **5** | **6** | Spec Creator · 360 EXACT · 3-D Spin + packs · Campaign |
| LICENSE | $199 per seat | **$249** | **10** ($160 at list) | **15** | **20** | same |
| RAPID_BATCH_DESIGN (KIKO) | not set | not set | 1 per product | 1 per product | 1 per product | everything |

Juan on the raise, 17:25: "the increase makes sense." Not in `pricing.ts`, `/pricing`, `/welcome#plans` or the Clerk
plans yet; lands with the approved sheet, all files in one commit. Open: existing subscribers keep $79 / $199 until
renewal, or move on the next cycle. Yearly stays 10 × monthly: $990 and $2,490. Cancellation rule set tonight: monthly
ends at month end, yearly at year end, self-serve in Manage account → Billing.

**What a month buys after the change (compare sheet §D):** ELITE, 5 full products with exact 360, 3-D and packs
(3 on free runs, then one $25 top-up), about $25 each at $99. LICENSE, 14 full products, no top-up, about $18 each at
$249. Vendor cost fully used: about $19 (ELITE) and $52 (LICENSE).

**New standalone SKUs (each also sold outside the app, all unpriced except the first).**

| Offer | Price | Includes | Status |
|---|---:|---|---|
| 360 EXACT STUDIO standalone | **$59 / mo · $590 / yr** | 6 free runs any length, 300-credit pool, viewer, 2 export packs / mo; sits under ELITE on purpose (MazingXR is $99 / mo for ten static models) | PROPOSED |
| CAMPAIGN scene creator standalone | not set | environment + three locked-look models + product mesh, composed live | listed, unpriced |
| OCD ACADEMY standalone | not set | the tutorial library | listed, unpriced |
| KIKO Command Station standalone | not set | the console, attachable to any OCD app or a corporate build | listed, unpriced |

**KIKO and corporate builds, internal draft sheet (never public until Juan sets a number).** Measured Claude cost per
finished product from the six-film token logs: $227 on Fable 5.1 as run, $110 Sonnet 5, $274 Opus 5; planning cost of
goods $100 Sonnet / $150 Fable including renders. Corporate: Discovery $3,995 (26 h at $150), Pilot build $24,000
(160 h), Studio build $60,000 (400 h), KIKO license $1,990 per studio per month or $19,900 per year for 5 seats, plus
$199 per extra seat, Claude and render usage at cost or cost + 30 %. SaaS placeholders: RAPID_BATCH_DESIGN $799 per seat
per month including 5 products, +$129 per product ($199 on Fable); KIKO standalone seat $599 per month plus usage.
Design rates set by Juan 11:45: individual design $130 / h, Rapid Batch Design $150 / h.

**Decisions still open for Juan (from the recap and the proposal).**
1. Approve or amend each proposed per-action row and the 3 / 10 free-run inclusions (code carries the older draft).
2. Existing subscribers on the $99 / $249 raise: at renewal or next cycle.
3. Cast member for EW-001; whether the eyewear film waits for 360 EXACT or ships with a placeholder.
4. MONEY: buy a Meshy API key so the app can build the 3-D from the boxes (without it, 360 EXACT runs only on an
   uploaded or cached GLB; EW-001's exists, enough for the demo).
5. Run `db/exact360.sql` in Supabase and start the worker (Juan's own hands, B-35), then the signed-in preview check.

---

## 3 · Side by side

| Axis | Abacus AI (ChatLLM / Studio / Agent) | OCD•LOOKS |
|---|---|---|
| What it is | Horizontal super-assistant; model aggregator + agent + app builder | Vertical directed studio for product and fashion design |
| Buyer | Any professional, teams, developers | Product designers, fashion brands, corporate internal studios |
| Entry price | $10 per user per month, 20,000 credits | $19 per month, 200 credits (STUDENT $14) |
| Team price | $20 per user per month Pro; Enterprise from $5,000 per month | $29 / $79 / $199 per seat today; ELITE $99 and LICENSE $249 decided, pending code |
| Standalone SKUs | None; one bundle | 360 EXACT STUDIO $59 / mo proposed; Campaign, Academy, KIKO standalone listed, unpriced |
| What a credit is | Undisclosed per action; heavy media costs more; lockout near 75 % reported | 1 credit = $0.10; every action has a published credit price |
| Image engines | GPT Image, Nano Banana 2 / Pro, FLUX.2 Pro, Seedream 4.5, Midjourney, Ideogram, Imagen 4, Recraft, Hunyuan, Wan | fal.ai (Nano Banana Pro edit and others), Gemini 3 Pro Image for OCD·SPECS |
| Video engines | Sora 2, Veo 3.1, Kling v3 / O3 / Motion Control, Seedance 2.0, Wan 2.5, Hailuo 2, Luma, Grok | FASHN video (720p / 1080p, 5–10 s); 360 EXACT planned on 3-D turntable |
| Upscale | Magnific Upscaler and Topaz inside Studio | Enhance action (fal.ai); Magnific only as a PC connector |
| Fashion try-on | None found | Build-the-Look try-on, Model Swap, Product-to-Model, Cast-a-Model (FASHN) |
| Locked cast / identity lock | Reference-image editing only; consistency is per-prompt | Locked cast on PRO and up; locked look across every generation |
| Spec fidelity | Prompt-driven; no spec input | Spec drawing is the input; Sketch Render "exact to the spec"; multi-view sheet |
| 360 / turntable | Image-to-video from one frame (invents the far side) | 360 from the all-views sheet live today; 360 EXACT (boxes → 3-D → exact spin, 5–20 s, seamless) BUILT on `exact360`, preview deployed, 120–240 cr proposed, 3 / 10 free runs on ELITE / LICENSE |
| Tech pack / production docs | None | Spec Creator specified: dimension entry, labelled sheet, BOM, written spec; 25 cr draft; 5 / 15 free on ELITE / LICENSE |
| 3-D / retailer export | Not found | OCD-3D Viewer + export packs specified: GLB / USDZ, 36 and 24-frame spin sets, Walmart / Amazon / Shopify presets; 40 cr first pack, 20 cr per extra preset, proposed |
| Multi-model campaign scenes | General image gen; no pose rig | CAMPAIGN composer specified: stock environments, three locked-look models on 3-D OpenPose rigs, product mesh, scene rotation; 27 cr per scene draft |
| Agent / automation | DeepAgent builds apps, browses, researches | KIKO Command Station (Claude-driven batch design) specified, not built |
| API | Enterprise only ($5,000 per month) | None public; custom corporate builds "inside the corporation's own network" |
| Content policy | Not published in search results | Fashion-edge SFW per Juan's rules |
| Trust signals | Trustpilot 3.7 / 5 (180); credit-drain incident March 2026 | Pre-launch outreach; walkthrough film; free week |

---

## 4 · Where Abacus is a threat, and where it is not

**Threat, real.**
1. **The DIY path.** Abacus Studio exposes Nano Banana Pro edit, FLUX, Seedream, Kling, Seedance and Magnific upscaling for
   $10 a month. A designer who already prompts well can reproduce a sketch-to-render and a single-frame product spin by
   hand. OCD•LOOKS charges $0.50 for a Sketch Render (5 credits) whose vendor cost is $0.15, and $4.50 for a 10 s 1080p
   video (45 credits) whose vendor cost is about $0.90. The margin is fair for a workflow product, but the comparison
   "Abacus gives me every model for $10" will come up in sales calls. The answer is fidelity and repeatability, not price.
2. **DeepAgent vs "custom apps for corporations."** Abacus markets an agent that builds and deploys apps in the browser.
   A corporate buyer weighing Juan's Discovery / Pilot / Studio build fees ($3,995 / $24,000 / $60,000 internal drafts)
   may ask why not let an agent build it. The answer is the same as above: the agent does not know fashion, specs, casts
   or factories.
3. **Credit language.** Both products sell credits. Abacus' reputation for opaque credits and lockouts is a gift: OCD•LOOKS
   publishes every action's credit price and the dollar value of a credit. Say so on the pricing page.

**The compare sheet already says the same thing (§G, written earlier tonight):** Abacus is "a PRICE ANCHOR, not a
competitor." An ELITE seat at $99 equals five ChatLLM Pro seats and leaves with exact 360s, 3-D models and retailer
packs. The closer match is the KIKO corporate license ($1,990 per studio per month, 5 seats, internal draft) against
Abacus Enterprise from $5,000 per month. This document and that sheet agree.

**Not a threat.**
- No try-on, no locked cast, no spec input, no multi-view consistency, no tech pack, no 3-D export, no fashion vocabulary.
- No retailer or factory story. Juan's "design and production documentation as one motion" has no Abacus equivalent.
- Abacus is a model-access business; its roadmap is more models, not deeper verticals.

**Abacus as a tool for OCD, not a competitor.**
- As an engine: no. API is Enterprise-only at $5,000 per month; OCD•LOOKS already buys fal.ai and FASHN direct at
  per-image prices.
- As a research / drafting seat: a $10 Basic seat is a cheap way to A/B the same prompt across GPT Image, Nano Banana and
  Seedream before committing an engine choice for 360 EXACT restyle or Spec Creator. Optional; MONEY $10.

---

## 5 · Takeaways for the presentation and the pitch

1. **Lead with the arc, not the models.** Every Abacus review lists models. OCD•LOOKS' film lists steps: spec → render →
   still life → on-model → campaign → film, same frame start to finish. Keep it that way.
2. **Publish credit transparency as a feature.** "1 credit = $0.10, every action priced" is a direct counter to the most
   common Abacus complaint.
3. **Finish 360 EXACT before the meeting week of 2026-09-14.** The code is built and previewed; what is left is Juan's
   hands: run the SQL, start the worker, check the tab signed in. It is the one capability no aggregator can fake from a
   single frame, and it is the demo that separates a directed studio from a prompt box.
4. **Build the vendor cost ledger before the new tabs ship** (spec §11). Abacus' credit-drain incident is the cautionary
   tale for shipping expensive actions without per-action cost capture.
5. **Have the DIY answer ready.** When asked "why not Abacus for $10," the answer is: same renders every time from the
   same spec, a cast that does not drift, a 360 that reads every side from a real view, and a tech pack a factory can use.

---

## 6 · Evidence and lanes

- Probe this session: Google Drive LIVE · Dropbox LIVE · Gmail LIVE · device bridge ABSENT · abacus.ai, kdnuggets,
  eesel blocked by egress (WebSearch only).
- Repo `juanogando/ocdwebsite` (this container): untouched Astro blog starter on Cloudflare Workers, one commit
  "source repo import", no OCD-LOOKS code. This document is the only change on branch `claude/abacus-ai-ocd-looks-yfppku`.
- Revision 2 (section 2b added, 2026-09-11 late): sources for the "being built and priced" section are the 21:27 UTC
  copies of the pricing master, `PROPOSAL_360_EXACT_PRICING_2026-09-11.md` §1–8f,
  `COMPARE_CURRENT_vs_PROPOSED_2026-09-11.md` §A–H and `SESSION_RECAP_2026-09-11_EVE_360_EXACT_BUILD.md`, all in the
  Drive mirror of `OCD_WORK\_PRICING\` and the EW-001 job folder.
- Saved: this file in the repo `docs/`; the same file in `G:\My Drive\OCD_CLAUDE_BRIDGE\` (updated in place); the same
  file in Dropbox `/OCD_CLAUDE_BRIDGE/` (replaced). **Not reached from this lane:** job folder on C:, `CLAUDE_C-NOTES_INDEX.md`, the job's
  `_C-NOTES.md`, Obsidian `_INBOX.md`, the job log app. Pull with `OCD_CLOUD_PULL_V2.bat` or the PowerShell relay.
