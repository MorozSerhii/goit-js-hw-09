!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var r=o("5vz4m"),i=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]'),c=document.querySelector("button");function l(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t&&o({position:e,delay:n}),r({position:e,delay:n})}),n)}))}var d=function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))},f=function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))};c.addEventListener("click",(function(e){e.preventDefault();var n=Number(i.value),t=Number(u.value),o=Number(a.value);o&&t||(t=0,o=1);for(var r=0;r<o;r++)l(r+1,n+t*r).then(d).catch(f)}))}();
//# sourceMappingURL=03-promises.8ca2da22.js.map
