        // 1-100 tveri amenapoqr bazmapatiky
        
        for(var i = 1; i<10; i++){
            console.log(i*2);
        } 
   


    
        for(var i = 1; i<=100; i++){
        if(i%5 == 0){
            continue;
        }
        if(i%6 == 0){
            var y = i+2;
        }
        console.log(y);
        } 
   

   // undifined - nshanakum e kodum haytararvac e bayc arjeq chuni,
   // not difined - nshanakvum e yndhanrapes goyutyun chuni kodum


   //functions
    // function declaration
   function product(param1, param2){
       return param1*param2;
   }
   console.log(product(2,5));
   console.log(product(2,5));
   console.log(product(2,5));


   // function expration 
   var product = function(param1, param2){
        return 3*6
   }

   console.log(product());

    function multiply(number1, number2 =6){
       return number1*number2;
   }
   console.log(multiply(2));


   var x = 5;

   function myFunc(){
       var y = 8;
       return y;
   }

   

   // inqnakanchvox function (self-invoked)
   (function myFunc(){
       alert(3+6);
   })();


   //gtnel voreve mijakayqum tveri gumary achman ev nvazman kargov

   function sum(param1, param2){
       
       var sum = 0;
       var sum1 = 0;
       for(var i = param1; i<=param2; i++){
           sum = sum+i;
       }
       console.log(sum);

       
        for(var i = param2; i>=param1; i--){
           sum1 = sum1+i;
       }
         console.log(sum1);  


        var newValue = param2;
        while(newValue>=param1 && newValue<=param2){
           sum1 = sum1 + newValue;
           newValue--;
        }
       console.log(sum1);

    }

   sum(1,5);


   // poxancel objectin tvyalner

   function people(gender, name, age){
       var objPerson = {
           personGender:gender,
           personName: name,
           personAge: age 
       }

       return objPerson;

   }

   console.log(people('women', 'Hripsime', 28));
