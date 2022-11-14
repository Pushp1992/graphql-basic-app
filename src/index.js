const express = require('express');

const { graphqlHTTP } = require('express-graphql');

const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Query {
    bedroom: String,
    balcony: String,
    kitchen: String,
    rooms: Int
}
`);


const root = {
    bedroom: () => 'This is my bedroom',
    balcony: () => 'This is my balcony',
    rooms: () => 5
};

const app = express();

app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('graphQL server is running'));
