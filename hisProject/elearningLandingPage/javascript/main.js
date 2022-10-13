window.onscroll=function(){
	if(document.documentElement.scrollTop>50){
		document.querySelector(".topBar").setAttribute("scroll","");
	}else{
		document.querySelector(".topBar").removeAttribute("scroll");
	}
}
if(/duckBatman/.test(window.location.href)){
	document.querySelector("body .mainContents .features .videos .mainVideo .videoPlayer").setAttribute("src","./mp4/Vua Trò Cheems 2.mp4");
	document.querySelector("body .mainContents .features .videos .mainVideo .control").setAttribute("style","cursor:help");
	document.querySelector("body .mainContents .features .videos .moreVideos .lecture2").setAttribute("style","cursor:help");
	document.querySelector("body .mainContents .features .videos .moreVideos .lecture3").setAttribute("style","cursor:help");
	document.querySelector("body .mainContents .features .videos .moreVideos .lecture4").setAttribute("style","cursor:help");
	document.querySelector("body .mainContents .features .videos .mainVideo .control").onclick=function(){
		document.querySelector("body .mainContents .features .videos .mainVideo .videoPlayer").setAttribute("controls","");
		document.querySelector("body .mainContents .features .videos .mainVideo .videoPlayer").play();
		document.querySelector("body .mainContents .features .videos .mainVideo .control").setAttribute("hide","");
	}
	document.querySelector("body .mainContents .features .videos .moreVideos .lecture2").onclick=function(){
		document.querySelector("body .mainContents .features .videos .mainVideo .control").removeAttribute("hide");
		document.querySelector("body .mainContents .features .videos .mainVideo .videoPlayer").removeAttribute("controls");
		document.querySelector("body .mainContents .features .videos .mainVideo .videoPlayer").setAttribute("src","./mp4/Vua Trò Cheems.mp4");
	}
	document.querySelector("body .mainContents .features .videos .moreVideos .lecture3").onclick=function(){
		document.querySelector("body .mainContents .features .videos .mainVideo .control").removeAttribute("hide");
		document.querySelector("body .mainContents .features .videos .mainVideo .videoPlayer").removeAttribute("controls");
		document.querySelector("body .mainContents .features .videos .mainVideo .videoPlayer").setAttribute("src","./mp4/Vua Trò Cheems 2.mp4");
	}
	document.querySelector("body .mainContents .features .videos .moreVideos .lecture4").onclick=function(){
		document.querySelector("body .mainContents .features .videos .mainVideo .control").removeAttribute("hide");
		document.querySelector("body .mainContents .features .videos .mainVideo .videoPlayer").removeAttribute("controls");
		document.querySelector("body .mainContents .features .videos .mainVideo .videoPlayer").setAttribute("src","./mp4/Cách đối phó với các fan cuồng Rapper.mp4");
	}
}