//Task 1. Grel function, vory concatenacia kani trvats stringy n angam (default 1 angam).


    var str = 'i am a programmer ';

    var newStr = str.repeat(3);

    console.log(newStr);


//Task 2. Grel tsragir, vory kstugi arrayum eghats elementnery, ev ete elemeny array e, kveradardzni nor arrayi mej.
    var checkArr = [2,4,["string", 6,8], "hello",7,[4, 9, "name"], -2, 14,-6];
    var newcheckArr2 = [];
    //tarberak 1
    
    var newArr = checkArr.filter((value) => {
        var newCheckArr = []; 
        if(Array.isArray(value)){
           return newCheckArr.push(value);
        }
        
    })
    console.log(newArr);

    //tarberak 2

    for(var i = 0; i<checkArr.length; i++){
        var elem = checkArr[i];
        if(Array.isArray(elem)){
           newcheckArr2.push(elem);
        }
    }
    console.log(newcheckArr2)

    //Task 3. Grel function, vory kstana string, ev kstugi ardyoq ayn Palindrome e te voch.

    function palindrome(str){
        var arrStr = str.split('');
       
        var reverseArr = arrStr.reverse().join('');
      

        if(str.toLowerCase() === reverseArr.toLowerCase()){
            return (str + ' is Palindrome')
        }
        else{
            return (str + ' is not Palindrome')
        }
    }

    console.log(palindrome('moM'));



