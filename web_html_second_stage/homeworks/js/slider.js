var imgArray = ['img/slider/blur-close.jpg','img/slider/codding.jpeg', 'img/slider/code-coding.jpg','img/slider/coffee-flower.jpg','img/slider/coffee_more.jpeg','img/slider/motivation.jpeg','img/slider/pexels.jpeg','img/slider/team_hands.jpeg',];
var innerArray = [];
var gloabalArray=[];
var start = 0;
var step = 3;
while(start<imgArray.length){
    innerArray = [];
    if(imgArray[start]!=null){
        var innerArray = imgArray.splice(start,3);
        gloabalArray.push(innerArray);
    } 
}  
console.log(gloabalArray)
var element = document.getElementsByClassName('slider_container');
    var imgSrc_one = "url("+gloabalArray[0][0]+")";
    var imgSrc_two = "url("+gloabalArray[0][1]+")";
    var imgSrc_three = "url("+gloabalArray[0][2]+")";
    element[0].style.backgroundImage = imgSrc_one;
    element[1].style.backgroundImage = imgSrc_two;
    element[2].style.backgroundImage = imgSrc_three; 

var countPlus = 1;

function right(arr){
    console.log(arr[countPlus]);

            var imgSrc_one = "url("+arr[countPlus][0]+")";
            var imgSrc_two = "url("+arr[countPlus][1]+")";
            var imgSrc_three = "url("+arr[countPlus][2]+")";    
            element[0].style.backgroundImage = imgSrc_one;
            element[1].style.backgroundImage = imgSrc_two;
            element[2].style.backgroundImage = imgSrc_three;
        
    if(arr[countPlus]!=arr[arr.length-1]){
        countPlus++ 
    }
    else{
        countPlus = 0;
    }
    //console.log(arr[countPlus]) ;         
}
var countMinus = gloabalArray.length-1;
function left(arr){
    console.log(arr[countMinus])
    var imgSrc_one = "url("+arr[countMinus][0]+")";
    var imgSrc_two = "url("+arr[countMinus][1]+")";
    var imgSrc_three = "url("+arr[countMinus][2]+")";    
    element[0].style.backgroundImage = imgSrc_one;
    element[1].style.backgroundImage = imgSrc_two;
    element[2].style.backgroundImage = imgSrc_three;
    if(arr[0]!=arr[countMinus]){
       countMinus--
    }
    else{
        countMinus = arr.length-1;
    }         
}

document.getElementById("rightSlide").addEventListener("click", function() {
    right(gloabalArray);
}, false);
document.getElementById("leftSlide").addEventListener("click", function() {
    left(gloabalArray);
}, false); 





 



