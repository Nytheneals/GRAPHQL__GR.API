// GRAPHQL DEPENDENCIES
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require("graphql");

// CREATING A GRAPHQL SCHEMA FROM AN XML API USING AXIOS
// API DEPENDENCIES
const fetch = require("node-fetch");
const util = require("util");
const parseXML = util.promisify(require("xml2js").parseString);

// const id = 18541;
// const secretId = "Cggap3UjkMks4rnmo4bA";
// const url = `https://www.goodreads.com/author/show.xml?key=Cggap3UjkMks4rnmo4bA&id=${id}`;
// GETTING DATA FROM THE GOOD READS API

//************ GRAPHQL SERVER ************//
// CREATING THE AUTHOR OBJECT

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "...", // THIS IS THE NAME OF THE OBJECT OR ENTRY POINT
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: xml => xml.GoodreadsResponse.author[0].name[0]
    }
  })
});

//****** CREATING THE GRAPHQL SCHEMA ******//
module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    description: "...",

    fields: () => ({
      author: {
        type: AuthorType,
        args: {
          id: { type: GraphQLInt },
          resolve: (root, args) =>
            fetch(
              `https://www.goodreads.com/author/show.xml?key=Cggap3UjkMks4rnmo4bA&id=${
                args.id
              }`
            )
              .then(response => response.text())
              .then(parseXML)
        }
      }
    })
  })
});
