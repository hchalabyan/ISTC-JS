//Task 1. 
        //Grel function, vory kstana array vorpes parameter, ev kamayakan tiv. 
        //Poxancelov “kamayakan tiv” , Function-y petq e veradardzni arajin “kamayakan tvov” elementnery.

        var arr_firts = [1,2,3,4,5,'l','o'];
        var new_arr_firts = [];

        function randomArr(arr_firts, num){
            for(var i = 0; i<arr_firts.length; i++){
                if(i<num){
                    var elem = arr_firts[i];
                    new_arr_firts.push(elem);
                }
                else{
                    break;
                }
                  
            }
            return new_arr_firts
        }

        console.log(randomArr(arr_firts, 2));


        //Task 2. 
        //Grel tsragir, vory kgtni array-i mej eghats amenahachakh krknvogh elementy. Veradardznel qanaky.
        var arr_second = [7, 'a', 'a', 'a', 2, 7, 'a', 7, 'a', 2, 4, 9, 7];

        function reapitElem(arr_second){
            var text_arr_second = [];

            var number_arr_second = [];

            for(var i=0; i<arr_second.length; i++){
                if(typeof arr_second[i]== 'number'){
                    number_arr_second.push(arr_second[i]);
                }
                else{
                    text_arr_second.push(arr_second[i])
                }
            
            }
            var sort_number_arr_second = number_arr_second.sort((a,b)=>a-b);
            var sort_text_arr_second = text_arr_second.sort((a,b)=>a-b);
            var all_arr = sort_number_arr_second.concat(sort_text_arr_second)
            var count = 0;
            var start = all_arr[0];
            var j = 0;
            var coun_arr = [];
            var count_elem;

            while (j<=all_arr.length) {
                if(start == all_arr[j]){
                    count++
                    j++
                }
                else{
                    count_elem = start;
                    coun_arr.push(count);
                    start = all_arr[j];
                    count = 0;
                }
            }
            
            var sort_count =  coun_arr.sort((a,b)=>a-b);

            var last_elem = sort_count.pop()
            console.log('krknvox elementy` ' + count_elem, ', ' + 'krknvox elementi qanaky` ' + last_elem)
           

        }
            reapitElem(arr_second)



            //Task 3.
            //Grel tsragir, vory kgumari ev kbazmapatki array-um eghats integernery. 
            
            var arr_thirth = [3,2.3,4.2,6,8,2,5];
            var int_count = 0;
            var int_multy = 1;

            for(var i = 0; i<arr_thirth.length; i++){
                if(Number.isInteger(arr_thirth[i])){
                    int_count = int_count+arr_thirth[i];
                    int_multy = int_multy*arr_thirth[i];
                }
            }

            console.log('gumary =' + int_count, 'artadryaly =' + int_multy);


            //Task 4. 
            //Grel tsragir, vory kjnji arrayum krknvogh elementnery ev kveradardzni sortavorvats.
            //Arrayum petq e linen miayn numberner

            var arr_forth =  [7, 'a', 'a', 'a', 2, 7, 'a', 7, 'a', 2, 4, 9, 7];

            var arr_forth_unic = [];

            for(var i = 0; i<arr_forth.length; i++){
                var elem_unic = arr_forth[i]
                if(arr_forth_unic.indexOf(elem_unic) == -1 ){
                    arr_forth_unic.push(elem_unic)
                }
                else{
                    continue
                }
            }

            console.log(arr_forth_unic);


            //Task 5. 
            //Grel tsragir, vory kveradasavori array-@ random dzevov.  
                       

            var arr_fifth =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            
            var suffle = [];

            for(var i=0; i < arr_fifth.length; i++){
                suffle.push(Math.floor((Math.random() * arr_fifth.length)))
            }

            console.log(suffle);