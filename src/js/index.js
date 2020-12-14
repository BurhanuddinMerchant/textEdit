const text = document.getElementById("text-area");
const save = document.getElementById("save-button");
const fs = require("fs");
save.onclick = (e) => {
  e.preventDefault();
  console.log(text.value);
  const filename = document.getElementById("filename").value;
  fs.writeFile("./data/" + filename + ".txt", text.value, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
};
const handleChange = (e) => {
  console.log(e);
};
