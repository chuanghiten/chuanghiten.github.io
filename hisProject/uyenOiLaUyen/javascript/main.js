var bodyElement = window.document.querySelector("body"),
hongElement = window.document.querySelector("body .hong"),
imgHong = window.document.querySelector("body .hong .image"),
promptHong = window.document.querySelector("body .hong .options .contents .content")
textHong = window.document.querySelector("body .hong .text"),
optionHong = window.document.querySelector("body .hong .options .option");
function typingText(text, element, speed) {
	let i = 0;
	function tp() {
		if (i < text.length) {
			element.innerHTML += text.charAt(i);
			i++;
			setTimeout(tp, speed);
		}
	}
	tp();
}
function c(){
	imgHong.setAttribute("style","display: none");
	textHong.innerHTML="Thôi dẹp m đi";
	promptHong.innerHTML="";
	typingText("Chẳng ai lại đi tặng hoa cho một bông hoa cả, m lấy nhiều hoa thế muốn mở tiệm bán hoa hay gì?", promptHong, 50);
	optionHong.innerHTML="<div class=\"option1\">...</div><div class=\"option1\">...</div><div class=\"option1\">...</div>"
}
function d(){
	hongElement.removeAttribute("active")
}
function b(){
	imgHong.setAttribute("active","")
	promptHong.innerHTML=""
	if ((new Date().getDate() == 18) && (new Date().getMonth()+1 == 6)){
		typingText("3 bó thì sao? Ủa mà nay sinh nhật m hả?", promptHong, 50)
		optionHong.innerHTML="<div class=\"option1\" onclick=\"c()\">Còn hoa nữa 0?</div><div class=\"option2\" onclick=\"d()\">Nay sn t</div>"
	}else{
		typingText("3 bó thì sao?", promptHong, 50)
		optionHong.innerHTML="<div class=\"option1\" onclick=\"c()\">Còn hoa nữa 0?</div>"
	}
}
function a(){
	imgHong.removeAttribute("bong")
	imgHong.setAttribute("bo","")
	textHong.innerHTML="Vậy thì tặng bó hồng nè~"
	promptHong.innerHTML=""
	typingText("Vẫn ít ư?",promptHong,50)
	optionHong.innerHTML="<div class=\"option1\" onclick=\"b()\">Đúng r</div>"
}
document.addEventListener("DOMContentLoaded", () => {
  function addScreenSizeToBodyElement() {
    bodyElement.setAttribute(
      "style",
      `--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`
    );
		window.document.querySelector("html").setAttribute("style",`font-size: ${(window.innerWidth / 1211) * 62.5}%`)
  }
  hongElement.setAttribute("active", "");
  imgHong.setAttribute("bong","");
	textHong.innerHTML = "Tặng m bông hồng nè~<br><span>Nếu đang buồn thì đừng buồn nữa nhaaaa!!!</span>";
	typingText("Quá ít ư?", promptHong, 50);
	optionHong.innerHTML="<div class=\"option1\" onclick=\"a()\">Yep</div>"
  bodyElement.onresize = addScreenSizeToBodyElement;
  addScreenSizeToBodyElement();
});
