 //calculator
        
 function calc(numb1, simb, numb2){
    var sum;
    switch(simb){
        case "-":
        return sum = numb1-numb2;
        

        case "+":
        return sum = numb1+numb2;
       

        case "*":
        return sum = numb1*numb2;
       

        case "%":
        return sum = numb1*numb2/100;
        

        case "/":
        if(numb2!=0){
            return sum = numb1/numb2;
        }
        else{
            return "tivy 0-i chi bajanvum";
        }
        
        default:
            alert( 'gortsoxutyun chka' );
    }
}

console.log(calc(2, '+', 3))

// function vory veradardznum e parametreri tipery
function type(param1, param2, param3){
    console.log(typeof(param1));
    console.log(typeof(param2));
    console.log(typeof(param3))
}


// hamematum e tipery ev yst tiperi gumarum kam konkat anum

function type(param1, param2, param3){
    var sum;
    var result;
    if(typeof(param1) == 'number' && typeof(param2) == 'number' && typeof(param3) == 'number'){
        console.log(sum = param1 + param2 + param3);
    }
    else if(typeof(param1) == 'string' && typeof(param2) == 'string' && typeof(param3) == 'string'){
        result =param1+ param2+param3;
        console.log(result);
    }
    else{
        console.log('xary type-er')
    }  

}
type(5, 4, 3)