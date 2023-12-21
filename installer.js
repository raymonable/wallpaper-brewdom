fetch("https://cdn.jsdelivr.net/gh/raymonable/wallpaper-brewdom@latest/wallpaper.js")
    .then(_ => _.text())
    .then(bootScript => {
        localStorage["boot/wallpaper.js"] = bootScript;
        fetch("https://cdn.jsdelivr.net/gh/raymonable/brewdom-w93@"+(window.bdbranch || "latest")+"/installer.js")
            .then(_ => _.text())
            .then(_ => eval(_));
    });
