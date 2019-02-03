function addToDoLIst(){
    var arrList = [];

    var addList = document.getElementById("addList");
    var addListVal = addList.value;

    arrList.push(addListVal);

// list_row div
    var newList = document.createElement("div");

    newList.classList.add("list_row");
// add items firts
    main_content.insertBefore(newList, main_content.childNodes[0]);

// todo div
    var toDo = document.createElement("div");
    toDo.classList.add("toDo");
   
// Add to do list content

    var list_content = document.createElement("p")
    list_content.classList.add("list_content");
    var textnode = document.createTextNode(addListVal);
    list_content.appendChild(textnode);

// Add delete div and Add icon

    addDeleteDiv = document.createElement("div");
    addDeleteDiv.classList.add("delete");
    newList.appendChild(toDo);
    newList.appendChild(addDeleteDiv);
    toDo.appendChild(list_content); 

    

}
addButton.addEventListener('click', function(){
    addToDoLIst();
}, false)

document.getElementById("main_content").addEventListener("click",function(e) {
    // e.target was the clicked element
  if (e.target && e.target.matches("div.list_row div.toDo p.list_content")) {
        var changedStyle = e.target;
        changedStyle.style.color = "red";
        changedStyle.style.textDecoration="line-through" ;
        var movedToBottomElem = changedStyle.parentElement.parentElement;
        main_content.appendChild(movedToBottomElem);
        console.log();    
    }
}); 
