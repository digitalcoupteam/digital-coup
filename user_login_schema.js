// const { graphql, buildSchema } = require('graphql');



// module.exports = (buildSchema) => {
//     return {
//       loginSchema: buildSchema(`
//         type User {
//           id: ID
//           username: String
//           email: String
//           password: String
//         }
//         type Query {
//           books(id: ID): [Book]
//         }`
//       ),
//       booksQuery: `
//         {
//           books {
//             id
//             name
//             isbn
//           }
//         }`
//       }
//   };