
fetch('https://jsonplaceholder.typicode.com/todos'
    ).then(response => response.json())
    .then(data => {
        for(let i =0; i< 5; i++){
            for(key in  data[i]){
                console.log(data[i][key])
            }
            
        }
    })
    
    
      .catch(error => console.log(error) 
);