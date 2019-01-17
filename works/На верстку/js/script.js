function showVal(){
    var val = document.getElementsByTagName("input");
    var res = document.getElementsByTagName("h6");
   
    for (var i = 0; i < val.length; i++){
        console.log(val[i].value);
        res[i].innerHTML = val[i].value;
    }

}

sub_button.addEventListener('click', function(){
    showVal();
}, false)

