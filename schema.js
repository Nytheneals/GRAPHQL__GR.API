// GRAPHQL DEPENDENCIES
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require("graphql");

// CREATING A GRAPHQL SCHEMA FROM AN XML API USING AXIOS
// API DEPENDENCIES
// const util = require("util");
// const parseString = require("xml2js").parseString;
// const axios = require("axios");

// const secretId = "Cggap3UjkMks4rnmo4bA";
// const id = 18541;
// GETTING DATA FROM THE GOOD READS API
// const apiUrl = ` https://www.goodreads.com/author/show.xml?key=${secretId}&id=${id}`;
// const x = axios
//   .get(apiUrl)
//   .then(response => {
//     const xml = response.data;
//     parseString(xml, function(err, result) {
//       return result;
//     });
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// CREATING THE AUTHOR OBJECT

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "...", // THIS IS THE NAME OF THE OBJECT OR ENTRY POINT
  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
});

// CREATING THE GRAPHQL SCHEMA
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    description: "...",

    fields: () => ({
      author: {
        type: AuthorType,
        args: {
          id: { type: GraphQLInt }
        }
      }
    })
  })
});
