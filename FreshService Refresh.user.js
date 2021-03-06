// ==UserScript==
// @name FreshService Refresh
// @namespace [173166]-[AutoRefresh]-v1.0.0
// @description This is a simple script, it will refresh the page every x seconds
// @include http://ibiquity.freshservice.com/helpdesk/dashboard
// @include https://ibiquity.freshservice.com/helpdesk/dashboard
// @include http://helpdesk.ibiquity.com/helpdesk
// @include https://helpdesk.ibiquity.com/helpdesk
// @features Super sweet refreshing
// @CodedBy Wood
// @Website http://www.AyoobAli.com
// @version 1.2
// ==/UserScript==

//===[Settings]===\\
var StRefTime = '90';  //==[Set time by seconds]
//===[/Settings]===\\

if (StRefTime > 0) setTimeout("location.reload(true);",StRefTime*1000);

