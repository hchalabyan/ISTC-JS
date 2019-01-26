function showVal(){
    var val = document.getElementsByTagName("input");
    //var res = document.getElementsByTagName("h6");
   var myData = {};
    myData.userId = val[0].value;
    myData.id = val[1].value;
    myData.title = val[2].value;
    myData.body = val[3].value;
    var email = val[3].value;
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
      
    
    if(validateEmail(email)){
        fetch('http://rest.learncode.academy/api/johnbob/friends', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify(myData)
        })
    }
    else{
        return not_valid_mail.innerHTML = "not valid email address"
        //console.log("not valid");
    }
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
      
}




sub_button.addEventListener('click', function(){
    showVal();
}, false)

$(".results-play-video").click(function () {
    $(videoModal).modal('show');
});
