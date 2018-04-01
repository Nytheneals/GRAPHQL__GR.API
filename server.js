// import express from "express";
const express = require("express");
const graphqlHTTP = require("express-graphql");

// SCHEMA IMPORT
const schema = require("./schema");

// INITIALIZING SERVER
const app = express();

// GRAPHQLHTTP FUNCTION FROM EXPRESS-GRAPHQL IS MIDDLEWARE
// THAT HELPS EXPRESS UNDERSATND AND INTERACT WITH GRAPHQL.
// WE SET IT UP AS MIDDLEWARE, SO WHEN A REQUEST IS MADE TO /GRAPHQL ,
// THE MIDDLEWARE TAKES ON THE HEAVY WORK OF INTERPRETING GRAPHQL
// IT TAKES IN AN OBJECT WITH THE SCHEMA OF THE GRAPH OF OUR DATA.

//********GRAPH QL SERVER********//
app.use(
  "/graphql",
  graphqlHTTP({
    schema
  })
);
// LISTENING TO OUR SERVER FOR ANY CHANGES OR REQUESTS
app.listen(3000, () => {
  console.log("Now listening for request on port 3000");
});
