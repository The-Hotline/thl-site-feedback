# thl-site-feedback

A lightweight, dependency-free site feedback widget from the [National Domestic Violence Hotline](https://www.thehotline.org). Renders a thumbs up/down feedback bar above your site's footer and fires GTM events on interaction.

---

## Requirements

- A `<footer>` element on the page — the widget inserts itself immediately before it
- Google Tag Manager available on the page — events will silently not work if it isn't
  - GTM config instructions can be found: https://thehotline.atlassian.net/wiki/external/MGViOWM1YjkyNDg5NDUyZTllMmZmY2M3OGQ2NzI4ODY

---

## Installation

Add the script tag to your page, just before `</body>` or in your page's footer template:

```html
<script type="module" src="https://lib.thehotline.us/thl-site-feedback/thl-site-feedback.js"></script>
```

That's it. No initialization, no configuration required.

---

## Color Parameters

Three optional query parameters let you match the widget to your site's color scheme. All values are **6-digit hex codes without the `#`**.

| Parameter | Applies to | Default |
|---|---|---|
| `bg-color` | Widget background | `e2bdfc` |
| `btn-color` | Thumb icon color | `a93e92` |
| `btn-hover-color` | Thumb button hover background | `e498f5` |

Invalid or absent values fall back to the defaults automatically.

**Example:**

```html
<script type="module" src="https://lib.thehotline.us/thl-site-feedback/thl-site-feedback.js?bg-color=cce5ff&btn-color=003f7f&btn-hover-color=99caff"></script>
```

---

## Behavior

- On any page, two feedback prompts are shown: one for the specific page, one for the overall visit
- On the root path (`/`), the page-specific prompt is hidden — only the overall prompt is shown
- After a thumb is clicked, the buttons are removed and a thank-you message replaces the prompt label
- GTM events fired: `page_feedback` and `overall_feedback`, each with a `feedback_value` of `yes` or `no` and a `page_path`

---

## Support

**This project is provided as-is. We are not able to respond to implementation questions or troubleshooting requests.**

If something in this README isn't enough to get you going, this widget may be a good fit for a web developer or volunteer tech consultant with basic website development experience.

---

## License

MIT © [National Domestic Violence Hotline](https://www.thehotline.org)