# BRING THE LAB HOME

Public campaign site for the **$10,000 Washington R&D lab recovery mission**.

## Mission
Recover the Washington R&D lab, transport it to Tennessee, and return the hardware to service for On the Double development and continuing technical R&D.

## Source discipline
- Original source files are preserved outside this public implementation repository.
- Public images/video in `assets/` are campaign derivatives only.
- Original filenames and provenance remain in the canonical source archive.
- Do not publish exact storage location, credentials, private keys, account secrets, or serial numbers without a deliberate review.
- This campaign is separate from Mamaw's House funding and from OTD operating funds.

## Fundraiser link
When the recovery fundraiser URL exists, edit only `config.js`:

```js
fundraiserUrl: "https://..."
```

The site itself never processes money.

## GitHub Pages
After this repository is public:
1. Open **Settings → Pages**.
2. Choose **Deploy from a branch**.
3. Select **main** and **/(root)**.
4. Save.

Expected URL:
`https://dinididit.github.io/BRING-THE-LAB-HOME/`

## AWS Amplify

[![Deploy to Amplify Hosting](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/dinididit/BRING-THE-LAB-HOME)

This repository includes `amplify.yml` for a no-build static deploy. Connect the GitHub repository in AWS Amplify Hosting, select the `main` branch, review the detected config, and deploy. No AWS access key belongs in this repository.

## Lightweight by design
No framework, no autoplay video, no web fonts, no analytics bundle, and lazy-loaded gallery images. The goal is a fast page that does not cook a phone just to tell the story.
