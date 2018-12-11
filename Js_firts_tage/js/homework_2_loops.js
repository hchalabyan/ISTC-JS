  // 0-100 mij ynkac zuyg tver

        
        for(var i = 1; i<100; i++){
            if(i%2 == 0){
                console.log(i)
            }
        } 
       


        // 0-100 mij 3i 4i baj tvery


        
            for(var i =0; i<100; i++){
                if(i%3==0 || i%4==0){
                    console.log(i)
                }
            } 
       

        //0-10 tveri mij ynkac  tvery bazmapatikneri gumary
        
        
            var y = 9;
            var sum = 0;

            while(y>0){
            for(var i =1 ; i<10; i++){
                if(y%i == 0){
                    sum = sum + y;
                    console.log(y)
                }
            }
                y--
            }
            console.log(sum)
       

        // 0-100 mij ynkac zuyg tveri gumary

         
            var sum = 0;
            for(var i = 0; i<100; i++){
                if(i%2 == 0){
                    sum = sum+i
                }
            }
            console.log(sum)
            
       