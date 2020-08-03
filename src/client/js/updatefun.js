
//update text and print it 

const text=document.querySelector('#user_text');

const polarity=document.querySelector('#polarity');

const subjectivity=document.querySelector('#subjectivity');

const polarity_confidence=document.querySelector('#polarity_confidence');

const subjectivity_confidence=document.querySelector('#subjectivity_confidence');



export function updatefun(data){

    text.innerHTML= `<span>text:${data.text}</span>`;
    
 polarity.innerHTML= `<span>polarity:${data.polarity}</span>`;
 
   subjectivity.innerHTML= `<span>subjectivity:${data.subjectivity}</span>`;
  
   polarity_confidence.innerHTML= `<span>polarity_confidence:${data.polarity_confidence}</span>`;

   subjectivity_confidence.innerHTML= `<span>subjectivity_confidence:${data.subjectivity_confidence}</span>`;

    


}