# Release status — corrected

## The premise in the backlog was wrong

`CLIENT-ACTIONS.md` and the task briefs treat `seo/technical-overhaul` as
finished-but-unshipped, and item 2 says to verify the apex redirect *after
deploy*. Measured against the live site:

```
$ python scripts/verify-deploy.py
16/16 checks passed
apex returns 301/308        got 308 -> https://www.novulabs.net/
sitemap lists URLs          39 URLs
every sitemap route         200
```

39 live sitemap URLs matches the 39 indexable routes this branch builds. **The
SEO overhaul is already in production.** The apex redirect works. `robots.txt`,
`llms.txt`, the 404, canonicals and security headers all pass.

So the open question is not "should we ship this branch" — it already shipped.
The question is what to do about the delta between production and this branch,
which is now 13 commits ahead of `main` plus one new commit.

## What is live and wrong right now

Confirmed by fetching production, not by reading source:

```
$ curl -s https://www.novulabs.net/solutions | grep -i certified
... Mastercard and Visa certified, engineered to PCI-DSS,
    handling billions in annual transaction volume with 99.99% uptime SLA
```

That text is public today, on a site selling AML and transaction-monitoring
systems to SBP-regulated banks, and it contradicts the same site's published
policy at `/about` ("We also do not claim certifications we cannot evidence")
and its own blog post *"Stop saying 'HIPAA certified'"*.

Fixed in commit `6daaa0c` (local, **not pushed**). See `artifacts/FINDINGS.md`.

## Go / no-go

**Go on the claim fix.** It is three copy edits plus comments, the build passes,
and `verify-seo-claims.py` shows no SEO regression. It removes live
misrepresentation exposure. Shipping it is strictly lower risk than not shipping
it, because the current production text is the risk.

**Rollback:** `git revert 6daaa0c` restores the previous wording. No schema,
routing, canonical or redirect surface is touched by that commit, so there is no
indexation risk in either direction.

**Not blocking on:** the `TODO(client)` markers. They are inert comments; the
fields they guard already render without them.

## Apex redirect — item 2 can be closed

Live behaviour is `308 -> https://www.novulabs.net/`. A 308 is a permanent
redirect that preserves method, and is equivalent to 301 for indexing purposes.
Google treats both as permanent. `CLIENT-ACTIONS.md` item 2 asks for a 301
specifically; 308 satisfies the intent and no change is needed.

Whether the rule fires from `next.config.ts` or the CDN was not determined from
outside — both produce the same observable result, and since the observable
result is correct, this is not worth chasing unless the rule is later removed
from one of the two layers.

## Sequencing from here

1. **Push and deploy `6daaa0c`** — removes live unevidenced claims. Highest
   ratio, lowest risk.
2. **Supply CLIENT-ACTIONS items 1, 3, 4, 5** — team photos, founding year,
   phone, street address. These four unblock all five `TODO(client)` markers and
   lift the GEO scores, which are currently capped site-wide because
   `LocalBusiness` cannot validate without a phone and address.
3. **Decide items 6 and 7** — ISO 27001 certificate number, and the
   `$2.4B` / `99.99%` / `2M+` case-study figures. Same claim class as the one
   just fixed; either substantiate or remove.
4. **Replace the 9 Unsplash portfolio images** — self-host. Same credibility
   problem as the team photos, plus a third-party leak on every page load.
5. **Build the local-discovery layer** — a published Islamabad address plus a
   `/contact` page serving "software house in islamabad near me". This is where
   the measurable demand actually is (see `FINDINGS.md` section 5).

## Standing verification

```bash
node ruflo-office/pipeline.js
```

build → PR-claim verification → SEO/AEO/GEO audit → keyword refresh → live-site
check → report → office update. Exits non-zero on failure, so it can gate a
deploy.
