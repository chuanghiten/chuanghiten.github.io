function api(apiSelector){
	let table={},tableCharacters=["s","m","p","r","x","t","7","z","g","q","h","a","c","l","8","b","d","j","4","1","v","9","o","u","f","w","y","k","3","6","e","2","i","n","5","0"],row=0,column=0;
	while(row<=35){
		table[tableCharacters[row]]={};
		while(column<=35){
			table[tableCharacters[row]][tableCharacters[column]]=tableCharacters[column];
			column=column+1;
		}
		column=0;
		row=row+1;
	}
	
	console.log(table)
	
}
api();
//console.log(api("hello"))
