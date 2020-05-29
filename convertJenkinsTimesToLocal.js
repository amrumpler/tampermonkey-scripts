// ==UserScript==
// @name     Convert Jerusalem time to local time in Jenkins display
// @include  http://192.168.244.63:8080/*
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require  https://momentjs.com/downloads/moment.min.js
// @require  https://momentjs.com/downloads/moment-timezone-with-data.js
// @grant    GM_addStyle
// ==/UserScript==
//- The @grant directive is needed to restore the proper sandbox.
const pagesTimezone     = "Asia/Jerusalem";
const desiredTimezone   = moment.tz.guess();
waitForKeyElements ("div[time]", convertTimezone);
function convertTimezone (jNode) {
    var timeStr     = jNode.text ().trim ();  // expected like "May 29, 8:00 PM"
    var origTime    = moment.tz (timeStr, "LLL", pagesTimezone);
    var localTime   = origTime.tz (desiredTimezone).format ("LLL z");
    jNode.text (localTime);
}