var teacherCardSlider=0;
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
document.querySelector("body .mainContents .testimonial .title .button .right").onclick=function(){
	if(teacherCardSlider<4){
		teacherCardSlider+=1;
		teacherCardScroll(teacherCardSlider,document.querySelector("body .mainContents .testimonial>.contents .teacherCard").clientWidth,document.querySelector("body .mainContents .testimonial .contents").clientWidth);
	}
};
document.querySelector("body .mainContents .testimonial .title .button .left").onclick=function(){
	if(teacherCardSlider>0){
		teacherCardSlider-=1;
		teacherCardScroll(teacherCardSlider,document.querySelector("body .mainContents .testimonial>.contents .teacherCard").clientWidth,document.querySelector("body .mainContents .testimonial .contents").clientWidth);
	}
};
function teacherCardScroll(cardScroll,cardWidth,cardsWidth){
	if(cardsWidth>=995){
		document.querySelector("body .mainContents .testimonial .contents").scrollLeft=(cardWidth+190)*cardScroll;
	}else if(cardsWidth>=955){
		document.querySelector("body .mainContents .testimonial .contents").scrollLeft=(cardWidth+90)*cardScroll;
	}else if(cardsWidth>=925){
		document.querySelector("body .mainContents .testimonial .contents").scrollLeft=(cardWidth+50)*cardScroll;
	}
	else{
		document.querySelector("body .mainContents .testimonial .contents").scrollLeft=(cardWidth+20)*cardScroll;
	}
	
	if(cardScroll>=4){
		document.querySelector("body .mainContents .testimonial .title .button .right svg path").setAttribute("stroke","#606176");
	}else if(cardScroll<=0){
		document.querySelector("body .mainContents .testimonial .title .button .left svg path").setAttribute("stroke","#606176");
	}else{
		document.querySelector("body .mainContents .testimonial .title .button .left svg path").setAttribute("stroke","#111030");
		document.querySelector("body .mainContents .testimonial .title .button .right svg path").setAttribute("stroke","#111030");
	}
}
document.querySelector("body .mainContents .testimonial .title .button .right svg path").setAttribute("stroke","#111030");
teacherCardScroll(0);