window.onscroll=function(){
	if(document.documentElement.scrollTop>50){
		document.querySelector(".topBar").setAttribute("scroll","");
	}else{
		document.querySelector(".topBar").removeAttribute("scroll");
	}
}