# Competitor subscription terms: monthly vs. yearly vs. multi-year

Research note. Question being tested: do competitors avoid monthly billing on tiers
that expose proprietary material ("secrets"), because a monthly subscriber can pay
once, extract everything, and cancel?

Short answer: the premise is right, the instrument is wrong. The market does not
defend IP with **billing frequency**. It defends it with **commitment term**,
**license scope on cancellation**, and **delivery controls**. Monthly billing on a
12-month contract is the industry-standard way to have both.

## 1. What competitors actually charge

### Self-serve / prosumer tiers — monthly is universal
| Vendor | Monthly | Annual |
| --- | --- | --- |
| Raspberry AI | Individual $49/mo, Basic $198/mo, Professional $298/mo | same plans billed yearly |
| CALA | Professional $125/mo | $100/mo billed yearly (-20%) |
| START by WGSN | monthly plans | — |

These tiers expose **output**, not method, so monthly is low-risk for the vendor.

### Enterprise / IP-exposing tiers — monthly is removed or wrapped in a term
| Vendor | Term structure |
| --- | --- |
| WGSN (main platform) | Annual subscription; contract auto-extends a further 12 months on expiry. No monthly option on the main platform. |
| Fashion Snoops | ~$7,500/yr, modular/a-la-carte, annual |
| Figma Organization & Enterprise | Monthly billing **killed** in March 2025 — annual subscription, invoiced quarterly |
| Bloomberg Terminal | 1–2 year minimum, 90-day cancellation notice before renewal; 2-yr term ≈ 3–5% discount, 3-yr ≈ 5–8% |
| Raspberry AI / CALA Enterprise | Quote-only, custom contract terms |
| DevExpress / Syncfusion (source-code access) | 12-month subscription, annual renewal standard; no monthly |

### Multi-year
True 2-year+ subscriptions barely exist in self-serve checkout. Multi-year lives in
negotiated enterprise contracts: at $200K+ ACV roughly 35–55% of deals are
multi-year, 40–55% annual, only 5–15% monthly. At SMB (<$10K ACV) it inverts to
60–80% monthly. Standard annual discount benchmark is 15–20% off monthly (top
quartile 20–25%).

## 2. The mechanism that actually stops steal-and-cancel

**Billing frequency ≠ commitment term.** "Annual commitment, billed monthly" means a
12-month term with monthly payments, where early cancellation leaves the remaining
balance owed or triggers a termination fee. That removes the one-month arbitrage
without forcing a customer to prepay a year — which is why enterprise SaaS uses it
instead of banning monthly payment.

Second mechanism: **the license does not survive cancellation.**
- **Envato Elements** — cancel before the End Product is finished and the item
  license terminates with no further right to use it; installed fonts/add-ons must be
  uninstalled.
- **Motion Array** — work published during the active subscription stays licensed;
  after cancel or downgrade the assets cannot be used in new or unpublished projects,
  and access to previously downloaded files is revoked.
- **Storyblocks** — the opposite: downloads are yours forever. Shows this is a
  deliberate design choice, not an industry default.
- **Midjourney** — you keep images created while subscribed even after cancelling,
  but businesses over $1M revenue must be on Pro/Mega. The *method* stays behind the
  paywall; the *output* is granted.

Third mechanism: **controlled disclosure.** Per-recipient watermarking (name, date,
unique ID on every page), honeytokens embedded in datasets or documents to detect
unauthorized sharing, a hash register of released files for chain of custody, plus
NDA with non-reverse-engineering and non-redistribution clauses. Bloomberg-style
named-user seats rather than org-wide access.

## 3. Recommendation for OCD's own tiers

| Tier | What it exposes | Term |
| --- | --- | --- |
| Self-serve | Finished output only | Monthly + annual (~2 months free). Monthly is fine here. |
| License | Assets, editable files | 12-month minimum term, billed monthly or annual-prepay. Early cancel = remaining balance. Use rights survive only for work produced during the term. |
| Enterprise | Pipeline, prompts, models, process | 12- or 24-month minimum, annual prepay or quarterly invoice, non-refundable onboarding fee, NDA + non-reverse-engineer, named seats, watermarked deliverables, no bulk export, deepest material staged after month 3. |

If monthly must stay available on a tier that exposes method, the single most
effective lever is a **non-refundable onboarding/setup fee** large enough that
one month plus setup exceeds the value of what can be extracted.

## 4. Legal constraints to respect

- California's Automatic Renewal Law as amended by AB 390 took effect 1 July 2025 and
  is the strictest US regime — applies to auto-renewing plans and to free/discounted
  trials.
