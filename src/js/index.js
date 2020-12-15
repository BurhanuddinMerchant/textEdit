const text = document.getElementById("text-area");
const save = document.getElementById("save-button");

const fs = require("fs");
const { Terminal } = require("xterm");
save.onclick = (e) => {
  e.preventDefault();
  console.log(text.value);
  const filename = document.getElementById("filename").value;
  const fileExtension = document.getElementById("fileextenstion").value;
  fs.writeFile(
    "./data/" + filename + "." + fileExtension,
    text.value,
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
};
const handleChange = (e) => {
  console.log(e);
};

//terminal
const ipc = require("electron").ipcRenderer;
let term = new Terminal({});
term.open(document.getElementById("terminal"));
term.onData((e) => {
  ipc.send("terminal.toTerm", e);
});
ipc.on("terminal.incData", (event, data) => {
  term.write(data);
});
