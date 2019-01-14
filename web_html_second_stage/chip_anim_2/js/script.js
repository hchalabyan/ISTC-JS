    var topPart = document.getElementById('top_part');
 
    var elem_group_1 = document.getElementsByClassName("chips_left");
    var elem_group_2 = document.getElementsByClassName("chips_right");
    var clearButton = document.getElementById("clear_button");
    var timer = document.getElementById('timer');
    var undoButton = document.getElementById('undo_button');
    var chipsPart = document.getElementById("chips_part");
    var toolsPart = document.getElementById("tools_part");
    var chipsContent = document.getElementById("chips_content");
    var chipsPartWidth =eval((chipsPart.offsetWidth/window.innerWidth)*100);
    var toolsPartWidth = toolsPart.offsetWidth;
    console.log(chipsPartWidth);
    var chipsContentWidth = chipsContent.offsetWidth;

    var topPartWidth = eval((topPart.offsetWidth/window.innerWidth)*100);
    var topPartBottom = eval(-(window.innerHeight-topPart.offsetHeight)/2+10);
   
    var arrow = document.getElementById('arrow');

   // var toolsPartBottom = -toolsPart.offsetHeight;
    var toolsPartBottom = -topPartBottom;
    var arrowBottom =eval((topPart.offsetHeight/2+ arrow.offsetHeight)-5);
    console.log(chipsPart.offsetHeight)
    var status = true;
    if(status){
        function topToBottom(){

            chips_10.style.width = "50%";
            clearButton.style.left = "-26%";
            clear_button.style.width = "15%";
            undo_button.style.width = "15%";
            undoButton.style.left = "26%";
            timer.style.width = "15%";
           
            toolsPart.style.bottom = toolsPartBottom+"px"; 
           
            topPart.style.width = topPartWidth*2 + "%";
            topPart.style.bottom = topPartBottom+"px";
            arrow.style.transform = "rotateX(-180deg)";
            arrow.style.bottom = arrowBottom+"px";
            for(var i =0; i<elem_group_1.length; i++){
                elem_group_1[i].style.left = "-4%";
                elem_group_1[i].style.width = "9%";
            }
            for(var i =0; i<elem_group_2.length; i++){
                elem_group_2[i].style.left = "4%";
                elem_group_2[i].style.width = "9%";
            }  
        };
        status = false 
    }
 
topPart.addEventListener("click", function() {
    topToBottom();
}, false);

