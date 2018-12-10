//1.  Grel function, vory kstana parameter ev  kasi ardyoq object-y uni tvyal parametery te voch

var myObj = {
    1:'name',
    surname:'azganun'
}

if(myObj.hasOwnProperty('kjk')){
    console.log(true);
}
else{
    console.log(`that properti isn't`);
}

//2. Grel tsragir, vory delet kani Object-i mej eghats 3rd propertien. 

var deleObj = {
    name:'anun',
    mek: 'mek',
    surname:'azganun',
    erku:'erku',
    ereq:'ereq'
}
var count = 0;
for(var key in deleObj){
    count++
    if(count == 3){
        delete  deleObj[key];
    }
    else{
        continue;
    }
    
}
console.log(deleObj)


//3. Grel tsragir, vory kstana Object-i  length-y.

var lengthObj = {
    name:'anun',
    1: 'mek',
    surname:'azganun',
    2:'erku',
    3:'ereq',
    gender: 'male'
}

var newArr = Object.keys(lengthObj);

console.log(newArr.length);

//4. Grel tsragir, vory kkatari tvabanakan gortsoghutyunner Object-i propertieneri het. Object-y petq e katari gortsoghutyun ir method-i mej, ev mek ayl gortsoghutyun, 
//vory petq e avelacnel dzer Objectin, vori mej naev petq e ogtagortsel Object-i mej eghats methody. (ogtagortsel "this" keyword-y).


var mathObj = {
    1: 10,
    2:20,
    3:30,
    result: function(){
        var newArr = Object.keys(mathObj);
        var newArrNumb = [];
        for(var i = 0; i<newArr.length-1; i++){
            var elem = Number(newArr[i]);
            newArrNumb.push(elem) ;
            
        }
        var res = newArrNumb[0]+newArrNumb[1]*newArrNumb[2] ;
    return res;
    
    }
}
mathObj.newFunc = function(){
        return this[1] / (this.result());

}


console.log(mathObj.newFunc());