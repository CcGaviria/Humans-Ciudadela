const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type query {
    characters(
        page: 2, filter: { species: "Human" }, 
    ) {
      info {
        count,
        pages,
        next
      }
      results {
        name,
        species,
        gender,
        status,
        type,
        episode {
          name
        }
        origin {
          name
        },
        location {
          name
        },
        image,
      }, 
      
    }  
  }
`;

module.exports = typeDefs;