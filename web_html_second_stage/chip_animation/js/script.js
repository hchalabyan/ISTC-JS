 window.onload = function() {
    var elem_group_1 = document.getElementsByClassName("chips_lef");
    for(var i =0; i<elem_group_1.length; i++){
        elem_group_1[i].style.bottom = "-44vh";
        elem_group_1[i].style.left = "-5%";
    } 
    var elem_group_2 = document.getElementsByClassName("chips_right");
    for(var i =0; i<elem_group_2.length; i++){
        elem_group_2[i].style.bottom = "-44vh";
        elem_group_2[i].style.left = "8%";
    } 
};   