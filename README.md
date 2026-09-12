# BRING THE LAB HOME

Professional R&D portfolio and public recovery campaign for **Jason A. Hayes**.

## Public purpose

This site presents the documented development path connecting:

- SKLALLAM 360 scientific and technical R&D;
- the physical Washington compute, networking and electronics lab;
- applied work involving Raspberry Pi, embedded Linux, storage, PoE networking, geospatial systems, cloud and distributed architecture;
- broader operational, management and environmental-science development; and
- the later, legally distinct development of On the Double in Morristown, Tennessee.

The campaign seeks **$10,000** to recover the Washington lab, transport it to Tennessee and return it to service for continuing R&D.

## Control panel

The public campaign controls are intentionally simple and centralized:

- `config.js` is the primary control file for the PayPal support URL, public GitHub repository URL, canonical public site URL, and native-share title/text.
- `index.html` contains the visible fallback links plus Open Graph/Twitter metadata so the page still works without JavaScript and produces a strong social-link preview.
- `app.js` reads `config.js`, wires the support and repository buttons, uses the device-native share sheet when available, and falls back to copying the clean public URL.
- `.github/workflows/pages.yml` deploys the static site to GitHub Pages.
- `.github/workflows/verify-render.yml` checks the published page, required campaign controls, share metadata, scripts and core visual assets after pushes to `main`.

If the support destination ever changes, update `fundraiserUrl` in `config.js` and the fallback `href` on `#supportLink` in `index.html` together, then let the verification workflow confirm the deployed result.

## Source discipline

- Public claims must remain grounded in the controlling archive and source checkpoints.
- Research, exploration and firsthand technical history are not rewritten as production-deployment claims.
- SKLALLAM 360 and On the Double remain legally and historically distinct.
- Original source files remain preserved outside this public implementation repository.
- Do not publish exact storage location, credentials, private keys, account secrets or serial numbers.
- Lab-recovery support remains separate from Mamaw's House fundraising and OTD operating funds.

## Payment boundary

The support button opens Tony's PayPal Tip Jar. GitHub Pages does not collect or process payment information. Contributions are not advertised as tax-deductible.

## Deployment

The site is a lightweight static build published from `main` through GitHub Pages.
