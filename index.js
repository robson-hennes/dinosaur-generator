require('dotenv').config();
const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');

const api_key = process.env.API_KEY;


app.use(express.static('public'));

app.listen(port, () => {
   console.log(`Servidor escutando em http://localhost:${port}`);
});


app.get('/dinoname', async (request, response) => {

  const fetchApi =  fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
      "method": "GET",
      "headers": {
         "x-rapidapi-key": api_key,
         "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
      }
   });

   const dinoNameResponse = await (await fetchApi).json();
   console.log(dinoNameResponse[0].join(' '));
   response.json(dinoNameResponse[0].join(' '));
   
 
});

app.get('/dinoimage', async (request, response) => {

   const fetchApi =  fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=50", {
      "method": "GET",
      "headers": {
         "x-rapidapi-key": api_key,
         "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
      }
   })
 
    const dinoImageResponse = await (await fetchApi).json();
    console.log(dinoImageResponse);
    response.json(dinoImageResponse);
   
    
  
 });