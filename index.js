import express from 'express';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

const PORT = 3000

const graphQlSchema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

const app = express()

app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql',
}))

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: graphQlSchema, context: { models } }))

// models.sync() actually creates the database from the models defined for sequelize
models.sequelize.sync().then(x => app.listen(PORT))
