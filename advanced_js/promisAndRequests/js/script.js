var myData = document.getElementById("myData");
fetch('https://jsonplaceholder.typicode.com/todos'
    ).then(response => response.json())
    .then(data => {
        for(var i =0; i< 5; i++){
            li = document.createElement("li");
            for(key in data[i]){
                li.innerHTML += data[i][key];
                myData.appendChild(li);
                console.log(data[i][key])
            }
            
        }
        
    })
    
    
      .catch(error => console.log(error) 
);