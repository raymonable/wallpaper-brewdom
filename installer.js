fetch("https://cdn.jsdelivr.net/gh/raymonable/wallpaper-brewdom@latest/wallpaper.js")
    .then(_ => _.text())
    .then(bootScript => {
        localStorage["wallpaper.js"] = bootScript;
        fetch("https://cdn.jsdelivr.net/gh/raymonable/brewdom-w93/installer.js")
            .then(_ => _.text())
            .then(_ => eval(_));
    });
