// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const appPath = window.require("electron").remote.app.getAppPath();
window.preloadFile =
  "file://" + window.require("path").join(appPath, "preload.js");
