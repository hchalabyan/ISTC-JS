// hashvel dzaynavornery
        
function letters(myString){
    var letterObj = {
    1:'a',
    2:'e',
    3:'i',
    4:'o',
    5:'u'
}
    var arr = myString.split("");
    
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
       var elem = arr[i].toLowerCase();
        for(var key in letterObj){
            
            if(elem == letterObj[key]){
                sum = sum + 1;
            }
        }
    }
    console.log(sum);
}
letters("jaaaAdi")