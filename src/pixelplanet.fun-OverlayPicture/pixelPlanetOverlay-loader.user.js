// ==UserScript==
// @name         pixelplanet.fun picture overlay
// @namespace    https://github.com/Pizdec-RP/pixelplanet.fun-OverlayPicture
// @version      1.1.2
// @description  Add your picture as overlay to pixelplanet.fun
// @author       Pizdec-RP(spizdil code)
// @include      https://pixelplanet.fun/*
// @grant        none
// @downloadURL  https://Pizdec-RP.github.io/pixelplanet.fun-OverlayPicture/pixelPlanetOverlay-loader.user.js
// ==/UserScript==
/**/

{
    const e = document.createElement("script");
    if (window.location.host.startsWith("localhost"))
      e.src = new URL("src/userscript-loader-module/pixelPlanetOverlay.user.ts", window.location.href).href;
    else
      e.src = "https://Pizdec-RP.github.io/pixelplanet.fun-OverlayPicture/pixelPlanetOverlay.user.js";
    e.type = "module";
    document.body.appendChild(e);
  }