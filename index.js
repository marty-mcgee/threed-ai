// simple try:catch promise
try {
  console.log("threed index.js loaded")

  const { ApolloServer } = require('apollo-server');
  const gql = require('graphql-tag');

  const typeDefs = gql`
    type Query {
      hello:  String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => "world"
    }
  };

  const schema = new ApolloServer({ typeDefs, resolvers });

  schema.listen({ port: process.env.PORT }).then(({ url }) => {
    console.log(`schema ready at ${url}`);
  });

} catch (err) {
  // an error has occurred. no output is being attempted here.
  // console.log("threed index.js not loaded")
}
