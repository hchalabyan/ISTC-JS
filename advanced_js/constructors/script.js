function Person(name, surname, nationality){
    this.name = name;
    this.surname  = surname;
    this.nationality = nationality;
    this.nation = function(){
        console.log("this person is" + " " + this.name + " " + this.surname + " " + this.nationality);
    }
}
function Franch (name, surname, nationality, color){
    Person.call(this, name, surname, nationality);
    this.color = color;
}


var franch1 = new Franch('Frank', 'Muller', 'Franch', 'black');
var hay = new Franch('Hayk', 'Petrosyan', 'Franch', 'White');
franch1.nation();
hay.nation();
console.log(franch1)
console.log(hay)
