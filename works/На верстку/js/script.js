function showVal(){
    var val = document.getElementsByTagName("input");
    var res = document.getElementsByTagName("h5");
    /* result[0].innerHTML = val[0].value;
    result[1].innerHTML = val[1].value;
    result[2].innerHTML = val[2].value;
    result[3].innerHTML = val[3].value; */
   

    /* count = 0;
    while(count<val.lenght){
        debugger
        result[count].innerHTML = val[count].value;
        count = count + 1;
    } */

    inp_val0.innerHTML = val[0].value;
    inp_val1.innerHTML = val[1].value;
    inp_val2.innerHTML = val[2].value;
    inp_val3.innerHTML = val[3].value; 
}

sub_button.addEventListener('click', function(){
    showVal();
}, false)

