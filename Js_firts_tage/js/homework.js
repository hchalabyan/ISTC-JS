// task 1

        
            var username = prompt('who you are?','');
            
            if(username == "admin"){
                alert('please enter')
            }
            else if(username == null){
                alert('cancel')
            }
            else{
                alert("you can't enter")
            } 
       

        // task 2

         
            var a = 5;
            var b = 10;

            if(a>b){
                alert(a)
            }
            else if(a!=b){
                alert(b)
            }
            else{
                alert(a+b)
            }

       


        // task 3

        
            var userName = prompt("enter your name", '');
            var age = prompt("enter your age", '');

            if(userName == "admin" && age >= 18){
                alert('you can enter')
            }
            else{
                alert("wrang username or age")
            } 
       

        // task 4

        
            var userName = prompt("enter your name", '');
            

            if(userName == "red" ||  userName == "blue"){
                alert('you can enter')
            }
            else{
                alert("wrang username or age")
            } 
        


         //task 5

         var sum = 1+100*5;

         console.log(sum);
 
         var sum2 = (1+100)*5;
         console.log(sum2);
 
 
         //task 6
 
         
         
             var people = {
                 tariq: 30
             }
 
             if(people.tariq >= 18){
                 alert('you can enter');
             }
             else{
                 alert('you cannnot enter')
             }
 
        