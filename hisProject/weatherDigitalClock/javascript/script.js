var body = window.document.querySelector("body"),
  second = window.document.querySelector("div.second"),
  minute = window.document.querySelector("div.minute"),
  hour = window.document.querySelector("div.hour"),
  cssDisplay = window.document.querySelector("link.display"),
  cssLeaf = window.document.querySelector("link.leaf"),
  date,
  month,
  season,
  seasonCheck,
  session,
  sessionData,
  sessionDataUrl,
  latitudeData,
  longitudeData,
  weatherData,
  weatherDataUrl,
  sunrise,
  sunset,
  time,
  secondTime,
  secondDeg,
  minuteTime,
  minuteDeg,
  hourTime,
  hourDeg,
  days,
  timeZone,
  dateToJulius,
  juliusDate,
  JdNew,
  k,
  last,
  arc,
  i,
  lunar,
  leapMonth,
  leaf,
  weatherId,
  cityNameDataUrl,
  cityNameData,
  cityName,
  countryCodeDataUrl,
  countryCodeData,
  countryCode,
  temperature,
  temperatureMax,
  temperatureMin,
  
  oldValue,locationData,temperatureProgressbar=document.querySelector(".halfCircle"),temperatureDeg,temperaturePrint=document.querySelector(".sun .weatherInfo .temperatureNow .info .content"),weatherNow,forecast,city,dayPrint=document.querySelector(".sun .halfCircle .halfCircleCenter .dates .day"),datePrint=document.querySelector(".sun .halfCircle .halfCircleCenter .dates .date"),cityPrint=document.querySelector(".sun .halfCircle .halfCircleCenter .dates .city");







  //navigator.geolocation.getCurrentPosition(positionData);
