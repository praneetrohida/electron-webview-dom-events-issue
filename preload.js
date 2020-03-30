const ipc = require("electron").ipcRenderer;

ipc.on("scroll-to-end", function() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});
