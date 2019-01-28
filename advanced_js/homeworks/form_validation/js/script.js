function showVal(){
    var val = document.getElementsByTagName("input");
   var myData = {};
    myData.name = val[0].value;
    myData.email = val[1].value;
    myData.pass = val[2].value;
    myData.confpass = val[3].value;

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      
      function validate() {
        var email = val[1].value;
      
        if (validateEmail(email) && myData.pass===myData.confpass) {
            fetch('http://rest.learncode.academy/api/johnbob/friends', {
                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: 'POST',
                body: JSON.stringify(myData)
            })
        }
        else if(!(validateEmail(email)) && myData.pass!==myData.confpass){
            notValid_email.innerHTML = "not valid mail";
            val[1].style.borderColor = "red";
            notEqual_pass.innerHTML = "Pass doesnt equal";
            val[3].style.borderColor = "red";

        }
         else if(!(validateEmail(email))){
            notValid_email.innerHTML = "not valid mail";
            val[1].style.borderColor = "red";

        }
        else if(myData.pass!==myData.confpass){
            notEqual_pass.innerHTML = "Pass doesnt equal";
            val[3].style.borderColor = "red";
        }
        else{
            val[2].style.borderColor = "green";
            val[3].style.borderColor = "green";
        }
        return false;
      }
    
    validate();
}
function passW(){
    var val = document.getElementsByTagName("input");
    var myData = {};
     myData.name = val[0].value;
     myData.email = val[1].value;
     myData.pass = val[2].value;
     myData.confpass = val[3].value;
    if(myData.pass!==myData.confpass ){
        val[2].style.borderColor = "red";
        val[3].style.borderColor = "red";
    }
    else if(myData.pass=="" || myData.confpass == ""){
        val[2].style.borderColor = "#5F7BA2";
        val[3].style.borderColor = "#5F7BA2";
    }
    else{
        val[2].style.borderColor = "#0d4724";
        val[3].style.borderColor = "#0d4724";
    }
}
passW();
sub_button.addEventListener('click', function(){
    showVal();
}, false)

// Login function  ////////////////////////

function login(){
    var inpData = document.getElementsByClassName("login_inp");
    var userData = '{"username":"Ripa", "pass":456}'

    var userInfo = JSON.parse(userData);

    if(inpData[0].value.toLowerCase()==userInfo.username.toLowerCase() && inpData[1].value==userInfo.pass){
        alert('you are welcome')
    }
    else{
        wrong_log.innerHTML = "Wrong username or password"
    }

    //console.log()

}


log_button.addEventListener('click', function(){
    login();
}, false)

//End Login function  ////////////////////////



// // // // // //  Add or remove active class    // // // // // //


function activeClass(e) {
    var elems = document.querySelector(".active");
   
    if(elems !==null){
        elems.classList.remove("active");
        
    }
    e.target.className = "active";
   
}
var sign = document.getElementById("signIn");
var log = document.getElementById("login");
function remoteSign(){
    sign.style.display = "flex";
    log.style.display = "none";
}
function remotLogin(){
    sign.style.display = "none";
    log.style.display = "flex";
}
remotLogin();
remoteSign();




// // // // // //End  Add or remove active class    // // // // // //










/////////  http requst by AJAX  //////////





// var myJSdata =  JSON.stringify( myData );
    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //        console.log(this.responseText);
            
    //     }
    // };
    // xhttp.open("POST", 'http://rest.learncode.academy/api/johnbob/friends', true);
    // xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.send(myJSdata);


    // fetch('http://rest.learncode.academy/api/johnbob/friends', {
    //     headers: { "Content-Type": "application/json; charset=utf-8" },
    //     method: 'POST',
    //     body: JSON.stringify(myData)
    // }).then(function(response) {
    //     if (val[0].value!=="red") {
    //       throw first_name.innerHTML = "not red";
    //     }
    //     console.log(response.json());
    //     // Read the response as json.
    //   })
    //   .catch(function(error) {
    //     console.log('Looks like there was a problem: \n', error);
    //   });