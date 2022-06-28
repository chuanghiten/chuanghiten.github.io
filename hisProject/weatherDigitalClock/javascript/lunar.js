//a function = dateToJulius
function a(date,month,year,timeZone){
	if(year>1582||(year==1582&&month>10)||(year==1582&&month>10&&date>14)){
		return ((367*year - Math.floor(7*(year+Math.floor((month+9)/12))/4) - Math.floor(3*(Math.floor((year+(month-9)/7)/100)+1)/4) + Math.floor(275*month/9)+date+1721028.5)-(timeZone/24));
	}else{
		return ((367*year - Math.floor(7*(year+5001+Math.floor((month-9)/7))/4) + Math.floor(275*month/9)+date+1729776.5)-(timeZone/24));
	};
};
function juliusToDate(juliusDay,timeZone){
	let z,aa,alpha,b,c,d,e,f,localJuliusDay,juliusDate,juliusMonth,juliusYear;
	localJuliusDay=juliusDay+timeZone/24;
	z = Math.floor(localJuliusDay+0.5);
	f = (localJuliusDay+0.5)-z;
	if (z < 2299161) {
	  aa = z;
	} else {
	  alpha = Math.floor((z-1867216.25)/36524.25);
	  aa = z + 1 + alpha - Math.floor(alpha/4);
	};
	b = aa + 1524;
	c = Math.floor((b-122.1)/365.25);
	d = Math.floor( 365.25*c );
	e = Math.floor( (b-d)/30.6001 );
	juliusDate = Math.floor(b - d - Math.floor(30.6001*e) + f);
	if (e < 14) {
	  juliusMonth = e - 1;
	} else {
	  juliusMonth = e - 13;
	}
	if (juliusMonth < 3) {
	  juliusYear = c - 4715;
	} else {
	  juliusYear = c - 4716;
	}
	return [juliusDate,juliusMonth,juliusYear];
};
function newMoonDayX(x){
	let t,t2,t3,dr,jd1,m,mpr,f,c1,deltaT;
	t = x/1236.85;
	t2 = t * t;
	t3 = t2 * t;
	dr = Math.PI/180;
	jd1 = (2415020.75933 + 29.53058868*x + 0.0001178*t2 - 0.000000155*t3) + 0.00033*Math.sin((166.56 + 132.87*t - 0.009173*t2)*dr);
	m = 359.2242 + 29.10535608*x - 0.0000333*t2 - 0.00000347*t3;
	mpr = 306.0253 + 385.81691806*x + 0.0107306*t2 + 0.00001236*t3;
	f = 21.2964 + 390.67050646*x - 0.0016528*t2 - 0.00000239*t3;
	c1 = ((((((0.1734 - 0.000393*t)*Math.sin(m*dr) + 0.0021*Math.sin(2*dr*m)) - 0.4068*Math.sin(mpr*dr) + 0.0161*Math.sin(dr*2*mpr)) - 0.0004*Math.sin(dr*3*mpr)) + 0.0104*Math.sin(dr*2*f) - 0.0051*Math.sin(dr*(m+mpr)) - 0.0074*Math.sin(dr*(m-mpr)) + 0.0004*Math.sin(dr*(2*f+m))) - 0.0004*Math.sin(dr*(2*f-m)) - 0.0006*Math.sin(dr*(2*f+mpr))) + 0.0010*Math.sin(dr*(2*f-mpr)) + 0.0005*Math.sin(dr*(2*mpr+m));
	if (t < -11) {
		deltaT= 0.001 + 0.000839*t + 0.0002261*t2 - 0.00000845*t3 - 0.000000081*t*t3;
	} else {
		deltaT= -0.000278 + 0.000265*t + 0.000262*t2;
	};
	return jd1 + c1 - deltaT;
};
function sunLongitude(juliusDay){
	let t,t2,dr,m,l0,dl;
	t = (juliusDay - 2451545.0 ) / 36525;
	t2 = t*t;
	dr = Math.PI/180;
	m = 357.52910 + 35999.05030*t - 0.0001559*t2 - 0.00000048*t*t2;
	l0 = 280.46645 + 36000.76983*t + 0.0003032*t2;
	dl = ((1.914600 - 0.004817*t - 0.000014*t2)*Math.sin(dr*m)) + (0.019993 - 0.000101*t)*Math.sin(dr*2*m) + 0.000290*Math.sin(dr*3*m);
	return ((l0 + dl)*dr) - Math.PI*2*(Math.floor(((l0 + dl)*dr)/(Math.PI*2)));
};
function winterSolstice(year,timeZone){
	let off,k,jd,ret,sunLong;
	off = a(31, 12, year,timeZone) - 2415021.076998695;
	k = Math.floor(off / 29.530588853);
	jd = newMoonDayX(k);
	ret = juliusToDate(jd,timeZone);
	sunLong = sunLongitude(a(ret[0], ret[1], ret[2],timeZone));
	if (sunLong > 3*Math.PI/2) {
		jd = newMoonDayX(k-1);
	}
	return juliusToDate(jd,timeZone);
};
function lunarTable(year,timeZone){
	let aa,ret,month11a,jdMonth11a,k,month11b,off,nm;
	ret=[];
	month11a=winterSolstice(year-1,timeZone);
	jdMonth11a=a(month11a[0],month11a[1],month11a[2],timeZone);
	k = Math.floor(0.5 + (jdMonth11a - 2415021.076998695) / 29.530588853);
	month11b=winterSolstice(year,timeZone);
	off=a(month11b[0],month11b[1],month11b[2],timeZone)-jdMonth11a;
	if(off>365){
		ret[13]=null;
	}else{
		ret[12]=null;
	};
	ret[0]=[month11a[0],month11a[1],month11a[2],0,0];
	ret[ret.length-1]=[month11b[0],month11b[1],month11b[2],0,0];
	for(var i=1;i<(ret.length-1);i++){
		nm=newMoonDayX(k+i);
		aa=juliusToDate(nm,timeZone);
		ret[i]=[aa[0],aa[1],aa[2],0,0];
	};
	for(var i2=0;i2<ret.length;i2++){
		ret[i2][3]=(i2+11)%12;
	};
	return ret;
};
function dateToLunar(date,month,year,timeZone){
	let ly,month11,jdToday,jdMonth11,dd,mm,yy,i;
	yy=year
	ly = lunarTable(year,timeZone); // Please cache the result of this computation for later use!!!
	month11 = ly[ly.length - 1];
	jdToday = a(date, month, year,timeZone);
	//console.log(jdToday);
	jdMonth11 = a(month11[0], month11[1], month11[2],timeZone);
	if (jdToday >= jdMonth11) {
		ly = lunarTable(year+1);
		yy = year + 1;
		console.log(true);
	};
	i = ly.length - 1;
	while (jdToday < a(ly[i][0], ly[i][1], ly[i][2],timeZone)) {
		i--;
	};
	dd = (jdToday -a(ly[i][0], ly[i][1], ly[i][2],timeZone)) + 1;
	mm = ly[i][3];
	if (mm >= 11) {
		yy--;
	};
	return [dd, mm, yy];
};
console.log(dateToLunar(28,6,2022,7))
dateToLunar(28,6,2022,7);