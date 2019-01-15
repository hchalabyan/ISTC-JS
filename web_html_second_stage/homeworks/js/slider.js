var imgArray = [
    'img/slider/blur-close.jpg',
    'img/slider/codding.jpeg', 
    'img/slider/code-coding.jpg',
    'img/slider/coffee-flower.jpg',
    'img/slider/coffee_more.jpeg',
    'img/slider/motivation.jpeg',
    'img/slider/pexels.jpeg',
    'img/slider/team_hands.jpeg'
];
var step = 3;
var count = 0;
var main = document.getElementsByClassName('main')[0];
var sliderElements = [];

for(var i = 0; i < step; i++){
    var element = document.createElement('div');
    element.className = 'slider_container';
    element.style.backgroundImage = imgArray[i]? "url("+imgArray[i]+")": 'none';
    element.style.width = 100 / step + '%';
    main.appendChild(element);
    sliderElements.push(element);
    console.log(sliderElements);
}


function right(arr){
    count += step;    
    if(count > arr.length-1){
        count = 0; 
    }
    console.log(count)
    slide(arr);
}

function left(arr){
    count -= step;    
    if(count < 0){
        count = ((arr.length % step) == 0) ? arr.length - step : arr.length - ((arr.length) % step);
    }
    console.log(count)
    slide(arr);     
}

function slide(arr){
    for(var i = 0; i < step; i++){
        sliderElements[i].style.backgroundImage = arr[count + i]? "url("+arr[count + i]+")": 'none';
    }
}

document.getElementById("rightSlide").addEventListener("click", function() {
    right(imgArray);
}, false);

document.getElementById("leftSlide").addEventListener("click", function() {
    left(imgArray);
}, false); 





 



