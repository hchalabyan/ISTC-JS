// grir function, vory kstana string, , ev kgtni amenerkar bary ayd naxadasutyan mej

function longWords(str){
    var arrStr = str.split(" ");
    var max = arrStr[0].length;
    var longWord = arrStr[0]
    for(var i =0; i<arrStr.length; i++){
        if(arrStr[i]>max){
            max = arrStr[i];
            longWord = arrStr[i];
        }
    }
    console.log(longWord)            
} 
longWords("lksopakfsklf psaodfkspo deas");

//Grel function vory kstana array, arrayi arjeqnery string tipi en, petq e yuraqanchur bari arajin tary convert anel poqratar kam metsatar


function upperOrLowCase(str){
    var newArrStr = str;

    for(var i = 0; i<newArrStr.length; i++){
        if(newArrStr[i].charAt(0) == newArrStr[i].charAt(0).toUpperCase()){
            newArrStr[i] = newArrStr[i].charAt(0).toLowerCase()+newArrStr[i].substr(1);
        }
        else{
            newArrStr[i] = newArrStr[i].charAt(0).toUpperCase()+newArrStr[i].substr(1);
        }
        
    }
   console.log(newArrStr)
}

upperOrLowCase(['kihjk','Jlj', 'oik']);


