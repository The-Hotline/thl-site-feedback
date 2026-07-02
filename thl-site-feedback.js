// JavaScript file
// National Domestic Violence Hotline Site Feedback Widget
// author: Chad Cleveland | National Domestic Violence Hotline | TheHotline.org

// Last Modified: '2026-07-02 12:35';
const thl_siteFeedbackLastModified = '2026-07-02 12:35';

/*
Copyright (c) Effective as of timestamp above. National Domestic Violence Hotline.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

console.log("National Domestic Violence Hotline Site Feedback Widget.\n   To implement on your site, contact software@thehotline.org", thl_siteFeedbackLastModified);

const THL_SITE_FEEDBACK_THUMB_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">  <path class="thl-svg-thumb-path-2" d="M26.71,3.66c1.93.06,5.29,2.34,5.23,6.34-.04,2.88-2.91,6.09-1.22,11.08.58,0,1.21,0,1.85,0,4.63,0,10.47.13,11.67.19,4.65.24,5.9,6.62-.86,6.69,6.26.46,5.08,6.64-.4,6.85,4.59,1.12,3.1,6.21-1.83,6.21-.2,0-.41,0-.63-.03,4.39,1.66,2.42,5.34-2.18,5.34-4.06,0-5.94.01-10.4.01-.51,0-1.07,0-1.66,0-3.93,0-9.61-.15-14.36-2.47v-19.44c1.29-2.12,5.87-3.33,7-3.93,4.38-2.31,6.95-8.14,7.3-9.78.27-1.32.49-5.71.5-7.06M26.71.66c-.77,0-1.52.3-2.08.84-.58.56-.91,1.33-.92,2.13-.02,1.6-.25,5.56-.44,6.48-.19.93-2.31,5.92-5.76,7.74-.14.07-.64.26-1,.4-2.25.85-5.64,2.14-7.16,4.62-.29.47-.44,1.02-.44,1.57v19.44c0,1.15.66,2.19,1.69,2.7,5,2.44,10.73,2.77,15.67,2.77h.91s.75,0,.75,0c2.29,0,3.89,0,5.47,0,1.5,0,2.96,0,4.94,0,3.92,0,7.03-2.04,7.56-4.96.1-.54.11-1.12,0-1.71,1.64-1.11,2.61-2.76,2.81-4.4.1-.8.01-1.65-.28-2.47,1.4-1.26,2.15-2.94,2.18-4.54.02-.99-.23-2.01-.76-2.93.82-1.03,1.23-2.24,1.25-3.45.07-3.51-2.87-6.4-6.7-6.6-1.26-.06-6.7-.18-11.21-.19-.03-1.38.39-2.6.85-3.95.44-1.29.89-2.61.91-4.08.08-5.88-4.77-9.28-8.14-9.38-.03,0-.06,0-.09,0h0Z"/><path class="thl-svg-thumb-path-1" d="M30.72,21.09c4.77-.05,12.15.11,13.52.18,4.65.24,5.9,6.62-.86,6.69,6.26.46,5.08,6.64-.4,6.85,4.63,1.7,2.97,6.63-2.46,6.18,4.39,1.66,2.42,5.34-2.18,5.34-4.06,0-5.94.01-10.4.01-3.85,0-10.56.2-16.02-2.46v-19.44c1.29-2.12,5.87-3.33,7-3.93,4.38-2.31,6.95-8.14,7.3-9.78.27-1.32.49-5.71.5-7.06,1.93.06,5.29,2.34,5.23,6.34-.04,2.88-2.91,6.09-1.22,11.08Z"/></svg>';

const THL_SITE_FEEDBACK_THANK_YOU_MESSAGE_EN = "Thank you for your feedback!";
const THL_SITE_FEEDBACK_THANK_YOU_MESSAGE_ES = "¡Gracias por tus comentarios!";
const THL_SITE_FEEDBACK_PAGE_FEEDBACK_LABEL_EN = "Was this specific page helpful?";
const THL_SITE_FEEDBACK_PAGE_FEEDBACK_LABEL_ES = "¿Fue útil esta página específica?";
const THL_SITE_FEEDBACK_OVERALL_FEEDBACK_LABEL_EN = "Overall, did you find what you were looking for today?";
const THL_SITE_FEEDBACK_OVERALL_FEEDBACK_LABEL_ES = "En general, ¿encontró lo que estaba buscando hoy?";

thl_initFeedback();
function thl_initFeedback() {
    // --- Params ---
    const scriptTag = [...document.querySelectorAll("script[src]")].find((s) => s.src.includes("thl-site-feedback.js"));
    const params = scriptTag ? new URL(scriptTag.src).searchParams : new URLSearchParams();
    let thl_siteFeedbackLang = "en";
    if(location.hostname.includes("espanol.") || location.href.includes("lang=es")) {
        thl_siteFeedbackLang = "es";
    }
    let thankYouMessage = thl_siteFeedbackLang === "es" ? THL_SITE_FEEDBACK_THANK_YOU_MESSAGE_ES : THL_SITE_FEEDBACK_THANK_YOU_MESSAGE_EN;
    let pageFeedbackLabel = thl_siteFeedbackLang === "es" ? THL_SITE_FEEDBACK_PAGE_FEEDBACK_LABEL_ES : THL_SITE_FEEDBACK_PAGE_FEEDBACK_LABEL_EN;
    let overallFeedbackLabel = thl_siteFeedbackLang === "es" ? THL_SITE_FEEDBACK_OVERALL_FEEDBACK_LABEL_ES : THL_SITE_FEEDBACK_OVERALL_FEEDBACK_LABEL_EN;
    const hexRe = /^[0-9a-fA-F]{6}$/;
    function resolveColor(paramName, fallback) {
        const val = params.get(paramName);
        return val && hexRe.test(val) ? `#${val}` : fallback;
    }

    const bgColor = resolveColor("bg-color", "#e2bdfc");
    const btnColor = resolveColor("btn-color", "#a93e92");
    const btnHoverColor = resolveColor("btn-hover-color", "#e498f5");

    // --- Base styles ---
    const style = document.createElement("style");
    style.textContent = `
        #thl-site-feedback {
            background: #e2bdfc;
            margin: 0;
            width: 100%;
            font-weight: 300;
            color: #333132;
            padding: 10px;
        }
        #thl-site-feedback .thl-site-feedback-group {
            width: 800px;
            max-width: calc(100% - 0px);
            margin: 0 auto;
            min-height: 36px;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            line-height: 1.3;
        }
        #thl-site-feedback .thl-site-feedback-label {
            padding: 9px 0;
        }
        #thl-site-feedback button.thl-thumbs-up,
        #thl-site-feedback button.thl-thumbs-down {
            padding: 3px !important;
            margin: 0 5px !important;
            height: 30px;
            width: 30px;
            border-radius: 30px;
            flex-shrink: 0;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
        #thl-site-feedback button.thl-thumbs-up:hover,
        #thl-site-feedback button.thl-thumbs-down:hover {
            background-color: #e498f5;
        }
        #thl-site-feedback .thl-svg-thumb-path-1 {
            fill: none;
            stroke: #a93e92;
            stroke-linejoin: round;
            stroke-width: 2px;
        }
        #thl-site-feedback .thl-svg-thumb-path-2 {
            fill: #a93e92;
        }
        .thl-thumbs-down {
            transform: scale(1, -1);
        }
    `;
    document.head.appendChild(style);

    // --- Color overrides ---
    const overrideStyle = document.createElement("style");
    overrideStyle.textContent = `
        #thl-site-feedback {
            background: ${bgColor};
        }
        #thl-site-feedback button.thl-thumbs-up:hover,
        #thl-site-feedback button.thl-thumbs-down:hover {
            background-color: ${btnHoverColor};
        }
        #thl-site-feedback .thl-svg-thumb-path-1 {
            stroke: ${btnColor};
        }
        #thl-site-feedback .thl-svg-thumb-path-2 {
            fill: ${btnColor};
        }
    `;
    document.head.appendChild(overrideStyle);

    const CONTAINER_ID = "thl-site-feedback";

    const questions = [
        {
            label: pageFeedbackLabel,
            yesId: "thl-site-feedback-page-yes",
            noId: "thl-site-feedback-page-no",
            eventName: "page_feedback"
        },
        {
            label: overallFeedbackLabel,
            yesId: "thl-site-feedback-overall-yes",
            noId: "thl-site-feedback-overall-no",
            eventName: "overall_feedback"
        }
    ];
    const isRoot = window.location.pathname === "/";

    // --- Build DOM ---
    const feedbackEle = document.createElement("div");
    feedbackEle.id = CONTAINER_ID;

    questions.forEach(({ label, yesId, noId, eventName }) => {
        const groupEle = document.createElement("div");
        groupEle.className = "thl-site-feedback-group";
        if (eventName === "page_feedback" && isRoot) {
            groupEle.style.display = "none";
        }

        const textEle = document.createElement("span");
        textEle.className = "thl-site-feedback-label";
        textEle.textContent = label;

        const yesEle = document.createElement("button");
        yesEle.id = yesId;
        yesEle.className = "thl-thumbs-up";
        yesEle.innerHTML = THL_SITE_FEEDBACK_THUMB_SVG;
        yesEle.setAttribute("aria-label", label + " Yes");

        const noEle = document.createElement("button");
        noEle.id = noId;
        noEle.className = "thl-thumbs-down";
        noEle.innerHTML = THL_SITE_FEEDBACK_THUMB_SVG;
        noEle.setAttribute("aria-label", label + " No");

        groupEle.appendChild(textEle);
        if (yesId) {
            groupEle.appendChild(yesEle);
        }
        if (noId) {
            groupEle.appendChild(noEle);
        }
        feedbackEle.appendChild(groupEle);

        // --- Events ---
        [yesEle, noEle].forEach((btn) => {
            btn.addEventListener("click", function () {
                const value = btn === yesEle ? "yes" : "no";

                // Fire GTM event
                dataLayer.push({
                    event: eventName,
                    feedback_value: value,
                    page_path: window.location.pathname
                });
                
                // Visual confirmation — disable both buttons, mark selection
                yesEle.remove();
                noEle.remove();
                btn.classList.add("thl-selected");

                // Optional: swap label to thank-you message
                textEle.textContent = thankYouMessage;
            });
        });
    });

    // --- Inject ---

    const footerEle = document.querySelector("footer");
    if (footerEle) {
        footerEle.parentNode.insertBefore(feedbackEle, footerEle);
    }
}
