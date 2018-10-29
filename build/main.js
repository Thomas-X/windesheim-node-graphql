require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getServerData__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_server_express__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector_DB__ = __webpack_require__(2);
// load .env file into process.env global
__webpack_require__(4).config();





const { resolvers, types } = Object(__WEBPACK_IMPORTED_MODULE_0__getServerData__["a" /* default */])();
const server = new __WEBPACK_IMPORTED_MODULE_2_apollo_server_express__["ApolloServer"]({ resolvers, typeDefs: types });

const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();
server.applyMiddleware({ app });

const port = 4000;

app.listen({ port }, () => {
		console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);

const { DB_HOST, DB_DIALECT, DB_PORT, DB_USER, DB_PASSWORD } = process.env;
const db = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(DB_DIALECT, DB_USER, DB_PASSWORD, {
	host: DB_HOST,
	dialect: DB_DIALECT,
	operatorsAliases: false,
	port: DB_PORT,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});
db.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});

/* unused harmony default export */ var _unused_webpack_default_export = (db);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolvers_index__ = __webpack_require__(8);




/* harmony default export */ __webpack_exports__["a"] = (() => {
	const types = Object(__WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas__["mergeTypes"])(Object(__WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas__["fileLoader"])(`${__WEBPACK_IMPORTED_MODULE_1_path__["resolve"]('./src/types')}/**/*.{graphql,gql}`));
	// this way is more convenient since we don't have to keep track of our /src/resolvers/index.js file but
	// it forces us to use the syntax supported by the current node version. because webpack doesn't transpile non-imported/required files.
	// const resolvers = mergeResolvers(fileLoader(`${path.resolve('./src/resolvers')}/**/*.js`));
	const resolvers = Object(__WEBPACK_IMPORTED_MODULE_0_merge_graphql_schemas__["mergeResolvers"])(__WEBPACK_IMPORTED_MODULE_2__resolvers_index__["a" /* default */]);
	return { types, resolvers };
});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("merge-graphql-schemas");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hello__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__hello__["a" /* default */]]);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// module.exports is used here because webpack is not compiling non-required / imported files
/* harmony default export */ __webpack_exports__["a"] = ({
	Query: {
		hello: () => ({ name: 'skdj', dateofbirth: '2989' })
	}
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map