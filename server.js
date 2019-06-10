const { ApolloServer, gql } = require('apollo-server');
const peoples = [
    {
        name: 'Vinicius',
        age: 20,
        document:{
          registry: '666999'
        }
    },
    {
        name: 'Kevin',
        age: 24,
    },
];
const typeDefs = gql`
  #
  type People {
    name: String
    age: Int
    document: Document
  }
  type Document{
    registry: String
  }
  type Query {
    peoples: [People]
  }
`;
const resolvers = {
    Query: {
        peoples: () => peoples,
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});