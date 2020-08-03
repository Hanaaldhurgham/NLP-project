let projectData= {};

var path = require('path')

const express = require('express')

const app = express()


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());


//initialize the main project folder
app.use(express.static('dist'))

var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();
console.log(__dirname)


// You could call it aylienapi, or anything else
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
   
})

// which port the app will listen to for incoming requests
app.listen(8094, function () {
    console.log('Example app listening on port 8094!')
  
    console.log(`Your API key is ${process.env.API_KEY}`);
})
app.post('/acknowledge',getText);

   function getText(req,res){
     
    textapi.sentiment({

   
       text: `${req.body.value}`,
   },

         function(error, response) {
            
            if (error === null) {
              res.send(response) 
            }


            else{
                res.send(error);
                console.log(error);
            }
        }

    )

}
