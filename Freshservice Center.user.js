// ==UserScript==
// @name         Freshservice Center
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @include        http://ibiquity.freshservice.com/helpdesk/dashboard
// @include http://ibiquity.freshservice.com/helpdesk/dashboard
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('.summary li a{ text-align: center !important;}');

