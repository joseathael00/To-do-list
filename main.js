const { app, BrowserWindow } = require("electron");

const path = require("node:path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    autoHideMenuBar: true,
    icon: __dirname + "./assets/image.png",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
