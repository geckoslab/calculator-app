import { app, BrowserWindow } from 'electron';

/**
 * Render Electron application.
 */
const createWindow = async () => {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
  });

  await window.loadFile('src/ui/index.html');
};

/**
 * Application entry point.
 * 1. TODO: Connect to NLP service...
 * 2. Render application.
 */
app.whenReady()
  .then(() => {
    console.log('TODO: Connect to NLP service...');
  })
  .then(createWindow);

/**
 * Application window events.
 */
// On close all application windows.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On start application event.
app.on('activate', async () => {
  await createWindow();
});
