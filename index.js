const electron = require('electron');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let todoWindow;
let mainMenu;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
  });
  mainWindow.loadURL(`file://${__dirname}/main.html`);
  mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
  todoWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 300,
    height: 200,
    title: 'Add New Todo'
  });
}

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Todo',
        click() {
          createAddWindow();
        }
      },
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      },
    ]
  }
];

if (process.platform === 'darwin') {
  menuTemplate.unshift(
    { label: '' },
  );
}