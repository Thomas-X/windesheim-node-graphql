// load .env file into process.env global
require('dotenv').config();
import getServerData from './getServerData';
import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import './connector/DB';

const {resolvers, types} = getServerData();
const server = new ApolloServer({resolvers, typeDefs: types});

const app = express();
server.applyMiddleware({app});

const port = 4000;

app.listen({port}, () => {
		console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
	}
);