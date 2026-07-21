// NetSSR — minimal interaction layer, no dependencies.
(function () {
  "use strict";

  var fields = document.querySelectorAll(".field");
  var texts = document.querySelectorAll(".field-detail-text");
  var title = document.querySelector(".field-detail-title");

  function activate(key, btn) {
    fields.forEach(function (f) {
      f.setAttribute("aria-pressed", f === btn ? "true" : "false");
    });
    texts.forEach(function (t) {
      t.hidden = t.getAttribute("data-text") !== key;
    });
    if (title) title.textContent = "// " + key.toUpperCase();
  }

  fields.forEach(function (btn) {
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", function () {
      activate(btn.getAttribute("data-field"), btn);
    });
  });

  // Default state: highlight SECURITY on load without motion side-effects.
  var first = document.querySelector(".field-1");
  if (first) first.setAttribute("aria-pressed", "true");
})();
