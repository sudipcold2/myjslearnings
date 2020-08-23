const http = new EasyHTTP;

http.get("https://jsonplaceholder.typicode.com/posts", function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log(response);
    }    
});

// const data = {
//     title : 'Custom post',
//     body  : 'This is a custom post'
// };

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, response){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(response);
//     }   
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, response){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(response);
//     }   
// });

// http.delete("https://jsonplaceholder.typicode.com/posts/1", function(error, response){
//     if(error){
//         console.log(error);
//     }else{
//         console.log(response);
//     }    
// });