# OCD-LOOKS — Copy audit: cost / pricing language in the studio UI

**Written 2026-09-09.** Source of truth for what follows: `juanogando/ocd-looks` at commit
`c969dc4` (2026-08-27, "Docs: reliability assessment, tech debt, security/access, API reference,
pre-deploy checklist"). Every line below was found by grep in that checkout during this session.

**Rule being enforced (Juan, 2026-09-09):** the studio does not talk about costs, pricing, or
vendors except on the pages that exist for that purpose (`/pricing`, the welcome page plan
strip, the credit counter). Anywhere else, cost language is noise at best and a leak of
internal economics at worst.

---

## ⛔ 1 · THE RENDER panel footer — **the line in the screenshot**

| | |
|---|---|
| File | `src/app/(studio)/page.tsx` |
| Line | 849 |
| Panel | THE RENDER (Sketch → Real / Photo → Sketch), shown under the STYLE chips |
| Text | `Runs on the OCD engine — your GPU, no vendor cost.` |

**Why it is wrong, twice over:**

1. **Unneeded.** Nothing in the panel is asking the user to decide anything about money.
   The two lines below it (what Sketch → Real and Photo → Sketch do) are the whole message.
2. **False.** The same file's own header comment, line 5, says:
   `ALL engines are cloud vendor APIs (LOCKED 7/16 — zero local-GPU in this app).`
   The render does not run on the user's GPU and there is a vendor cost. The footer is
   prototype-era copy that survived the production port.

**Remedy (not applied here):** delete the first line and its `<br />`, so the footer reads only:

```
Sketch → Real: design drawings become photoreal renders.
Photo → Sketch: products become clean designer croquis.
```

It is the only panel in the studio with a "runs on / powered by" style footer, so nothing
else needs to match.

---

## 2 · Related, lower priority — internal doc uses the same framing

| File | Line | Text |
|---|---|---|
| `deploy/runpod/README.md` | 3 | `This is how the free "OCD engine" features (**Enhance, Sketch Render, Flat-Lay grouping**, …` |

Not user-facing, but it is the same "the OCD engine is free" idea that produced line 849, and
it contradicts the line-5 LOCK in `page.tsx`. Worth rewording when the README is next touched
so the idea does not get ported into UI copy again.

---

## 3 · Checked and CLEAR — cost language that is intentional and stays

Listed so nobody re-audits these.

| Where | What | Verdict |
|---|---|---|
| `src/app/(studio)/pricing/page.tsx` | Plans & Pricing page, per-seat copy | Correct place for it |
| `src/app/welcome/page.tsx` 180–181, 287, 290, 301 | "Start free — 7 days", "Plans from $14/mo", "Free to install" | Marketing page, intentional |
| `src/app/welcome/page.tsx` 30, 48, 217 | "your vendor" | Means the customer's garment vendor, not a cost statement |
| `src/app/(studio)/page.tsx` 659 | credit counter `<b>{n}</b> credits` | Product currency, not pricing |
| `src/app/(studio)/page.tsx` 1471 | "No credits were used." | Refund reassurance on a blocked render, keep |
| `src/app/(studio)/techpack/page.tsx` 241 | "Subscribe to Master →" gate | Upsell gate, intentional |
| `src/app/(studio)/page.tsx` 380, 443–444, 534, 936 | "…on the OCD engine…" busy overlays and flat-lay copy | Name the engine only, say nothing about cost |
| `src/lib/pricing.ts`, `src/lib/billing.ts`, `src/lib/credits.ts` | `priceUSD`, `cost`, `paid` | Code, never rendered as prose |

---

## Next step

One-line edit at `src/app/(studio)/page.tsx:849` in the `ocd-looks` repo. This audit lives in
`ocdwebsite` only because that is the branch this session was given; the entry belongs in
`ocd-looks/TECH_DEBT.md` (or is simply closed by making the edit).
