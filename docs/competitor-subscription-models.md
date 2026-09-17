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
