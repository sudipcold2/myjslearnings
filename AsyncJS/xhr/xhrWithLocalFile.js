document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'data.txt', true);

    //console.log('Ready state :', xhr.readyState);


    //optional - used for spinners/loaders
    xhr.onprogress = function(){
        console.log('Ready state :', xhr.readyState);
    }

    xhr.onload = function(){
        //console.log('Ready state :', xhr.readyState);
        if(this.status === 200){
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = 
            `<h2>${this.responseText}</h2>`;
        }
    }

    // xhr.onreadystatechange = function(){
    //     console.log('Ready state :', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log('request error !!');
    }

    xhr.send();
}

//ready state values
/*
    0 : request not initialized
    1 : server connection established
    2 : request received
    3 : processing request
    4: request finished and response is ready
*/