const { app, shell, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      title: "TimeTree",
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  win.loadURL("https://techblog.team-jj.com/");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
})