window.onscroll=function(){
	if (document.documentElement.scrollTop > 50){
		document.querySelector("body .topBar").setAttribute("scroll","");
	} else {
		document.querySelector("body .topBar").removeAttribute("scroll");
	}
}