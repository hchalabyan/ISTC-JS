    var topPart = document.getElementById('top_part');
 
    var elem_group_1 = document.getElementsByClassName("chips_left");
    var elem_group_2 = document.getElementsByClassName("chips_right");

    var clearButton = document.getElementById("clear_button");
    var timer = document.getElementById('timer');
    var undoButton = document.getElementById('undo_button');

    var toolsPart = document.getElementById("tools_part");
    var chipsContent = document.getElementById("chips_content");
    

    var topPartWidth = eval((topPart.offsetWidth/window.innerWidth)*100);
    var topPartBottom = eval(-(window.innerHeight-topPart.offsetHeight)/2+15);
   
    var arrow = document.getElementById('arrow');
    var toolsPartBottom = eval(-((chipsContent.offsetHeight-toolsPart.offsetHeight)/2+toolsPart.offsetHeight))
    
    
    var arrowBottom = eval(chipsContent.offsetHeight+arrow.offsetHeight);
    
    var val = true;
    count = 0;
        function topToBottom(){
            count++
            if(val){
            chips_10.style.width = "50%";
            clearButton.style.left = "-25%";
            clear_button.style.width = "17%";
            undo_button.style.width = "17%";
            undoButton.style.left = "25%";
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
            val = false;
           
        }
        else {
            chips_10.style.width = "100%";
            clearButton.style.left = 0;
            clear_button.style.width = "90%";
            undo_button.style.width = "90%";
            undoButton.style.left = 0;
            timer.style.width = "35%";
           
            toolsPart.style.bottom = 0; 
           
            topPart.style.width = topPartWidth+ "%";
            topPart.style.bottom = 0;
            arrow.style.transform = "rotateX(360deg)";
            arrow.style.bottom = 0;
            for(var i =0; i<elem_group_1.length; i++){
                elem_group_1[i].style.left = 0;
                elem_group_1[i].style.width = "15%";
            }
            for(var i =0; i<elem_group_2.length; i++){
                elem_group_2[i].style.left = 0;
                elem_group_2[i].style.width = "15%";
            }  
            val = true; 
        }  
    }
    
    topPart.addEventListener("click", function() {
        topToBottom();
    },false);

