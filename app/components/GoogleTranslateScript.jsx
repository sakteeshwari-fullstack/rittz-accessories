"use client";

import { useEffect } from "react";

export default function GoogleTranslateScript() {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,es,hi,ta,te,zh-CN",
            layout: google.translate.TranslateElement.InlineLayout.VERTICAL,
          },
          "google_translate_element"
        );

        // Duplicate the element into the mobile container after init
        const clone = document.getElementById("google_translate_element")?.cloneNode(true);
        if (clone) {
          const mobile = document.getElementById("google_translate_element_mobile");
          if (mobile && mobile.childNodes.length === 0) {
            mobile.appendChild(clone);
          }
        }
      };
    };

    if (!window.google?.translate) {
      addScript();
    }
  }, []);

  return null;
}
