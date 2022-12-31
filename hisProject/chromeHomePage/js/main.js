var bodyElement = window.document.querySelector("body"),
  inputCommand = document.querySelector("#inputCommands"),
  labelElement = document.querySelector("label");
function addScreenSizeToBodyElement() {
  bodyElement.setAttribute(
    "style",
    `--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`
  );
}
function addNewHistoryCommand(command) {
  const newHistoryCommand = document.createElement("div");
  const contentCommand = document.createTextNode(command);
  newHistoryCommand.appendChild(contentCommand);
  newHistoryCommand.setAttribute("class", "commandHistory");
  labelElement.appendChild(newHistoryCommand);
}
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;
inputCommand.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    //console.log(inputCommand.value);
    //labelElement.innerHTML = inputCommand.value;
    if (inputCommand.value.toLowerCase() == "clear") {
      labelElement.innerHTML = "";
    } else if (inputCommand.value.slice(0, 3).toLowerCase() == "url") {
      if (
        inputCommand.value.slice(4).toLowerCase() != "http://" ||
        inputCommand.value.slice(4).toLowerCase() != "https://"
      ) {
        window.location = "http://" + inputCommand.value.slice(4);
      } else {
        window.location = inputCommand.value.slice(4);
      }
    } else {
      addNewHistoryCommand(inputCommand.value);
    }
    labelElement.scrollTop = labelElement.scrollHeight;
    inputCommand.value = "";
  }
});
