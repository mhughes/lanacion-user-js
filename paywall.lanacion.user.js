// ==UserScript==
// @name         Anti paywall lanacion.com.ar
// @namespace    https://github.com/mhughes
// @version      0.1
// @description  Suprime paywall de lanacion.com.ar
// @author       mhughes
// @match        http://*.lanacion.com.ar/*
// @grant        none
// ==/UserScript==

$("body > div.lnmodal.pantalla-completa.login").hide();