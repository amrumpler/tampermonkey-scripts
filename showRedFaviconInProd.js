// ==UserScript==
// @name     Show RED favicon for production so I don't screw anything up.
// @include  https://na1.nice-incontact.com/*
// @include https://eu1.niceincontact.com/*
// @require  https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// ==/UserScript==
//- The @grant directive is needed to restore the proper sandbox.
console.log('editing page');
waitForKeyElements ("link[rel='icon']", updateFavicon);
function updateFavicon (jNode) {
    jNode.attr('href', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAD5SURBVDhPY3wro/KfgQLABKXJBrQzoKRlPcOXi5cY+B/eYrh18DRDQN5SqAwqwAiDoPylDLwcLAyr0vQZONmYoaIMDNeef2Hwn3qe4eTCJKgIBKC4oHfyNob9xWYMm3OMUDSDgJYkD4OxPB+UhwAoBvgbiDEwMkI5WEC+kzxDZt0aKA8C4Aa4pC9i4GLFH6aWygIMK1L0GHombYOKIIXB1X2nGGxVBcGChMC7r78ZGDS0wGy4ldZA04kFXEjhAzfg4pPPUBZhsOPqaygLyYCydbcYLj/9zPD/P+6U/evPP4bNl14xNGy+CxXBkg5IBfiDnQgw0AYwMAAA9NtDeiwDaJcAAAAASUVORK5CYII=');
}
