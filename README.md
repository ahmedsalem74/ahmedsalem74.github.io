# APT Profile – Enhanced Template (Modular)


A static, GitHub Pages–ready template to publish APT actor profiles with charts and a world map.


## Quick Start
1. Clone or create a repo and copy this structure.
2. Edit your data in **`assets/js/data.js`** only.
3. Commit and push. Enable **GitHub Pages** (Settings → Pages → Deploy from branch).
4. Open your site URL.


## Customize
- **Colors / layout:** edit `assets/css/styles.css`.
- **Data fields:** extend `assets/js/data.js` (e.g., add `iocDomains`, `tools`, etc.) and render them in `assets/js/main.js`.
- **Charts:** update `assets/js/charts.js` to change types/options.
- **Map:** adjust thresholds/colors in `assets/js/map.js`.


## Credits
- Charting via [Chart.js]
- Map via [D3.js] + [TopoJSON] world atlas
