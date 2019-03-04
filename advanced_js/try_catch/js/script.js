function addUserInfo(){
    var userVal = inputNumber.value;
    try {
    
        if(userVal == ""){
            throw 'input is empty';
        }
        if(userVal>10){
            throw 'the number is > 10'
        }
        if(userVal<10){
            throw 'the number is <10'
        }
       if(typeof userVal == "string") throw "please insert a number"
    } catch (error) {
        result.innerHTML = error;
        //console.log("Error.userVal")
    }
    finally{
      document.getElementById("inputNumber").value = "";
    }


}


clickButton.addEventListener('click', function(){
    addUserInfo();
}, false)