- The FTC "Click-to-Cancel" rule was vacated by the Eighth Circuit on 8 July 2025 on
  procedural grounds, but the FTC restarted rulemaking with a new ANPRM in January
  2026 and state AGs remain active.
- Practical consequence: put minimum terms in **B2B contracts**, where they are
  normal and enforceable. Keep consumer-facing plans cancellable with clear
  auto-renewal disclosure. Verify local consumer rules before selling multi-year
  lock-ins to consumers, particularly in the EU.

## Sources

- https://www.raspberry.ai/pricing
- https://www.wgsn.com/en/wgsn/faqs, https://www.wgsn.com/en/terms-conditions, https://www.startbywgsn.com/pick-a-plan
- https://www.fashionsnoops.com/
- https://help.figma.com/hc/en-us/articles/360040328293-Manage-billing-on-the-Organization-and-Enterprise-plans
- https://www.vendr.com/marketplace/bloomberg
- https://www.growthspreeofficial.com/blogs/b2b-saas-annual-contract-length-multi-year-discount-benchmarks-2026-impact-on-retention-payback
- https://www.cloudnuro.ai/blog/annual-vs-monthly-saas
- https://elements.envato.com/license-terms
- https://help.motionarray.com/hc/en-us/articles/9442171935005-How-Does-The-License-Work
- https://docs.midjourney.com/hc/en-us/articles/27870375276557-Using-Images-Videos-Commercially
- https://www.devexpress.com/support/eulas/, https://support.syncfusion.com/kb/article/15713/how-can-i-get-a-perpetual-license
- https://www.paulhastings.com/insights/client-alerts/updated-california-and-ftc-auto-renewal-regulations-take-effect
- https://www.arnoldporter.com/en/perspectives/advisories/2026/02/ftc-and-state-ags-continue-to-scrutinize-subscription-practices
- https://bltg-ip.com/how-to-protect-trade-secrets-in-an-nda-key-guidelines/

---

# Applied to OCD RAPID STUDIO · 2026-09-17

**Status: PROPOSAL, not approved.** Nothing changes in `pricing.ts`, Clerk, `/pricing`
or `/welcome` until Juan writes "approved". Ladder read from
`OCD_PRICING_MASTER_2026-09-11.md` (approved 2026-09-15, ladder C + list/floor).

## The ladder today

| Plan | Monthly | Yearly | Credits | Term |
|---|---:|---:|---:|---|
| STUDENT | $14 | not in the 9/17 list | 120 | month-to-month |
| STARTER | $19 | **$209** | 160 | month-to-month, 3-day trial, 20-credit trial pack |
| PRO | $39 seat | **$429** | 300 | month-to-month |
| ELITE | $129 seat | **$1,419** | 800 | month-to-month |
| LICENSE | $399 seat list / $349 floor | **$4,389** ($365.75/mo) | 2,000 | month-to-month |
| ENTERPRISE | $4,500 / 10 seats, $450 extra seat / $399 floor | by quote | 22,500 pooled | by quote |

**Yearly = one month off (11 × monthly), ≈8.3%** — approved 2026-09-17, commit
`023cb2d`. The older "10 × monthly" rule from the 9/11 master is superseded.
Same commit approved 360 EXACT at **720p 50 cr/s** (5 s = 250, 10 s = 500) and
**1080p 90 cr/s** (5 s = 450, 10 s = 900).

App address since 9/16: **ocdrapidstudio.ogandocreativedesign.com**;
ogandocreativedesign.com and www now redirect to the app (`e57c92f`).

Cancellation today: monthly ends at the paid month, yearly ends at the paid year, no
partial refund.

## Where the steal-and-cancel hole actually is

Not the method. The method never leaves the app — the risk sits in three places that
are already documented in the pricing master:

1. **LICENSE is a permanent commercial license sold by the month.** $399 buys 2,000
   credits *and* commercial rights. At list that is roughly 22 one-model Campaign
   renders, or a full run of try-ons and packshots — a season of imagery. Download it,
   cancel on day 29, keep the commercial license forever. This is the exact case
   Envato and Motion Array wrote clauses against.
2. **Credits never expire and survive cancellation** (against the 9/11 no-rollover
   rule). Cancelling does not stop them spending OCD's engine money.
3. **A teammate joining grants a full month of credits, per join, repeatable** —
   ELITE $68.40, LICENSE $197.60 of engine cost each time.

The trial hole is mostly closed (STARTER only, 3 days, 20 credits), but B-38 — no plan
credits until the first paid charge — is still not built.

## Proposed terms per tier

