const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      contextIsolation: true,     // protect against prototype pollution
      nodeIntegration: false,     // prevent Node.js access in frontend
      sandbox: false              // allow external API requests like EmailJS
    }
  });

  const indexPath = path.join(__dirname, 'build', 'index.html');
  console.log("Loading React from:", indexPath);

  win.loadURL(
    url.format({
      pathname: indexPath,
      protocol: 'file:',
      slashes: true
    })
  );

  // Optional: open DevTools for debugging
  win.webContents.openDevTools();
}

// App lifecycle
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
