var imgArray = ['img/slider/blur-close.jpg','img/slider/codding.jpeg', 'img/slider/code-coding.jpg','img/slider/coffee-flower.jpg','img/slider/coffee_more.jpeg','img/slider/motivation.jpeg','img/slider/pexels.jpeg','img/slider/team_hands.jpeg',];

/* function slider(){
    var elem = document.getElementsByClassName('slider_container');
    
    for(var i = 0; i<imgArray.length; i++){   
        var imgSrc_one = "url("+imgArray[i]+")"
        elem[0].style.backgroundImage = imgSrc_one;
        imgSrc_two = "url("+imgArray[i+1]+")"
        elem[1].style.backgroundImage = imgSrc_two;
        imgSrc_three = "url("+imgArray[i+2]+")"
        elem[2].style.backgroundImage = imgSrc_three;
    }
}
slider(); */

var innerArray = [];
var gloabalArray=[];
var elem = document.getElementsByClassName('slider_container');
var start = 0;
var step = 3;
while(start<imgArray.length){
    innerArray = [];
    if(imgArray[start]!=null){
        var elem = imgArray.splice(start,3);
        innerArray.push(elem);
        gloabalArray.push(innerArray);
        elem = [];
    } 
     
  
}  
console.log(gloabalArray)   

 



