function api(f){let a={},b=["2","t","7","z","g","B","N","J","V","9","o","u","e","S","M","P","q","h","a","c","l","O","L","U","R","8","b","d","j","4","H","A","C","p","r","D","Z","G","Q","1","v","X","F","W","Y","K","I","x","E","T","i","n","5","0","s","m","f","w","y","k","3","6"],c=d=0,i=0,e;while(c<=61){if(b[c]=="1"||b[c]=="2"||b[c]=="3"||b[c]=="4"||b[c]=="5"||b[c]=="6"||b[c]=="7"||b[c]=="8"||b[c]=="9"||b[c]=="0"){a["n"+b[c]]={};}else{a[b[c]]={};};while(d<=61){if(c+d<=61){if(b[c]=="1"||b[c]=="2"||b[c]=="3"||b[c]=="4"||b[c]=="5"||b[c]=="6"||b[c]=="7"||b[c]=="8"||b[c]=="9"||b[c]=="0"){if(b[d]=="1"||b[d]=="2"||b[d]=="3"||b[d]=="4"||b[d]=="5"||b[d]=="6"||b[d]=="7"||b[d]=="8"||b[d]=="9"||b[d]=="0"){a["n"+b[c]]["n"+b[d]]=b[c+d];}else{a["n"+b[c]][b[d]]=b[c+d];}}else if(b[d]=="1"||b[d]=="2"||b[d]=="3"||b[d]=="4"||b[d]=="5"||b[d]=="6"||b[d]=="7"||b[d]=="8"||b[d]=="9"||b[d]=="0"){a[b[c]]["n"+b[d]]=b[c+d];}else{a[b[c]][b[d]]=b[c+d];};i=0;}else{if(b[c]=="1"||b[c]=="2"||b[c]=="3"||b[c]=="4"||b[c]=="5"||b[c]=="6"||b[c]=="7"||b[c]=="8"||b[c]=="9"||b[c]=="0"){if(b[d]=="1"||b[d]=="2"||b[d]=="3"||b[d]=="4"||b[d]=="5"||b[d]=="6"||b[d]=="7"||b[d]=="8"||b[d]=="9"||b[d]=="0"){a["n"+b[c]]["n"+b[d]]=b[i];}else{a["n"+b[c]][b[d]]=b[i];};}else if(b[d]=="1"||b[d]=="2"||b[d]=="3"||b[d]=="4"||b[d]=="5"||b[d]=="6"||b[d]=="7"||b[d]=="8"||b[d]=="9"||b[d]=="0"){a[b[c]]["n"+b[d]]=b[i];}else{a[b[c]][b[d]]=b[i];};i=i+1;};d=d+1;};d=0;c=c+1;};c=d=0;if(f=="accuweather"){e=a["G"]["b"]+""+a["P"]["u"]+""+a["G"]["w"]+""+a["n7"]["e"]+""+a["W"]["h"]+""+a["r"]["j"]+""+a["N"]["f"]+""+a["O"]["k"]+""+a["B"]["n"]+""+a["A"]["p"]+""+a["E"]["q"]+""+a["n5"]["l"]+""+a["Q"]["b"]+""+a["n0"]["e"]+""+a["t"]["a"]+""+a["r"]["c"]+""+a["X"]["c"]+""+a["n9"]["r"]+""+a["L"]["b"]+""+a["n2"]["d"]+""+a["c"]["j"]+""+a["V"]["a"]+""+a["M"]["t"]+""+a["x"]["w"]+""+a["a"]["b"]+""+a["q"]["d"]+""+a["M"]["o"]+""+a["o"]["h"]+""+a["Z"]["e"]+""+a["k"]["s"]+""+a["Z"]["k"]+""+a["n5"]["z"];}else if(f=="ipgeolocation"){e=a["B"]["k"]+""+a["n2"]["e"]+""+a["B"]["g"]+""+a["n8"]["d"]+""+a["Q"]["n"]+""+a["b"]["d"]+""+a["I"]["j"]+""+a["M"]["i"]+""+a["n7"]["y"]+""+a["j"]["k"]+""+a["n4"]["o"]+""+a["F"]["c"]+""+a["u"]["a"]+""+a["m"]["t"]+""+a["N"]["i"]+""+a["n6"]["o"]+""+a["n4"]["n"]+""+a["o"]["n"]+""+a["b"]["d"]+""+a["n3"]["j"]+""+a["Q"]["i"]+""+a["N"]["y"]+""+a["G"]["d"]+""+a["N"]["i"]+""+a["m"]["p"]+""+a["V"]["g"]+""+a["i"]["e"]+""+a["I"]["o"]+""+a["J"]["l"]+""+a["n6"]["d"]+""+a["W"]["o"]+""+a["V"]["o"];}else if(f=="opencagedata"){e=a["Y"]["a"]+""+a["U"]["g"]+""+a["t"]["a"]+""+a["R"]["t"]+""+a["I"]["a"]+""+a["M"]["w"]+""+a["r"]["j"]+""+a["E"]["e"]+""+a["Z"]["D"]+""+a["s"]["h"]+""+a["B"]["f"]+""+a["W"]["o"]+""+a["n9"]["l"]+""+a["N"]["e"]+""+a["n7"]["h"]+""+a["n6"]["d"]+""+a["G"]["i"]+""+a["V"]["o"]+""+a["Q"]["p"]+""+a["S"]["e"]+""+a["v"]["n"]+""+a["V"]["c"]+""+a["n4"]["n2"]+""+a["G"]["n5"]+""+a["y"]["n7"]+""+a["U"]["n1"]+""+a["t"]["h"]+""+a["n0"]["j"]+""+a["c"]["r"]+""+a["i"]["o"]+""+a["n2"]["d"]+""+a["u"]["j"];};return e;}