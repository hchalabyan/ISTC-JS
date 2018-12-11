var newProp = 1;
var obj = {
    1:'Hripsime',
    '2': "chalabyan"
}
for(var key in obj){
    if(typeof newProp === typeof key){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

var person = {
    surname: 'chalabyan',
    0: "Ripa",
    1: 2018,
    age: 28
};

// ete keyer en tiv en ays paragayum kanchum enq []-ov

person.count = function(){
    return (this[1]- this.age);
}
person.info = function(){
    return 'yoor name is' + ' ' + this[0] + ' '+ 'and' + ' your surname is' + ' ' + this.surname
}
console.log(person.count());
console.log(person[0]);
console.log(person.info())


// object methods 

var x = {
    name: 'uuu',
    age: 10
}

console.log(Object.values(x));

console.log(Object.keys(x));