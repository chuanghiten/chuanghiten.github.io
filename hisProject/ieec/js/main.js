var pageMainText;
function getJsonLanguage (url,completed,error) {
	const ajaxJson = new XMLHttpRequest();
	ajaxJson.onload = () => {
		if (ajaxJson.status==200){
			completed(ajaxJson);
		}else{
			error(ajaxJson.status,ajaxJson.statusText);
		}
	}
	ajaxJson.open('GET',url,true);
	ajaxJson.send();
}
function printTextsToThePage(jsonLanguageData){
	window.document.querySelector('html head title').innerHTML=jsonLanguageData.pageTitle;
}
function getPageLanguageData (language){
	let languagePromise = new Promise((completed,error)=>{
		getJsonLanguage('/hisProject/ieec/json/'+language+'.json',completed,error);
	});
	languagePromise.then(data => {
		pageMainText=JSON.parse(data.responseText);
		printTextsToThePage(pageMainText);
	}).catch((statusCode,statusText) => {
		if (window.navigator.language == 'vi'){
			alert('Vãi l lỗi m r, status code: '+statusCode+', '+statusText);
		}else{
			alert('Error! Status code: '+statusCode+', '+statusText);
		}
	});
	
}
getPageLanguageData(window.navigator.language);