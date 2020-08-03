 //send the text to server and fetch data from SDK 
 async function acknowledge(text={}){
    const response = await fetch('http://localhost:8094/acknowledge', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json',
        },   
       body: JSON.stringify({value:text}),
       });

   
    try {

       const newData = await response.json();
       console.log(newData)
       Client.updatefun(newData);
    }
    catch(error){
    
       console.log("error",error);
    }

}
export {acknowledge};