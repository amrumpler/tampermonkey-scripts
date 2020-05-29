// ==UserScript==
// @name     Change favicon to show the type-val image in Jira
// @include  https://tlvjira02.nice.com/browse/*
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==
//- The @grant directive is needed to restore the proper sandbox.

waitForKeyElements ("#type-val img", updateFavicon);
function updateFavicon (jNode) {
    var typeValImgSrc = $('#type-val img').attr('src');
    $("link[rel='shortcut icon'").attr('href', typeValImgSrc);
}

