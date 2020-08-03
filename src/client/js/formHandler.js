function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    

    if(formText.length==' '){
    
    console.log("you should enter text");
    
    alert ("you should enter a text");
    }
    else
    {
        Client.acknowledge(formText); 
    }

}

export {handleSubmit};


