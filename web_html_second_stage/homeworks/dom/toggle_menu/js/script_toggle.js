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



