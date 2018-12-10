 // stugel tvi parz kam baghadryal linely
 function numberType(numb){
    var count = 0;
    if(typeof(numb) === "number"){
        for(var i = 1; i<9; i++){
            if(numb % i == 0){
                count ++;
            }
        }
        if(count>2){
            console.log(numb +' '+ "Baghadryal tiv e")
        }
        else{
            console.log(numb +' '+ "Parz tiv e")
        }
    }
    else{
        alert("argument is not a number");
    }
}
numberType(10)

// stugel argumenti tipy

function typeOfArg(myArgument){
    var objectTypes = {
        type1:"number",
        type2:"string",
        type3:"boolean",
        type4:"undefined",
        type5:"Null",
        type6:"object",
        type7:"array",
        type8:"function"
    }
    var cond = typeof(myArgument);
    switch(cond){
        case objectTypes.type1:
        return "Argument type is number";
        
        case objectTypes.type2:
        return "Argument type is string";
        
        case objectTypes.type3:
        return "Argument type is boolean";
        
        case objectTypes.type4:
        return "Argument type is undefined";
        
        case objectTypes.type5:
        return "Argument type is NaN";
        
        case objectTypes.type6:
        return "Argument type is object";
        
        case objectTypes.type7:
        return "Argument type is array";

        default:
        return "Argument type is function"
    }
}

console.log(typeOfArg({}))

// Grel function, vory kstana mi qani parametrer ev function-y kancheluc ktpi argumentnery objecti tesqov.

function callByObj(param1, param2, param3){
    var myObj = {
        parametr1: param1,
        parametr2: param2,
        parametr3: param3
    }
    return myObj;
}

console.log(callByObj(5, "kljklj", [5,6,7]));


//Grel function, vory kstana number ev kveradardzni ir qarakusin

function numberSquare(myNumber){
   if(typeof(myNumber === "number")){
       return myNumber*myNumber;
   }
   else{
       alert(myNumber +' '+ 'is not a number')
   }
}
console.log('tvi qarakusin = ' + numberSquare(5))