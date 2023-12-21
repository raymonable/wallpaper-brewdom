/*

wallpaper configurer
made for brewdom

v2.0
written by raymond @ 12/20/23

*/

var [stylesheet, url] = [];
var refreshWallpaper = async () => {
    var background = await localforage.getItem(".config/background");
    if (!background)
        return;
    if (!stylesheet)
        stylesheet = document.createElement("style");
    if (url)
        URL.revokeObjectURL(url);
    url = URL.createObjectURL(background)
    stylesheet.innerHTML = `.ui_explorer--workspace .ui_icon span { backdrop-filter: invert(20%); } .skin_background { background: url("${url}"); background-repeat: no-repeat; background-position: center; background-size: cover; }`
    document.body.appendChild(stylesheet);
}

if(!window.homebrew)window.homebrew=[];window.homebrew.push(
    {
        name: "wallpaper configurator",
        event: () => {
            var f = document.createElement("input");
            f.accept = "image";
            f.type = "file";
            f.addEventListener("change", async () => {
                var n = f.files[0];
                await localforage.setItem(".config/background", n);
                refreshWallpaper();
            });
            f.click();
        },
        quick: true,
        icon: "apps/layer"
    }
); refreshWallpaper();
