var bodyElement = window.document.querySelector("body"),
  inputCommand = window.document.querySelector("#inputCommands"),
  labelElement = window.document.querySelector("label"), displayCommandInput = window.document.querySelector(".input .text"), contentCommand;
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
inputCommand.addEventListener("input", (event) => {displayCommandInput.innerHTML = event.target.value})
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
    }else if (inputCommand.value.toLowerCase()=="help"){
    	addNewHistoryCommand("Đây không phải là một môi trường linux thực sự mà chỉ là một trình giả lập lấy ý tưởng từ linux, vậy nên chương trình này chỉ có thể chạy những lệnh được hỗ trợ. Danh sách những lệnh được hỗ trợ được liệt kê dưới đây:");
    	addNewHistoryCommand("- url   : Được dùng để mở một đường link được chỉ định")
    	addNewHistoryCommand("- clear: Được dùng để xóa toàn bộ nội dung trên màn hình")
    	addNewHistoryCommand("Mọi lệnh ở danh sách trên đều có thể sử dụng kèm với đối số \"-h\" hoặc \"--help\" để có thể biết thêm chi tiết cách dùng lệnh")
    } else {
    		if (inputCommand.value.slice(0,1).toLowerCase()=="c"){
    			addNewHistoryCommand("Command \""+inputCommand.value+"\" not found, did you mean:");
    			addNewHistoryCommand("- clear");
    			addNewHistoryCommand("or use \"help\" command.");
    			//addNewHistoryCommand("- clear")
    		} else if (inputCommand.value.slice(0,1).toLowerCase()=="u"){
    			addNewHistoryCommand("Command \""+inputCommand.value+"\" not found, did you mean:");
    			addNewHistoryCommand("- url");
    			addNewHistoryCommand("or use \"help\" command.");
    			//addNewHistoryCommand("- clear")
    		} else{
    			addNewHistoryCommand("Command \""+inputCommand.value+"\" not found! Use \"help\" command?");
    		}
      //addNewHistoryCommand(inputCommand.value);
    }
    labelElement.scrollTop = labelElement.scrollHeight;
    inputCommand.value = "";
    displayCommandInput.innerHTML = "";
  }
});
