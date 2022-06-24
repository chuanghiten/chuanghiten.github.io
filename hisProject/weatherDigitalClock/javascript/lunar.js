function dateToJulius(date,month,year){
	if(year>1582||(year==1582&&month>10)||(year==1582&&month>10&&date>14)){
		return (367*year - Math.floor(7*(year+Math.floor((month+9)/12))/4) - Math.floor(3*(Matg.floor((year+(month-9)/7)/100)+1)/4) + Math.floor(275*month/9)+date+1721028.5);
	}else{
		return (367*year - Math.floor(7*(year+5001+Math.floor((month-9)/7))/4) + Math.floor(275*month/9)+date+1729776.5);
	};
};
console.log(dateToJulius(1,1,2000));
console.log(dateToJulius(4,10,1582));
console.log(dateToJulius(15,10,1582));
