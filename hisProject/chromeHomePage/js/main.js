var bodyElement = window.document.querySelector("body"),
  inputCommand = document.querySelector("#inputCommands");
function addScreenSizeToBodyElement() {
  bodyElement.setAttribute(
    "style",
    `--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`
  );
}
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;
inputCommand.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log(inputCommand.value);
  }
});
