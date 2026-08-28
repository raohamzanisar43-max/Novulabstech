# NovuLabs pipeline report

_Generated 2026-08-22T03:05:54.982Z by `ruflo-office/pipeline.js`._

Every number here was produced by running the checks, not by reading the source.

## Stages

| Stage | Result | Time |
| --- | --- | --- |
| claims | pass | 0.3s |
| audit | pass | 1.7s |
| deploy | pass | 9.7s |

## PR claim verification

11/12 claims reproduce

## Live-site verification (www.novulabs.net)

16/16 checks passed

## Page scores

| Route | SEO | AEO | GEO |
| --- | --- | --- | --- |
| `/` | 80 | 90 | 80 |
| `/services` | 90 | 60 | 70 |
| `/solutions` | 90 | 70 | 80 |
| `/portfolio` | 90 | 60 | 80 |
| `/about` | 90 | 70 | 80 |
| `/contact` | 100 | 90 | 70 |
| `/blog` | 90 | 70 | 70 |

GEO scores stay capped until CLIENT-ACTIONS.md items 4 (phone) and 5 (street address) are supplied — LocalBusiness schema cannot validate without them.

## Re-run

```bash
node ruflo-office/pipeline.js
```
