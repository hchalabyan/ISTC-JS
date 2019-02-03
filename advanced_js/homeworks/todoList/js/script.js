function addToDoLIst(){
    var addList = document.getElementById("addList");
    var addListVal = addList.value;
// list_row div
    var newList = document.createElement("div");

    newList.classList.add("list_row");
    main_content.appendChild(newList);

// todo div
    var toDo = document.createElement("div");
    toDo.classList.add("toDo");

//  Add to checked icon

   
// Add to do list content

    var list_content = document.createElement("p")
    list_content.classList.add("list_content");
    list_content.innerHTML = addListVal;

// Add delete div and Add icon

    addDeleteDiv = document.createElement("div");
    addDeleteDiv.classList.add("delete");

   
    newList.appendChild(toDo);
    newList.appendChild(addDeleteDiv);
    toDo.appendChild(list_content);


    console.log(addListVal);


}
addButton.addEventListener('click', function(){
    addToDoLIst();
}, false)


