// CREATING A GRAPHQL SCHEMA FROM AN XML API

const axios = require("axios");
// const fetch = require('node-fetch');

const secretId = "Cggap3UjkMks4rnmo4bA";
const id = 4432;
// GETTING DATA FROM THE GOOD READS API
const apiUrl = ` https://www.goodreads.com/author/show.xml?key=${secretId}&id=18541`;
const x = axios
  .get(apiUrl)
  .then(response => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch(function(err) {
    console.log(err);
  });
