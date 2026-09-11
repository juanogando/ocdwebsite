# Abacus AI vs OCD•LOOKS — research and comparison

Written 2026-09-11 (Juan: "Research abacus ai and compare to OCD-LOOKS").
Lane: cloud session, no device bridge. OCD-LOOKS facts below come from files read this session in the Drive bridge
(`OCD_PRICING_MASTER_2026-09-11.md`, `OCD-LOOKS_360_EXACT_STUDIO_and_OCD_ACADEMY_BUILD_SPEC.md`,
`OCD-LOOKS_BATCH_DESIGN_VIDEO_PROCESS.md`) and the "OCD LOOKS (PHASE 1-OFFERING)" emails sent 2026-08-31.
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
thing to be ready to explain.

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
A Vercel "Failed production deployment" notice for ocd-looks arrived 2026-09-01 19:37 UTC (Gmail, unread) — not
investigated here, noted so it is not lost.

---

## 3 · Side by side

| Axis | Abacus AI (ChatLLM / Studio / Agent) | OCD•LOOKS |
|---|---|---|
| What it is | Horizontal super-assistant; model aggregator + agent + app builder | Vertical directed studio for product and fashion design |
| Buyer | Any professional, teams, developers | Product designers, fashion brands, corporate internal studios |
| Entry price | $10 per user per month, 20,000 credits | $19 per month, 200 credits (STUDENT $14) |
| Team price | $20 per user per month Pro; Enterprise from $5,000 per month | $29 / $79 / $199 per seat, 1–20 seats |
| What a credit is | Undisclosed per action; heavy media costs more; lockout near 75 % reported | 1 credit = $0.10; every action has a published credit price |
| Image engines | GPT Image, Nano Banana 2 / Pro, FLUX.2 Pro, Seedream 4.5, Midjourney, Ideogram, Imagen 4, Recraft, Hunyuan, Wan | fal.ai (Nano Banana Pro edit and others), Gemini 3 Pro Image for OCD·SPECS |
| Video engines | Sora 2, Veo 3.1, Kling v3 / O3 / Motion Control, Seedance 2.0, Wan 2.5, Hailuo 2, Luma, Grok | FASHN video (720p / 1080p, 5–10 s); 360 EXACT planned on 3-D turntable |
| Upscale | Magnific Upscaler and Topaz inside Studio | Enhance action (fal.ai); Magnific only as a PC connector |
| Fashion try-on | None found | Build-the-Look try-on, Model Swap, Product-to-Model, Cast-a-Model (FASHN) |
| Locked cast / identity lock | Reference-image editing only; consistency is per-prompt | Locked cast on PRO and up; locked look across every generation |
| Spec fidelity | Prompt-driven; no spec input | Spec drawing is the input; Sketch Render "exact to the spec"; multi-view sheet |
| 360 / turntable | Image-to-video from one frame (invents the far side) | 360 from the all-views sheet today; 360 EXACT (boxes → 3-D → exact spin) in build |
| Tech pack / production docs | None | Roadmap: Spec Creator with dimension entry, tech pack, Illustrator-editable output |
| 3-D / retailer export | Not found | Roadmap: GLB / USDZ and spin sets for retailer viewers |
| Multi-model campaign scenes | General image gen; no pose rig | Roadmap: CAMPAIGN composer with OpenPose skeletons, three locked-look models |
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
3. **Ship 360 EXACT before the meeting week of 2026-09-14** (Juan's own build order). It is the one capability no
   aggregator can fake from a single frame, and it is the demo that separates a directed studio from a prompt box.
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
- Saved this turn: this file in the repo `docs/`; a copy in `G:\My Drive\OCD_CLAUDE_BRIDGE\`; a copy in
  Dropbox `/OCD_CLAUDE_BRIDGE/`. **Not reached from this lane:** job folder on C:, `CLAUDE_C-NOTES_INDEX.md`, the job's
  `_C-NOTES.md`, Obsidian `_INBOX.md`, the job log app. Pull with `OCD_CLOUD_PULL_V2.bat` or the PowerShell relay.
