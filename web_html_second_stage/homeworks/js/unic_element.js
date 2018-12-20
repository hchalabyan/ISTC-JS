//Grel function, vory kgtni arajin chhamynknox elementy stringi mej,   'abacddbec'

var str = 'aкbacddbec';
var arr = str.split("");
var count = 1;

var obj = {};
var res = [];
var step = 0;

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
        if(arr[i] == arr[j]){
            step += 1;
            if(step > 1){
                break;
            }
        }        
    }
    if(step == 1){
        res.push(arr[i]);
    }
    step = 0;
}



console.log(res[0]);