function api(apiSelector){
	let table={},tableCharacters=["2","t","7","z","g","B","N","J","V","9","o","u","e","S","M","P","q","h","a","c","l","O","L","U","R","8","b","d","j","4","H","A","C","p","r","D","Z","G","Q","1","v","X","F","W","Y","K","I","x","E","T","i","n","5","0","s","m","f","w","y","k","3","6"],row=column=0;
	
	while(row<=61){
		if(tableCharacters[row]=="1"||tableCharacters[row]=="2"||tableCharacters[row]=="3"||tableCharacters[row]=="4"||tableCharacters[row]=="5"||tableCharacters[row]=="6"||tableCharacters[row]=="7"||tableCharacters[row]=="8"||tableCharacters[row]=="9"||tableCharacters[row]=="0"){
			table["n"+tableCharacters[row]]={}
		}else{
			table[tableCharacters[row]]={};
		}
		
		while(column<=61){
			/*
			if(row+column>=61){
				column=0;
			}
			*/
			
			if(row+column<=61){
				if(tableCharacters[row]=="1"||tableCharacters[row]=="2"||tableCharacters[row]=="3"||tableCharacters[row]=="4"||tableCharacters[row]=="5"||tableCharacters[row]=="6"||tableCharacters[row]=="7"||tableCharacters[row]=="8"||tableCharacters[row]=="9"||tableCharacters[row]=="0"){
					if(tableCharacters[column]=="1"||tableCharacters[column]=="2"||tableCharacters[column]=="3"||tableCharacters[column]=="4"||tableCharacters[column]=="5"||tableCharacters[column]=="6"||tableCharacters[column]=="7"||tableCharacters[column]=="8"||tableCharacters[column]=="9"||tableCharacters[column]=="0"){
						table["n"+tableCharacters[row]]["n"+tableCharacters[column]]=tableCharacters[row+column];
					}else{
						table["n"+tableCharacters[row]][tableCharacters[column]]=tableCharacters[row+column];
					}
				}else if(tableCharacters[column]=="1"||tableCharacters[column]=="2"||tableCharacters[column]=="3"||tableCharacters[column]=="4"||tableCharacters[column]=="5"||tableCharacters[column]=="6"||tableCharacters[column]=="7"||tableCharacters[column]=="8"||tableCharacters[column]=="9"||tableCharacters[column]=="0"){
					table[tableCharacters[row]]["n"+tableCharacters[column]]=tableCharacters[row+column];
				}else{
					table[tableCharacters[row]][tableCharacters[column]]=tableCharacters[row+column];
				}
			}else{
				//column=0;
			}
			
			//console.log(tableCharacters[row+column]);
			column=column+1;
		}
		column=0;
		row=row+1;
	}
	row=column=0;
	console.log(table);
	//tbCM322af77o7zc03WEdxbPFYWRdEnpm
	//console.log(tableCharacters[61]);
	//
	console.log(table.N.X+""+table.a.u+""+table.n5.o)
	
}
api();
//console.log(api("hello"))
