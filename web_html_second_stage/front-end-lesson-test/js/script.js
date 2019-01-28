var services = document.getElementById("services_block");

var elem = document.createElement("div");

//services.appendChild(elem);

for(var i =0; i<4; i++){
   elem = document.createElement("div");
   elem.classList.add("services_elemnt");
   elem.classList.add("services_elemnt" + [i]);
   services.appendChild(elem);

}

var imgArr = [
    'img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg','img/image4.jpg','img/image5.jpg','img/image6.jpg','img/image7.jpg','img/image8.jpg'
]

for(var i =0; i<imgArr.length/2; i++){
    portfolioElem = document.createElement("div");
    portfolioElem.classList.add("portfolio_elemnt");
    portfolioElem.classList.add("portfolio_elemnt" + [i]);
    portfolioElem.style.backgroundImage = "url("+imgArr[i]+")";
    portfolio_block1.appendChild(portfolioElem);
 }

 for(var i =4; i<imgArr.length; i++){
    portfolioElem = document.createElement("div");
    portfolioElem.classList.add("portfolio_elemnt");
    portfolioElem.classList.add("portfolio_elemnt" + [i]);
    portfolioElem.style.backgroundImage = "url("+imgArr[i]+")";
    portfolio_block2.appendChild(portfolioElem);
 }


 // // // //  collaps menu   // // // //
 var mobileMenu = document.getElementById("mobile_menu");

 var cond = true;
 
 var menuItemsList = document.getElementsByClassName("menu_items_list");
 
 function openMenu(){
     
     if(cond){
         
         menuItemsList[0].style.maxHeight = "140px";
         
         cond = false;
     }
     else{
         menuItemsList[0].style.maxHeight = 0;
         cond = true;
     }  
 }
 
 mobileMenu.addEventListener('click', function(){
     openMenu();
 }, false)
 

  // // // // end collaps menu   // // // //