async function positionData(position) {
//console.log("hello");
  latitudeData = position.coords.latitude;
  longitudeData = position.coords.longitude;
  //console.log(api("hello"));
//  latitudeData=15;longitudeData=108;
  sessionDataUrl =
    "https:/" +
    "/api.ipgeolocation.io/astronomy?apiKey=7e95d0e738164ff9a60bb77fbe2fdb0a&lat=" +
    latitudeData +
    "&long=" +
    longitudeData;
    //console.log(navigator.language);
  weatherDataUrl =
    "https:/" +
    "/api.openweathermap.org/data/2.5/weather?lat=" +
    latitudeData +
    "&lon=" +
    longitudeData +
    "&appid=5298f9131293054b9041c1008d027218&lang="+navigator.language||navigator.userlanguage;
  cityNameDataUrl =
    "https:/" +
    "/api.openweathermap.org/geo/1.0/reverse?lat=" +
    latitudeData +
    "&lon=" +
    longitudeData +
    "&appid=5298f9131293054b9041c1008d027218";
  countryCodeDataUrl =
    "https:/" +
    "/api.opencagedata.com/geocode/v1/json?q=" +
    latitudeData +
    "+" +
    longitudeData +
    "&key=2dc8792399604acb8a984d4d32ac03d1&pretty=0";
  /*
  console.log(sessionDataUrl);
  console.log(weatherDataUrl);
  console.log(cityNameDataUrl);
  console.log(countryCodeDataUrl);
  */
  sessionData = await fetch(sessionDataUrl).then((sessionResponse) => sessionResponse.json());
  weatherData = await fetch(weatherDataUrl).then((weatherResponse) => weatherResponse.json());
  cityNameData = await fetch(cityNameDataUrl).then((cityNameResponse) => cityNameResponse.json());
  countryCodeData = await fetch(countryCodeDataUrl).then((countryCodeResponse) => countryCodeResponse.json());
  locationData=await fetch("https:/"+"/dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=tbCM322af77o7zc03WEdxbPFYWRdEnpm&q="+latitudeData+"%2C"+longitudeData+"&language="+(navigator.language||navigator.userlanguage)+"&details=false").then((locationResponse)=>locationResponse.json());
  weatherNow=await fetch("https:/"+"/dataservice.accuweather.com/currentconditions/v1/"+locationData.Key+"?apikey=tbCM322af77o7zc03WEdxbPFYWRdEnpm&language="+(navigator.language||navigator.userlanguage)+"&details=false").then((weatherNowResponse)=>weatherNowResponse.json());
  forecast=await fetch("https:/"+"/dataservice.accuweather.com/forecasts/v1/daily/1day/"+locationData.Key+"?apikey=tbCM322af77o7zc03WEdxbPFYWRdEnpm&language="+(navigator.language||navigator.userlanguage)+"&details=false&metric=true").then((forecastResponse)=>forecastResponse.json());
  //console.log(weatherNow);
  //console.log([sessionData,weatherData,cityNameData,countryCodeData,locationData]);
  sunrise =
    parseInt(sessionData.sunrise.slice(0, 2)) +
    parseInt(sessionData.sunrise.slice(-2.0)) / 60;
  sunset =
    parseInt(sessionData.sunset.slice(0, 2)) +
    parseInt(sessionData.sunset.slice(-2.0)) / 60;
  //console.log(navigator.language);
  //console.log(cityNameData[0].local_names.navigator.language);
  //console.log(typeof countryCodeData.countryCode);
  countryCode = countryCodeData.results[0].components.country_code;
  //console.log(countryCode);
  temperature=weatherNow[0].Temperature.Metric.Value;
  temperatureMin=forecast.DailyForecasts[0].Temperature.Minimum.Value;
  temperatureMax=forecast.DailyForecasts[0].Temperature.Maximum.Value;
  //console.log(temperatureMin+" "+temperatureMax);
  //console.log(sunrise + " " + sunset);
  city=locationData.LocalizedName;
}
//console.log(sessionData);
//setInterval(console.log(sessionData),2000);
//positionData();
function main() {
	//console.log(sessionData.message);
  time = new Date();
  secondTime = time.getSeconds();
  //secondTime=0;
  secondDeg = (secondTime * 360) / 60;
  minuteTime = time.getMinutes();
  minuteDeg = (minuteTime * 360) / 60;
  hourTime = time.getHours();
  hourDeg = (hourTime * 360) / 24;
  days = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  timeZone =
    Number(
      time
        .toString()
        .slice(
          time.toString().indexOf("GMT") + 3,
          time.toString().indexOf("GMT") + 6
        )
    ) +
    Number(
      time
        .toString()
        .slice(
          time.toString().indexOf("GMT") + 6,
          time.toString().indexOf("GMT") + 8
        )
    ) /
      60;
  //timeZone=8;
  if (time.getDate() < 10) {
    date = "0" + time.getDate();
  } else {
    date = time.getDate();
  }
  if (time.getMonth() + 1 < 10) {
    month = "0" + (time.getMonth() + 1);
  } else {
    month = time.getMonth() + 1;
  }
  //console.log(time.getMonth());
  year = time.getFullYear();
  second.style.transform = "rotate(" + secondDeg + "deg)";
  minute.style.transform =
    "translate(-50%,-50%) rotate(calc(" + minuteDeg + "deg + 90deg))";
  hour.style.transform =
    "translate(-50%,-50%) rotate(calc(" + hourDeg + "deg + 90deg))";
  //days.innerHTML = day + "<span>" + date + "/" + month + "/" + year + "</span>";
	dayPrint.innerHTML=days[time.getDay()];
	datePrint.innerHTML=date+"/"+month+"/"+year;
	if(city){}else{
		city="?"
	}
	cityPrint.innerHTML="<span><svg xmlns=\"http:/\/www.w3.org/2000/svg\" viewBox=\"0 0 384 512\"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https:/\/fontawesome.com License - https:/\/fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d=\"M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z\"/></svg></span>"+city;
  if (time.getMonth() + 1 >= 3 && time.getMonth() + 1 <= 5) {
    season = "spring";
  } else if (time.getMonth() + 1 >= 6 && time.getMonth() + 1 <= 8) {
    season = "summer";
  } else if (time.getMonth() + 1 >= 9 && time.getMonth() + 1 <= 11) {
    season = "fall";
  } else {
    season = "winter";
  }
  if (sunrise) {
  } else {
    sunrise = 5;
  }
  if (sunset) {
  } else {
    sunset = 18;
  }
  if (
    hourTime + minuteTime / 60 >= sunrise &&
    hourTime + minuteTime / 60 <= 10
  ) {
    session = "morning";
  } else if (
    hourTime + minuteTime / 60 >= 11 &&
    hourTime + minuteTime / 60 <= 15
  ) {
    session = "noon";
  } else if (
    hourTime + minuteTime / 60 >= 16 &&
    hourTime + minuteTime / 60 <= sunset
  ) {
    session = "afternoon";
  } else {
    session = "night";
  }

  lunar = getLunar(
    time.getDate(),
    time.getMonth() + 1,
    time.getFullYear(),
    timeZone
  );
  if (lunar[3] == 0) {
    leapMonth = "false";
  } else {
    leapMonth = "true";
  }
  if (
    (lunar[1] == 1 && lunar[0] >= 1 && lunar[0] <= 5) ||
    (lunar[1] == 12 && lunar[0] >= 28)
  ) {
    if (latitudeData < 16 && countryCode == "vn") {
      leaf = "apricotBlossom"; /* mai */
    } else {
      leaf = "peachBlossom"; /* đào */
    }
  } else {
    leaf = "default";
  }
  season = "spring";
  session = "morning";
  weatherId = "800";
  leaf = "default";

  /*

  if(10>minuteTime&&minuteTime>8){
    leaf="peachBlossom";
  }else if(6>minuteTime&&minuteTime>4){
    leaf="apricotBlossom";
  }else if(7>minuteTime&&minuteTime>5){
    leaf="default";
  }else if(8>minuteTime&&minuteTime>6){
    weatherId = "801";
  }else{
    weatherId = "802";
    leaf="peachBlossom";
  }

  season="spring";
  session = "morning";
  weatherId = "800";
  leaf = "default";
  *
  cssDisplay.setAttribute(
    "href",
    "./css/season/" +
      season +
      "/session/" +
      session +
      "/" +
      weatherId +
      "/style.css"
  );
  *
  if (leaf == "default" || session == "night") {
    cssLeaf.setAttribute("href", "./css/season/spring/leaf/leafDefault.css");
  } else {
    cssLeaf.setAttribute(
      "href",
      "./css/season/" +
        season +
        "/leaf" +
        "/" +
        leaf +
        "/" +
        session +
        "/" +
        weatherId +
        "/style.css"
    );
    //console.log(sunrise+', '+sunset);
  };
  */
  //console.log(navigator.language);
  /*
  console.log(
    "lunar = " +
      lunar[0] +
      "/" +
      lunar[1] +
      "/" +
      lunar[2] +
      " - leapMonth = " +
      leapMonth
  );
  */
  //console.log(session);
  
 temperatureDeg=252*((temperatureMax-temperature)/(temperatureMax-temperatureMin));
 //console.log(temperatureDeg);
 if(temperatureDeg||temperatureDeg==0){
 		temperatureProgressbar.setAttribute("style","--temperatureProgressbarDeg:"+temperatureDeg+"deg");
 }else{
 		temperatureProgressbar.setAttribute("style","--temperatureProgressbarDeg:100deg");
 }
 if(temperature&&temperature.toString().search("\[.]")!=-1){
	 temperaturePrint.innerHTML=temperature.toString().slice(0,temperature.toString().search("\[.]"))+"<span class='decimal'>"+temperature.toString().slice(temperature.toString().search("\[.]"))+"</span><span>°C</span>";
	 	//console.log(temperature.toString().slice(temperature.toString().search("\[.]")));
 }else if(temperature){
 	temperaturePrint.innerHTML=temperature+"<span class='decimal'>.0</span><span>°C</span>";
 }else{
 		temperaturePrint.innerHTML="?<span class='decimal'></span><span>°C</span>";
 }
 if(temperatureMax&&temperatureMax.toString().search("\[.]")!=-1){
	 document.querySelector(".sun .weatherInfo .temperatureMax .info .content").innerHTML=temperatureMax.toString().slice(0,temperatureMax.toString().search("\[.]"))+"<span class='decimal'>"+temperatureMax.toString().slice(temperatureMax.toString().search("\[.]"))+"</span><span>°C</span>";
	 	//console.log(temperature.toString().slice(temperature.toString().search("\[.]")));
 }else if(temperatureMax){
 	document.querySelector(".sun .weatherInfo .temperatureMax .info .content").innerHTML=temperatureMax+"<span class='decimal'>.0</span><span>°C</span>";
 }else{
 		document.querySelector(".sun .weatherInfo .temperatureMax .info .content").innerHTML="?<span class='decimal'></span><span>°C</span>";
 }
 if(temperatureMin&&temperatureMin.toString().search("\[.]")!=-1){
	 document.querySelector(".sun .weatherInfo .temperatureMin .info .content").innerHTML=temperatureMin.toString().slice(0,temperatureMin.toString().search("\[.]"))+"<span class='decimal'>"+temperatureMin.toString().slice(temperatureMin.toString().search("\[.]"))+"</span><span>°C</span>";
	 	//console.log(temperature.toString().slice(temperature.toString().search("\[.]")));
 }else if(temperatureMin){
 	document.querySelector(".sun .weatherInfo .temperatureMin .info .content").innerHTML=temperatureMin+"<span class='decimal'>.0</span><span>°C</span>";
 }else{
 		document.querySelector(".sun .weatherInfo .temperatureMin .info .content").innerHTML="?<span class='decimal'></span><span>°C</span>";
 }
 //console.log(navigator.language||navigator.userlanguage);
 if((navigator.language||navigator.userlanguage)=="vi"&&temperature){
 	if(temperature==temperatureMax){
 		document.querySelector(".sun .weatherInfo .temperatureNow .info .title").innerHTML="Đù? Cao thế!";
 	}else if(temperature==temperatureMin){
 		document.querySelector(".sun .weatherInfo .temperatureNow .info .title").innerHTML="Thấp ghê!";
 	}else{
 		document.querySelector(".sun .weatherInfo .temperatureNow .info .title").innerHTML="Nhiệt "+(((temperature-temperatureMin)/(temperatureMax-temperatureMin))*100).toFixed(1)+"%";
 	}
 }
  return [season, session, weatherId, leaf];
}
function updateRealTimeActive(displayData, fileSelector) {
  function updateDisplay(displayDataUpdate) {
    cssDisplay.setAttribute(
      "href",
      "./css/season/" +
        displayDataUpdate[0] +
        "/session/" +
        displayDataUpdate[1] +
        "/" +
        displayDataUpdate[2] +
        "/style.css"
    );
  };
  function updateLeaf(leafDataUpdate){
    if (leafDataUpdate[3] == "default" || leafDataUpdate[1] == "night") {
      cssLeaf.setAttribute("href", "./css/season/spring/leaf/leafDefault.css");
    } else {
      cssLeaf.setAttribute(
        "href",
        "./css/season/" +
          leafDataUpdate[0] +
          "/leaf" +
          "/" +
          leafDataUpdate[3] +
          "/" +
          leafDataUpdate[1] +
          "/" +
          leafDataUpdate[2] +
          "/style.css"
      );
    }
  }
  if(fileSelector=='displayAndLeaf'){
    updateDisplay(displayData);
    updateLeaf(displayData);
  }else if(fileSelector=='display') {
    updateDisplay(displayData);
  }else{
    updateLeaf(displayData);
  };
}
oldValue = [0, 0, 0, 0];
function updateRealTime() {
  main();
  if (
    main()[0] != oldValue[0] ||
    main()[1] != oldValue[1] ||
    main()[2] != oldValue[2] ||
    main()[3] != oldValue[3]
  ) {
    if (
      (main()[0] != oldValue[0] ||
        main()[1] != oldValue[1] ||
        main()[2] != oldValue[2]) &&
      main()[3] != oldValue[3]
    ) {
      updateRealTimeActive(main(), "displayAndLeaf");
      oldValue=main();
    } else if (
      (main()[0] != oldValue[0] ||
        main()[1] != oldValue[1] ||
        main()[2] != oldValue[2]) &&
      main()[3] == oldValue[3]
    ) {
      updateRealTimeActive(main(), "display");
      oldValue=main();
    } else if (
      main()[0] == oldValue[0] &&
      main()[1] == oldValue[1] &&
      main()[2] == oldValue[2] &&
      main()[3] != oldValue[3]
    ) {
      updateRealTimeActive(main(), "leaf");
      oldValue=main();
    }
  }
}
setInterval(updateRealTime, 1000);