| Tier | Proposed |
|---|---|
| STUDENT · STARTER · PRO | **Leave monthly.** Nothing to protect; the exposure is engine cost, which credits already meter. |
| ELITE $129 | **Keep monthly.** Add the published/unpublished license split below. |
| LICENSE $399 | **The commercial license attaches to a 12-month term, not to a month.** Annual is already $4,389 ($365.75/mo effective), clear of the $349 floor — so selling LICENSE annual-only costs nothing against the floor rule. Or keep monthly payment on a 12-month commitment where early cancellation ends the commercial grant. |
| ENTERPRISE $4,500 | **12-month minimum, 24-month option, by invoice.** 60–90 day non-renewal notice (Bloomberg's pattern). Where API, KIKO or an in-network build is scoped: NDA, non-reverse-engineering, named seats, watermarked spec deliverables. Build fees stay 50% on signature / 50% on delivery, non-refundable. |

## The clause that does the real work

Cheaper and stronger than any minimum term, and it lets monthly stay on ELITE:

> Commercial rights attach to work **published or placed** while the subscription is
> active, and survive cancellation permanently. Renders downloaded but not yet
> published lose their commercial grant when the subscription ends. Cast-a-Model brand
> models and Stock Studio downloads follow the same rule.

That is Motion Array's structure exactly, and Envato's. It kills the one-month grab
without taking anything away from a customer who actually ran a campaign.

## On a 2-year deal

Juan's rule stands: no deal below the floor after every discount, and go deeper with
bundles, not seat price. A Bloomberg-style 2-year discount of 3–5% off the $450
ENTERPRISE seat lands at $427–$436, still above the $399 floor, so it is allowed — but
the better sweetener is roadmap access (Multimedia Lookbooks, Packaging, Spec Creator)
rather than dollars off the seat.

## What the existing competitor study already covers

`COMPETITOR_ANALYSIS_2026-09-14.md` (38 KB, 54 sources, 30+ vendors) already carries the
pricing table, feature matrix and best-price-per-service work. It does **not** cover
contract term, minimum commitment, or what happens to a licence on cancellation — that
is the gap this note fills, and the only reason to keep it.

⚠️ **Retracted:** an earlier draft of this note cited Botika at "$33/mo annual vs
$100/mo monthly" from a third-party page. The 9/14 study reads Botika off the vendor's
own page as Pro $55 / Advanced $100 and explicitly flags that page's annual and credit
labels as reading inconsistently. The vendor-page read wins; the third-party figure is
withdrawn.

## Clerk: what is actually established

- B-28 (2026-08-31) recorded that Clerk had no annual per-seat billing, which is why
  team yearly goes out by invoice.
- Clerk has since shipped per-seat plans (2026-06-10) and supports annual billing
  periods, and the 9/17 session set STARTER's annual field directly in Clerk
  ($17.42 → $209.04, still open as **B-51**).
- **Not established:** per-seat *and* annual together on a team plan in this account's
  dashboard. STARTER is individual billing, so B-51 does not prove it. Check the
  dashboard before assuming LICENSE can be sold annual-only in checkout rather than by
  invoice.

## Market shape at OCD's price points

At $14–$129 the market is monthly: FASHN $19, Modelia $35, Raspberry AI $49, Vizcom
$49, FASHN Agency $99, Botika Advanced $100. At LICENSE and ENTERPRISE level it turns
into a contract: Veesual and Lalaland publish no self-serve price at all, CAD
enterprise is quote-only, Optitex is ≈$3,000/seat. Nothing in either camp publishes a
minimum term, which is exactly why term is worth setting deliberately rather than
copying.

## Added sources

- https://clerk.com/changelog/2026-06-10-per-seat-plans
- https://clerk.com/docs/guides/billing/seat-based-plans
- Internal, read 2026-09-17: `OCD_PRICING_MASTER_2026-09-11.md` ·
  `SESSION_RECAP_2026-09-17_BILINGUAL_SITE_PRICES_DOMAIN_SOCIAL.md` ·
  `COMPETITOR_ANALYSIS_2026-09-14.md` · `CLAUDE_C-NOTES_INDEX.md` ·
  `PROPOSAL_SERVICE_PRICING_CONTROL_TIERS_2026-09-16.md` (all via the G: Drive mirror)

## Reading limits on this note

Written from a cloud session. Reachable: the G: Drive mirror and the Dropbox
`OCD_CLAUDE_BRIDGE` folder. **Not reachable: C:, D:, M:** — no Windows volume is
mounted in this container. Per the C-NOTES index the `M:\OCD\claude_app_syncs\` copies
of the index and `_BLOCKERS.md` are read-only mirrors carrying a SUPERSEDED header, so
M: would not have been current anyway. `_BLOCKERS.md` was located on the mirror but not
read in full; B-28 and B-51 above are quoted from the recaps, not from the blockers
page.
