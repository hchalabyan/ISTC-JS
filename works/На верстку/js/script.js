function showVal(){
    var val = document.getElementsByTagName("input");
    //var res = document.getElementsByTagName("h6");
   var myData = {

} 
    /* for (var i = 0; i < val.length; i++){
        console.log(val[i].value);
         res[i].innerHTML = val[i].value; 
    } */

    myData["userId"] = val[0].value;
    myData["id"] = val[1].value;
    myData["title"] = val[2].value;
    myData["body"] = val[3].value;
    
    //console.log( JSON.stringify( myData ));
    var myJSdata =  JSON.stringify( myData );
    console.log(myJSdata)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("fruits").innerHTML = this.responseText;
            
        }
    };
    xhttp.open("POST", "https://my-json-server.typicode.com/typicode/demo/posts", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(myJSdata);
}


sub_button.addEventListener('click', function(){
    showVal();
}, false)

