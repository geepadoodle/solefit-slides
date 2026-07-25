# Publishing reels to Instagram

`_tools/publish-reel.mjs` posts a reel from this repo to Instagram using Meta's
Content Publishing API. Instagram has no "upload a file" endpoint — you give it
a **public URL**, it downloads and transcodes the video, then you publish the
result. That's why the assets live in a public repo.

```bash
cd _tools
npm install

# 1. Preflight. No credentials needed, nothing is posted.
node publish-reel.mjs r01-not-a-size-10 --dry-run

# 2. For real.
export IG_USER_ID=...
export IG_ACCESS_TOKEN=...
node publish-reel.mjs r01-not-a-size-10
```

Publish several in one go by passing several slugs. `--ref <branch-or-tag>`
serves the assets from a specific ref (defaults to the current branch — point it
at `main` once these are merged).

## One-time account setup

The API only works against an Instagram **professional** account (Business or
Creator). A personal account cannot publish through the API at all.

1. Switch the SoleFit account to Business or Creator in the Instagram app —
   *Settings → Account type and tools*.
2. Create an app at [developers.facebook.com](https://developers.facebook.com)
   and add the Instagram product.
3. Grant the app `instagram_basic` and `instagram_content_publish`. If you're
   using the Facebook-Page-linked setup you also need `pages_read_engagement`
   and the account must be connected to a Page.
4. Generate a **long-lived** access token (short-lived ones expire in an hour;
   long-lived ones last ~60 days and need refreshing).
5. Get the Instagram user id — this is a numeric account id, not the `@handle`
   and not the Facebook Page id.

Two API flavours exist and the script supports both:

| Setup | `IG_API_BASE` |
|---|---|
| Facebook Login, account linked to a Page (default) | `graph.facebook.com` |
| Instagram Login, no Page required | `graph.instagram.com` |

`IG_API_VERSION` defaults to `v21.0`; bump it if Meta has moved on.

## Things that will bite you

- **Content-Type.** `raw.githubusercontent.com` serves `.mp4` as
  `application/octet-stream`, which Meta's ingestion rejects. The script uses
  the jsDelivr mirror of this repo instead (`cdn.jsdelivr.net/gh/...`), which
  serves the identical bytes as `video/mp4`. The preflight fails loudly if that
  ever stops being true.
- **The branch has to be pushed and the repo public** before publishing —
  Meta fetches the URL from its own servers, so anything local or private is
  invisible to it.
- **jsDelivr caches aggressively.** If you re-render a reel and republish from
  the same branch, the CDN may still serve the old file for a while. Publish
  from a fresh ref, or wait it out.
- **Rate limit:** 50 API-published posts per account per 24 hours.
- **Ingestion is asynchronous.** The container sits in `IN_PROGRESS` while Meta
  transcodes; the script polls for up to 10 minutes and prints each state
  change. `ERROR` at this stage is usually the video URL or the format, not the
  caption.
- **Audio.** These reels ship silent so a trending track can be added in the
  Reels editor — but the API cannot attach one. Anything published this way
  goes out silent. To use trending audio, upload through the app instead.

That last point is the real trade-off: API publishing is repeatable and
scriptable, in-app publishing gets you the audio and the reach that comes with
it. For a launch push, the app is usually worth the manual step.
