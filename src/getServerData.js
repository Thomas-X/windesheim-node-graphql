import {fileLoader, mergeResolvers, mergeTypes} from "merge-graphql-schemas";
import * as path from "path";
import allResolvers from './resolvers/index';

export default () => {
	const types = mergeTypes(fileLoader(`${path.resolve('./src/types')}/**/*.{graphql,gql}`));
	// this way is more convenient since we don't have to keep track of our /src/resolvers/index.js file but
	// it forces us to use the syntax supported by the current node version. because webpack doesn't transpile non-imported/required files.
	// const resolvers = mergeResolvers(fileLoader(`${path.resolve('./src/resolvers')}/**/*.js`));
	const resolvers = mergeResolvers(allResolvers);
	return { types, resolvers };

}