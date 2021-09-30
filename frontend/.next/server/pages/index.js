module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apollo/client.js":
/*!**************************!*\
  !*** ./apollo/client.js ***!
  \**************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\apollo\\client.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




let globalApolloClient = null;
/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * @param {Function|Class} PageComponent
 * @param {Object} [config]
 * @param {Boolean} [config.ssr=true]
 */

function withApollo(PageComponent, {
  ssr = true
} = {}) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState);
    return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: client,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx(PageComponent, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    })));
  }; // Set the correct displayName in development


  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const {
        AppTree
      } = ctx; // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.

      const apolloClient = ctx.apolloClient = initApolloClient(); // Run wrapped getInitialProps methods

      const pageProps = PageComponent.getInitialProps ? await PageComponent.getInitialProps(ctx) : {}; // Only on the server:

      if (true) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        } // Only if ssr is enabled


        if (ssr) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/client/react/ssr */ "@apollo/client/react/ssr", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                apolloClient
              }),
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 15
              }
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          } // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually


          next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();
        }
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread(_objectSpread({}, pageProps), {}, {
        apolloState
      });
    };
  }

  return WithApollo;
}
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */

function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(initialState);
  } // Reuse client on the client-side


  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState);
  }

  return globalApolloClient;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */


function createApolloClient(initialState = {}) {
  const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
    uri: process.env.NEXT_PUBLIC_APOLLO_CLIENT_URL,
    // Server URL (must be absolute)
    credentials: 'same-origin'
  });
  const ssrMode = true;
  const cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]({
    typePolicies: {
      Query: {
        fields: {
          // Reusable helper function to generate a field
          // policy for the Query.products field.
          products: {
            keyArgs: false,

            merge(existing, incoming) {
              const {
                items: newItems
              } = incoming;
              return existing ? _objectSpread(_objectSpread({}, incoming), {}, {
                items: [...existing.items, ...newItems]
              }) : incoming;
            }

          }
        }
      }
    }
  }).restore(initialState);
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    ssrMode,
    link: httpLink,
    cache
  });
}

/***/ }),

/***/ "./components/UiElements/ApexChart/ApexChart.tsx":
/*!*******************************************************!*\
  !*** ./components/UiElements/ApexChart/ApexChart.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\components\\UiElements\\ApexChart\\ApexChart.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const ChartWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-apexcharts */ "react-apexcharts", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-apexcharts */ "react-apexcharts")],
    modules: ['react-apexcharts']
  }
});

const ApexChart = props => {
  return __jsx(ChartWithNoSSR, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ApexChart);

/***/ }),

/***/ "./components/UiElements/Container/Container.styled.tsx":
/*!**************************************************************!*\
  !*** ./components/UiElements/Container/Container.styled.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);

const ContainerArea = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  width: '100%',
  maxWidth: '1080px',
  paddingLeft: '15px',
  paddingRight: '15px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
  '@media screen and (max-width: 1135px)': {
    maxWidth: '920px'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (ContainerArea);

/***/ }),

/***/ "./components/UiElements/Container/Container.tsx":
/*!*******************************************************!*\
  !*** ./components/UiElements/Container/Container.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.styled */ "./components/UiElements/Container/Container.styled.tsx");
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\components\\UiElements\\Container\\Container.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = ({
  children
}) => {
  return __jsx(_Container_styled__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/UiElements/LabelGroup/LabelGroup.styled.tsx":
/*!****************************************************************!*\
  !*** ./components/UiElements/LabelGroup/LabelGroup.styled.tsx ***!
  \****************************************************************/
/*! exports provided: LabelButton, Indicator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelButton", function() { return LabelButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indicator", function() { return Indicator; });
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Wrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});
const LabelButton = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('button', ({
  $theme
}) => _objectSpread(_objectSpread({
  display: 'flex',
  alignItems: 'center',
  border: 0,
  backgroundColor: 'transparent',
  color: $theme.colors.contentSecondary
}, $theme.typography.font200), {}, {
  ':focus': {
    outline: 0
  }
}));
const Indicator = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('span', {
  width: '10px',
  height: '10px',
  borderRadius: '50%'
});
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/UiElements/LabelGroup/LabelGroup.tsx":
/*!*********************************************************!*\
  !*** ./components/UiElements/LabelGroup/LabelGroup.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LabelGroup_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelGroup.styled */ "./components/UiElements/LabelGroup/LabelGroup.styled.tsx");
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\components\\UiElements\\LabelGroup\\LabelGroup.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LabelGroup = ({
  items,
  style,
  onClick
}) => {
  return __jsx(_LabelGroup_styled__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, items.map(item => __jsx(_LabelGroup_styled__WEBPACK_IMPORTED_MODULE_1__["LabelButton"], {
    key: `labelGroup-key${item.label}`,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_LabelGroup_styled__WEBPACK_IMPORTED_MODULE_1__["Indicator"], {
    style: {
      backgroundColor: item.color ? item.color : '#eeeeee'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), "\xA0\xA0", item.label)));
};

/* harmony default export */ __webpack_exports__["default"] = (LabelGroup);

/***/ }),

/***/ "./components/UiElements/ListGridCard/ListGridCard.styled.tsx":
/*!********************************************************************!*\
  !*** ./components/UiElements/ListGridCard/ListGridCard.styled.tsx ***!
  \********************************************************************/
/*! exports provided: Image, Img, Content, Title, TitleLink, Paragraph, Link, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleLink", function() { return TitleLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Wrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', props => ({
  display: 'flex',
  alignItems: props.$variant === 'list' ? 'center' : 'flex-start',
  flexDirection: props.$variant === 'grid' ? 'column' : 'row',
  backgroundColor: props.$variant === 'grid' ? props.$theme.colors.primaryB : 'transparent',
  overflow: 'hidden'
}));
const Image = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', props => ({
  minWidth: props.$variant === 'list' ? '41px' : '100%',
  marginLeft: props.$variant === 'list' ? '20px' : '0',
  marginRight: props.$variant === 'list' ? '20px' : '0',
  marginBottom: props.$variant === 'grid' ? '20px' : '0',
  height: props.$thumbHeight ? props.$thumbHeight : 'auto'
}));
const Img = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('img', props => ({
  width: props.$thumbWidth ? props.$thumbWidth : 'auto'
}));
const Content = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {});
const Title = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('h3', props => ({
  fontWeight: 500,
  color: props.$theme.colors.primary,
  fontSize: props.$variant === 'list' ? '14px' : '18px',
  lineHeight: props.$variant === 'list' ? '18px' : '22px',
  marginBottom: props.$variant === 'list' ? '10px' : '20px'
}));
const TitleLink = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('a', {
  color: 'inherit',
  textDecoration: 'none',
  transition: 'opacity 0.25s ease',
  ':hover': {
    opacity: 0.8
  }
});
const Paragraph = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('p', props => _objectSpread(_objectSpread({}, props.$theme.typography.font200), {}, {
  color: props.$theme.colors.contentSecondary,
  marginBottom: props.$variant === 'grid' ? '20px' : '0'
}));
const Link = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('a', ({
  $theme
}) => ({
  color: $theme.colors.contentAccent,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/UiElements/ListGridCard/ListGridCard.tsx":
/*!*************************************************************!*\
  !*** ./components/UiElements/ListGridCard/ListGridCard.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListGridCard_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListGridCard.styled */ "./components/UiElements/ListGridCard/ListGridCard.styled.tsx");
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\components\\UiElements\\ListGridCard\\ListGridCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ListGridCard = ({
  thumb,
  thumbWidth,
  thumbHeight,
  title,
  description,
  author,
  authorUrl,
  btn,
  variant = 'list',
  style,
  websiteUrl
}) => {
  const addClasses = [];

  if (variant === 'list') {
    addClasses.push('listgrid-card');
  }

  if (thumb) {
    addClasses.push('has-thumb');
  }

  return __jsx(_ListGridCard_styled__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addClasses.join(' '),
    $variant: variant,
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, thumb && __jsx(_ListGridCard_styled__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    $variant: variant,
    $thumbHeight: thumbHeight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_ListGridCard_styled__WEBPACK_IMPORTED_MODULE_1__["Img"], {
    $thumbWidth: thumbWidth,
    src: thumb,
    alt: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), __jsx(_ListGridCard_styled__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_ListGridCard_styled__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    $variant: variant,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, websiteUrl ? __jsx(_ListGridCard_styled__WEBPACK_IMPORTED_MODULE_1__["TitleLink"], {
    href: websiteUrl,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, title) : title), __jsx(_ListGridCard_styled__WEBPACK_IMPORTED_MODULE_1__["Paragraph"], {
    $variant: variant,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, description, ' ', author && __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Owned by ", __jsx(_ListGridCard_styled__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: authorUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 24
    }
  }, author))), btn && btn));
};

/* harmony default export */ __webpack_exports__["default"] = (ListGridCard);

/***/ }),

/***/ "./components/UiElements/Sites/Sites.styled.tsx":
/*!******************************************************!*\
  !*** ./components/UiElements/Sites/Sites.styled.tsx ***!
  \******************************************************/
/*! exports provided: Content, Icon, Info, Title, Action, Button, Label, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ "baseui");
/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Wrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', ({
  $theme
}) => ({
  backgroundColor: $theme.colors.primaryB,
  boxShadow: $theme.lighting.shadow400
}));
const Content = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', ({
  $theme
}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: $theme.sizing.scale700
}));
const Icon = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', props => ({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: props.$color ? props.$color : '#FF0080'
}));
const Info = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', {
  width: 'calc(100% - 68px)'
});
const Title = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('h4', ({
  $theme
}) => _objectSpread(_objectSpread({}, $theme.typography.font450), {}, {
  color: $theme.colors.primaryA,
  marginBottom: $theme.sizing.scale0
}));
const Action = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('div', ({
  $theme
}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `18px 20px 17px`,
  borderTop: `1px dashed ${$theme.colors.borderOpaque}`
}));
const Button = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('button', props => _objectSpread(_objectSpread({
  color: props.$color ? props.$color : '#FF0080',
  border: 0,
  boxShadow: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent'
}, props.$theme.typography.font200), {}, {
  transition: 'all 0.3s ease',
  ':hover': {
    opacity: '0.7'
  },
  ':focus': {
    outline: 'none'
  }
}));
const Label = Object(baseui__WEBPACK_IMPORTED_MODULE_0__["styled"])('span', ({
  $theme
}) => _objectSpread({
  color: $theme.colors.contentSecondary
}, $theme.typography.font200));
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/UiElements/Sites/Sites.tsx":
/*!***********************************************!*\
  !*** ./components/UiElements/Sites/Sites.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sites_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sites.styled */ "./components/UiElements/Sites/Sites.styled.tsx");
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\components\\UiElements\\Sites\\Sites.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Sites = ({
  icon,
  color,
  description,
  title,
  btntext,
  label,
  onClick,
  style
}) => {
  return __jsx(_Sites_styled__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_Sites_styled__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, icon && __jsx(_Sites_styled__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    $color: color,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 18
    }
  }, icon), __jsx(_Sites_styled__WEBPACK_IMPORTED_MODULE_1__["Info"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_Sites_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, description), __jsx(_Sites_styled__WEBPACK_IMPORTED_MODULE_1__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, title))), btntext || label ? __jsx(_Sites_styled__WEBPACK_IMPORTED_MODULE_1__["Action"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_Sites_styled__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    $color: color,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, btntext), __jsx(_Sites_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, label)) : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Sites);

/***/ }),

/***/ "./containers/Widgets/CashFlow.tsx":
/*!*****************************************!*\
  !*** ./containers/Widgets/CashFlow.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UiElements_ApexChart_ApexChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UiElements/ApexChart/ApexChart */ "./components/UiElements/ApexChart/ApexChart.tsx");
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\containers\\Widgets\\CashFlow.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CashFlow = ({
  className,
  title,
  categories,
  cash,
  height = '251'
}) => {
  const {
    0: chartOptions,
    1: setChartOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    options: {
      title: {
        text: title,
        align: 'left'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [{
              from: -100,
              to: -46,
              color: '#FF0080'
            }, {
              from: -45,
              to: 0,
              color: '#7928CA'
            }, {
              from: 0,
              to: 100,
              color: '#3AA76D'
            }]
          },
          columnWidth: '60%'
        }
      },
      xaxis: {
        type: 'category',
        categories,
        labels: {
          show: false
        }
      },
      legend: {
        position: 'bottom',
        fontFamily: 'inherit'
      },
      fill: {
        opacity: 1
      }
    },
    series: [{
      name: 'Cash Flow',
      data: cash
    }]
  });
  return __jsx(_components_UiElements_ApexChart_ApexChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    options: chartOptions.options,
    series: chartOptions.series,
    type: "bar",
    height: height,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CashFlow);

/***/ }),

/***/ "./containers/Widgets/ProductViews.tsx":
/*!*********************************************!*\
  !*** ./containers/Widgets/ProductViews.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UiElements_ApexChart_ApexChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UiElements/ApexChart/ApexChart */ "./components/UiElements/ApexChart/ApexChart.tsx");
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\containers\\Widgets\\ProductViews.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProductViews = ({
  className,
  title,
  categories,
  products,
  views,
  height = '247'
}) => {
  const {
    0: chartOptions,
    1: setChartOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: false
        }
      },
      title: {
        text: title,
        align: 'left'
      },
      grid: {
        show: false
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#3AA76D', '#EEEEEE'],
      xaxis: {
        type: 'category',
        categories,
        labels: {
          show: false
        }
      },
      legend: {
        position: 'bottom',
        fontFamily: 'inherit'
      },
      fill: {
        opacity: 1
      }
    },
    series: [{
      name: 'Product',
      data: products
    }, {
      name: 'View',
      data: views
    }]
  });
  return __jsx(_components_UiElements_ApexChart_ApexChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    options: chartOptions.options,
    series: chartOptions.series,
    type: "bar",
    height: height,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProductViews);

/***/ }),

/***/ "./containers/Widgets/ProductsBar.tsx":
/*!********************************************!*\
  !*** ./containers/Widgets/ProductsBar.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UiElements_ApexChart_ApexChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UiElements/ApexChart/ApexChart */ "./components/UiElements/ApexChart/ApexChart.tsx");
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\containers\\Widgets\\ProductsBar.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProductsBar = ({
  className,
  labels,
  products
}) => {
  const {
    0: chartOptions,
    1: setChartOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    options: {
      fill: {
        colors: ['#0070F3', '#7928CA', '#FF0080']
      },
      colors: ['#0070F3', '#7928CA', '#FF0080'],
      chart: {
        toolbar: {
          show: true
        }
      },
      labels,
      dataLabels: {
        style: {
          fontSize: '30px'
        }
      }
    },
    series: products
  });
  return __jsx(_components_UiElements_ApexChart_ApexChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    options: chartOptions.options,
    series: chartOptions.series,
    type: "radialBar",
    height: "315",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProductsBar);

/***/ }),

/***/ "./containers/Widgets/Views.tsx":
/*!**************************************!*\
  !*** ./containers/Widgets/Views.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UiElements_ApexChart_ApexChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UiElements/ApexChart/ApexChart */ "./components/UiElements/ApexChart/ApexChart.tsx");
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\containers\\Widgets\\Views.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Views = ({
  className,
  totalView
}) => {
  const {
    0: chartOptions,
    1: setChartOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    options: {
      chart: {
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#EEEEEE',
            strokeWidth: '67%',
            margin: 0,
            // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: '#000000',
              fontSize: '30px',
              show: true,
              formatter: function (val) {
                return parseInt(val);
              }
            }
          }
        }
      },
      fill: {
        colors: ['#7928CA']
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent']
    },
    series: [totalView]
  });
  return __jsx(_components_UiElements_ApexChart_ApexChart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: className,
    options: chartOptions.options,
    series: chartOptions.series,
    type: "radialBar",
    height: "315",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Views);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baseui/layout-grid */ "baseui/layout-grid");
/* harmony import */ var baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baseui/block */ "baseui/block");
/* harmony import */ var baseui_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baseui_block__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! baseui/card */ "baseui/card");
/* harmony import */ var baseui_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(baseui_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UiElements/Container/Container */ "./components/UiElements/Container/Container.tsx");
/* harmony import */ var components_UiElements_ListGridCard_ListGridCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UiElements/ListGridCard/ListGridCard */ "./components/UiElements/ListGridCard/ListGridCard.tsx");
/* harmony import */ var components_UiElements_LabelGroup_LabelGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UiElements/LabelGroup/LabelGroup */ "./components/UiElements/LabelGroup/LabelGroup.tsx");
/* harmony import */ var components_UiElements_Sites_Sites__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/UiElements/Sites/Sites */ "./components/UiElements/Sites/Sites.tsx");
/* harmony import */ var containers_Widgets_ProductViews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! containers/Widgets/ProductViews */ "./containers/Widgets/ProductViews.tsx");
/* harmony import */ var containers_Widgets_ProductsBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! containers/Widgets/ProductsBar */ "./containers/Widgets/ProductsBar.tsx");
/* harmony import */ var containers_Widgets_Views__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! containers/Widgets/Views */ "./containers/Widgets/Views.tsx");
/* harmony import */ var containers_Widgets_CashFlow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! containers/Widgets/CashFlow */ "./containers/Widgets/CashFlow.tsx");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apollo/client */ "./apollo/client.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "C:\\Users\\bryan\\OneDrive\\Documents\\Apple\\snapshot\\frontend\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const productsBarOptions = [{
  color: '#FF0080',
  label: 'Banana'
}, {
  color: '#7928CA',
  label: 'Orange'
}, {
  color: '#0070F3',
  label: 'Blueberry'
}];
const GET_DASHBOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_14__["gql"]`
	query {
		dashboard {
			recentApps {
				id
				name
				image
				description
			}
			productViews {
				categories
				products
				views
			}
			productsBar {
				labels
				products
			}
			cashFlow {
				categories
				cash
			}
		}
	}
`;

const Home = () => {
  const {
    data,
    loading,
    error,
    fetchMore
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_14__["useQuery"])(GET_DASHBOARD, {
    notifyOnNetworkStatusChange: true
  });
  if (!data) return null;
  const {
    productViews,
    recentApps,
    productsBar,
    cashFlow
  } = data.dashboard;
  return __jsx(components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, " INST.")), __jsx(baseui_block__WEBPACK_IMPORTED_MODULE_4__["Block"], {
    marginLeft: '-8px',
    marginRight: '-8px',
    paddingTop: ['15px', '20px', '30px', '40px'],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }, __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gridColumns: 12,
    gridGutters: 0,
    gridMargins: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: [12, 12, 6],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }, __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gridColumns: 12,
    gridGutters: 16,
    gridMargins: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: [12, 6],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }
  }, __jsx(components_UiElements_Sites_Sites__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginBottom: '20px'
    },
    title: "210",
    icon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosMailUnread"], {
      color: "#ffffff",
      size: "1.7em",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 16
      }
    }),
    description: "Unread Order Email",
    btntext: "View report",
    label: "Total mail",
    onClick: () => console.log('View report of unread email.'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })), __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: [12, 6],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 8
    }
  }, __jsx(components_UiElements_Sites_Sites__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginBottom: '20px'
    },
    color: "#0070F3",
    title: "198",
    icon: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdCart"], {
      color: "#ffffff",
      size: "1.7em",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 16
      }
    }),
    description: "Pending Orders",
    btntext: "View report",
    label: "Total orders",
    onClick: () => console.log('View report of pending orders.'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: [12, 6],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 8
    }
  }, __jsx(components_UiElements_Sites_Sites__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginBottom: '20px'
    },
    color: "#3AA76D",
    title: "$210M",
    icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaChartLine"], {
      color: "#ffffff",
      size: "1.6em",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 16
      }
    }),
    description: "Yearly Income",
    btntext: "View report",
    label: "Yearly income",
    onClick: () => console.log('View report of yearly income.'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  })), __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: [12, 6],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 8
    }
  }, __jsx(components_UiElements_Sites_Sites__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginBottom: '20px'
    },
    color: "#7928CA",
    title: "$210M",
    icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaMoneyCheckAlt"], {
      color: "#ffffff",
      size: "1.6em",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 16
      }
    }),
    description: "Total Spent",
    btntext: "View report",
    label: "Previous month",
    onClick: () => console.log('View report of previous month.'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  })))), __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: [12, 12, 6],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 6
    }
  }, __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gridGutters: 16,
    gridMargins: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 8
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    title: "Product View",
    overrides: {
      Root: {
        style: ({
          $theme
        }) => {
          return {
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            boxShadow: $theme.lighting.shadow400,
            minHeight: '312px',
            marginBottom: '20px'
          };
        }
      },
      Title: {
        style: ({
          $theme
        }) => {
          return _objectSpread(_objectSpread({}, $theme.typography.font250), {}, {
            position: 'absolute'
          });
        }
      },
      Body: {
        style: () => {
          return {
            minHeight: '260px'
          };
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["StyledBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 10
    }
  }, __jsx(containers_Widgets_ProductViews__WEBPACK_IMPORTED_MODULE_10__["default"], {
    categories: productViews.categories,
    products: productViews.products,
    views: productViews.views,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }))))))), __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gridColumns: 12,
    gridGutters: 16,
    gridMargins: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: [12, 12, 4],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 6
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    title: "Product List",
    overrides: {
      Root: {
        style: ({
          $theme
        }) => {
          return {
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            boxShadow: $theme.lighting.shadow400,
            marginBottom: $theme.sizing.scale700
          };
        }
      },
      Title: {
        style: ({
          $theme
        }) => {
          return _objectSpread(_objectSpread({}, $theme.typography.font250), {}, {
            position: 'absolute'
          });
        }
      },
      Body: {
        style: () => {
          return {
            minHeight: '372px',
            position: 'relative'
          };
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["StyledBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 8
    }
  }, __jsx(containers_Widgets_ProductsBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "padding-control",
    labels: productsBar.labels,
    products: productsBar.products,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }), __jsx(components_UiElements_LabelGroup_LabelGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      position: 'absolute',
      width: '100%',
      bottom: '-66px'
    },
    items: productsBarOptions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  })))), __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: [12, 12, 4],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 6
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    title: "Recent apps",
    overrides: {
      Root: {
        style: ({
          $theme
        }) => {
          return {
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            boxShadow: $theme.lighting.shadow400,
            marginBottom: '10px',
            minHeight: '408px'
          };
        }
      },
      Title: {
        style: ({
          $theme
        }) => {
          return _objectSpread({}, $theme.typography.font250);
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 7
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["StyledBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 8
    }
  }, recentApps.map(item => __jsx(components_UiElements_ListGridCard_ListGridCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: item.id,
    variant: "list",
    thumb: item.image,
    title: item.name,
    description: item.description,
    style: {
      alignItems: 'flex-start',
      marginTop: '25px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 10
    }
  }))))), __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: [12, 12, 4],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 6
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    title: "Average View",
    overrides: {
      Root: {
        style: ({
          $theme
        }) => {
          return {
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            boxShadow: $theme.lighting.shadow400,
            marginBottom: $theme.sizing.scale700
          };
        }
      },
      Title: {
        style: ({
          $theme
        }) => {
          return _objectSpread(_objectSpread({}, $theme.typography.font250), {}, {
            position: 'absolute'
          });
        }
      },
      Contents: {
        style: () => {
          return {
            minHeight: '372px'
          };
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 7
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["StyledBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 8
    }
  }, __jsx(containers_Widgets_Views__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "padding-control",
    totalView: 75,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 9
    }
  }))))), __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    gridColumns: 12,
    gridGutters: 16,
    gridMargins: 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 5
    }
  }, __jsx(baseui_layout_grid__WEBPACK_IMPORTED_MODULE_3__["Cell"], {
    span: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "cash-flow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 7
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    title: "Cash Flow",
    overrides: {
      Root: {
        style: ({
          $theme
        }) => {
          return {
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            borderLeftColor: 'transparent',
            boxShadow: $theme.lighting.shadow400
          };
        }
      },
      Title: {
        style: ({
          $theme
        }) => {
          return _objectSpread({}, $theme.typography.font250);
        }
      },
      Body: {
        style: () => {
          return {
            minHeight: '200px'
          };
        }
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 8
    }
  }, __jsx(baseui_card__WEBPACK_IMPORTED_MODULE_5__["StyledBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 9
    }
  }, __jsx(containers_Widgets_CashFlow__WEBPACK_IMPORTED_MODULE_13__["default"], {
    categories: cashFlow.categories,
    cash: cashFlow.cash,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 10
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(apollo_client__WEBPACK_IMPORTED_MODULE_15__["withApollo"])(Home));

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/react/ssr");

/***/ }),

/***/ "baseui":
/*!*************************!*\
  !*** external "baseui" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui");

/***/ }),

/***/ "baseui/block":
/*!*******************************!*\
  !*** external "baseui/block" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/block");

/***/ }),

/***/ "baseui/card":
/*!******************************!*\
  !*** external "baseui/card" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/card");

/***/ }),

/***/ "baseui/layout-grid":
/*!*************************************!*\
  !*** external "baseui/layout-grid" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("baseui/layout-grid");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apexcharts":
/*!***********************************!*\
  !*** external "react-apexcharts" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apexcharts");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBvbGxvL2NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VpRWxlbWVudHMvQXBleENoYXJ0L0FwZXhDaGFydC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VaUVsZW1lbnRzL0NvbnRhaW5lci9Db250YWluZXIuc3R5bGVkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VpRWxlbWVudHMvQ29udGFpbmVyL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VaUVsZW1lbnRzL0xhYmVsR3JvdXAvTGFiZWxHcm91cC5zdHlsZWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVWlFbGVtZW50cy9MYWJlbEdyb3VwL0xhYmVsR3JvdXAudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVWlFbGVtZW50cy9MaXN0R3JpZENhcmQvTGlzdEdyaWRDYXJkLnN0eWxlZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VaUVsZW1lbnRzL0xpc3RHcmlkQ2FyZC9MaXN0R3JpZENhcmQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVWlFbGVtZW50cy9TaXRlcy9TaXRlcy5zdHlsZWQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVWlFbGVtZW50cy9TaXRlcy9TaXRlcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9XaWRnZXRzL0Nhc2hGbG93LnRzeCIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1dpZGdldHMvUHJvZHVjdFZpZXdzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1dpZGdldHMvUHJvZHVjdHNCYXIudHN4Iiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvV2lkZ2V0cy9WaWV3cy50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFzZXVpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFzZXVpL2Jsb2NrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFzZXVpL2NhcmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYXNldWkvbGF5b3V0LWdyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwZXhjaGFydHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiXSwibmFtZXMiOlsiZ2xvYmFsQXBvbGxvQ2xpZW50Iiwid2l0aEFwb2xsbyIsIlBhZ2VDb21wb25lbnQiLCJzc3IiLCJXaXRoQXBvbGxvIiwiYXBvbGxvQ2xpZW50IiwiYXBvbGxvU3RhdGUiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJpbml0QXBvbGxvQ2xpZW50IiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiY29uc29sZSIsIndhcm4iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJBcHBUcmVlIiwicmVzIiwiZmluaXNoZWQiLCJnZXREYXRhRnJvbVRyZWUiLCJlcnJvciIsIkhlYWQiLCJyZXdpbmQiLCJjYWNoZSIsImV4dHJhY3QiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJodHRwTGluayIsIkh0dHBMaW5rIiwidXJpIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQT0xMT19DTElFTlRfVVJMIiwiY3JlZGVudGlhbHMiLCJzc3JNb2RlIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwicHJvZHVjdHMiLCJrZXlBcmdzIiwibWVyZ2UiLCJleGlzdGluZyIsImluY29taW5nIiwiaXRlbXMiLCJuZXdJdGVtcyIsInJlc3RvcmUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiQ2hhcnRXaXRoTm9TU1IiLCJkeW5hbWljIiwiQXBleENoYXJ0IiwicHJvcHMiLCJDb250YWluZXJBcmVhIiwic3R5bGVkIiwid2lkdGgiLCJtYXhXaWR0aCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJDb250YWluZXIiLCJjaGlsZHJlbiIsIldyYXBwZXIiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiTGFiZWxCdXR0b24iLCIkdGhlbWUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImNvbG9ycyIsImNvbnRlbnRTZWNvbmRhcnkiLCJ0eXBvZ3JhcGh5IiwiZm9udDIwMCIsIm91dGxpbmUiLCJJbmRpY2F0b3IiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJMYWJlbEdyb3VwIiwic3R5bGUiLCJvbkNsaWNrIiwibWFwIiwiaXRlbSIsImxhYmVsIiwiJHZhcmlhbnQiLCJmbGV4RGlyZWN0aW9uIiwicHJpbWFyeUIiLCJvdmVyZmxvdyIsIkltYWdlIiwibWluV2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCIkdGh1bWJIZWlnaHQiLCJJbWciLCIkdGh1bWJXaWR0aCIsIkNvbnRlbnQiLCJUaXRsZSIsImZvbnRXZWlnaHQiLCJwcmltYXJ5IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiVGl0bGVMaW5rIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwib3BhY2l0eSIsIlBhcmFncmFwaCIsIkxpbmsiLCJjb250ZW50QWNjZW50IiwiTGlzdEdyaWRDYXJkIiwidGh1bWIiLCJ0aHVtYldpZHRoIiwidGh1bWJIZWlnaHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwiYXV0aG9yVXJsIiwiYnRuIiwidmFyaWFudCIsIndlYnNpdGVVcmwiLCJhZGRDbGFzc2VzIiwicHVzaCIsImpvaW4iLCJib3hTaGFkb3ciLCJsaWdodGluZyIsInNoYWRvdzQwMCIsInBhZGRpbmciLCJzaXppbmciLCJzY2FsZTcwMCIsIkljb24iLCIkY29sb3IiLCJJbmZvIiwiZm9udDQ1MCIsInByaW1hcnlBIiwic2NhbGUwIiwiQWN0aW9uIiwiYm9yZGVyVG9wIiwiYm9yZGVyT3BhcXVlIiwiQnV0dG9uIiwiY3Vyc29yIiwiTGFiZWwiLCJTaXRlcyIsImljb24iLCJidG50ZXh0IiwiQ2FzaEZsb3ciLCJjbGFzc05hbWUiLCJjYXRlZ29yaWVzIiwiY2FzaCIsImNoYXJ0T3B0aW9ucyIsInNldENoYXJ0T3B0aW9ucyIsInVzZVN0YXRlIiwib3B0aW9ucyIsInRleHQiLCJhbGlnbiIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwicGxvdE9wdGlvbnMiLCJiYXIiLCJyYW5nZXMiLCJmcm9tIiwidG8iLCJjb2x1bW5XaWR0aCIsInhheGlzIiwidHlwZSIsImxhYmVscyIsInNob3ciLCJsZWdlbmQiLCJmb250RmFtaWx5IiwiZmlsbCIsInNlcmllcyIsImRhdGEiLCJQcm9kdWN0Vmlld3MiLCJ2aWV3cyIsImNoYXJ0Iiwic3RhY2tlZCIsInRvb2xiYXIiLCJ6b29tIiwiZ3JpZCIsImhvcml6b250YWwiLCJQcm9kdWN0c0JhciIsIlZpZXdzIiwidG90YWxWaWV3IiwicmFkaWFsQmFyIiwic3RhcnRBbmdsZSIsImVuZEFuZ2xlIiwiaG9sbG93Iiwic2l6ZSIsImJhY2tncm91bmQiLCJkcm9wU2hhZG93IiwidG9wIiwibGVmdCIsImJsdXIiLCJ0cmFjayIsInN0cm9rZVdpZHRoIiwidmFsdWUiLCJmb3JtYXR0ZXIiLCJ2YWwiLCJwYXJzZUludCIsInN0cm9rZSIsImxpbmVDYXAiLCJwcm9kdWN0c0Jhck9wdGlvbnMiLCJHRVRfREFTSEJPQVJEIiwiZ3FsIiwiSG9tZSIsImxvYWRpbmciLCJmZXRjaE1vcmUiLCJ1c2VRdWVyeSIsIm5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZSIsInByb2R1Y3RWaWV3cyIsInJlY2VudEFwcHMiLCJwcm9kdWN0c0JhciIsImNhc2hGbG93IiwiZGFzaGJvYXJkIiwibG9nIiwiUm9vdCIsImJvcmRlclRvcENvbG9yIiwiYm9yZGVyUmlnaHRDb2xvciIsImJvcmRlckJvdHRvbUNvbG9yIiwiYm9yZGVyTGVmdENvbG9yIiwibWluSGVpZ2h0IiwiZm9udDI1MCIsIkJvZHkiLCJib3R0b20iLCJpZCIsImltYWdlIiwibWFyZ2luVG9wIiwiQ29udGVudHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxjQUFjO1FBQ2QsSUFBSTtR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QyxvRUFBRDtBQUNDLGNBQVUsRUFBRVIsUUFBUSxDQUFDakUsVUFEdEI7QUFFQyxRQUFJLEVBQUVpRSxRQUFRLENBQUNoRSxJQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0E5QkQsQ0FERCxDQURELENBREQsQ0FsUEQsQ0FKRCxDQUREO0FBcVNBLENBM1NEOztBQTZTZXJKLGdJQUFVLENBQUM2TSxJQUFELENBQXpCLEU7Ozs7Ozs7Ozs7O0FDdFdBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge1xuICBBcG9sbG9Qcm92aWRlcixcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBIdHRwTGluayxcbn0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuXG5sZXQgZ2xvYmFsQXBvbGxvQ2xpZW50ID0gbnVsbDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCBwcm92aWRlcyB0aGUgYXBvbGxvQ29udGV4dFxuICogdG8gYSBuZXh0LmpzIFBhZ2VUcmVlLiBVc2UgaXQgYnkgd3JhcHBpbmdcbiAqIHlvdXIgUGFnZUNvbXBvbmVudCB2aWEgSE9DIHBhdHRlcm4uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufENsYXNzfSBQYWdlQ29tcG9uZW50XG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbmZpZ11cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbmZpZy5zc3I9dHJ1ZV1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBcG9sbG8oUGFnZUNvbXBvbmVudCwgeyBzc3IgPSB0cnVlIH0gPSB7fSkge1xuICBjb25zdCBXaXRoQXBvbGxvID0gKHsgYXBvbGxvQ2xpZW50LCBhcG9sbG9TdGF0ZSwgLi4ucGFnZVByb3BzIH0pID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBhcG9sbG9DbGllbnQgfHwgaW5pdEFwb2xsb0NsaWVudChhcG9sbG9TdGF0ZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgIDxQYWdlQ29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICk7XG4gIH07XG5cbiAgLy8gU2V0IHRoZSBjb3JyZWN0IGRpc3BsYXlOYW1lIGluIGRldmVsb3BtZW50XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgZGlzcGxheU5hbWUgPVxuICAgICAgUGFnZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBQYWdlQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgICBpZiAoZGlzcGxheU5hbWUgPT09ICdBcHAnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1RoaXMgd2l0aEFwb2xsbyBIT0Mgb25seSB3b3JrcyB3aXRoIFBhZ2VDb21wb25lbnRzLicpO1xuICAgIH1cblxuICAgIFdpdGhBcG9sbG8uZGlzcGxheU5hbWUgPSBgd2l0aEFwb2xsbygke2Rpc3BsYXlOYW1lfSlgO1xuICB9XG5cbiAgaWYgKHNzciB8fCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIFdpdGhBcG9sbG8uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgICAgY29uc3QgeyBBcHBUcmVlIH0gPSBjdHg7XG5cbiAgICAgIC8vIEluaXRpYWxpemUgQXBvbGxvQ2xpZW50LCBhZGQgaXQgdG8gdGhlIGN0eCBvYmplY3Qgc29cbiAgICAgIC8vIHdlIGNhbiB1c2UgaXQgaW4gYFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BgLlxuICAgICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gKGN0eC5hcG9sbG9DbGllbnQgPSBpbml0QXBvbGxvQ2xpZW50KCkpO1xuXG4gICAgICAvLyBSdW4gd3JhcHBlZCBnZXRJbml0aWFsUHJvcHMgbWV0aG9kc1xuICAgICAgY29uc3QgcGFnZVByb3BzID0gUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgPyBhd2FpdCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gICAgICAgIDoge307XG5cbiAgICAgIC8vIE9ubHkgb24gdGhlIHNlcnZlcjpcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBXaGVuIHJlZGlyZWN0aW5nLCB0aGUgcmVzcG9uc2UgaXMgZmluaXNoZWQuXG4gICAgICAgIC8vIE5vIHBvaW50IGluIGNvbnRpbnVpbmcgdG8gcmVuZGVyXG4gICAgICAgIGlmIChjdHgucmVzICYmIGN0eC5yZXMuZmluaXNoZWQpIHtcbiAgICAgICAgICByZXR1cm4gcGFnZVByb3BzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25seSBpZiBzc3IgaXMgZW5hYmxlZFxuICAgICAgICBpZiAoc3NyKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFJ1biBhbGwgR3JhcGhRTCBxdWVyaWVzXG4gICAgICAgICAgICBjb25zdCB7IGdldERhdGFGcm9tVHJlZSB9ID0gYXdhaXQgaW1wb3J0KFxuICAgICAgICAgICAgICAnQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGF3YWl0IGdldERhdGFGcm9tVHJlZShcbiAgICAgICAgICAgICAgPEFwcFRyZWVcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgIC4uLnBhZ2VQcm9wcyxcbiAgICAgICAgICAgICAgICAgIGFwb2xsb0NsaWVudCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxuICAgICAgICAgICAgLy8gSGFuZGxlIHRoZW0gaW4gY29tcG9uZW50cyB2aWEgdGhlIGRhdGEuZXJyb3IgcHJvcDpcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWFwb2xsby5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgcnVubmluZyBgZ2V0RGF0YUZyb21UcmVlYCcsIGVycm9yKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBnZXREYXRhRnJvbVRyZWUgZG9lcyBub3QgY2FsbCBjb21wb25lbnRXaWxsVW5tb3VudFxuICAgICAgICAgIC8vIGhlYWQgc2lkZSBlZmZlY3QgdGhlcmVmb3JlIG5lZWQgdG8gYmUgY2xlYXJlZCBtYW51YWxseVxuICAgICAgICAgIEhlYWQucmV3aW5kKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbyBzdG9yZVxuICAgICAgY29uc3QgYXBvbGxvU3RhdGUgPSBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wYWdlUHJvcHMsXG4gICAgICAgIGFwb2xsb1N0YXRlLFxuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIFdpdGhBcG9sbG87XG59XG5cbi8qKlxuICogQWx3YXlzIGNyZWF0ZXMgYSBuZXcgYXBvbGxvIGNsaWVudCBvbiB0aGUgc2VydmVyXG4gKiBDcmVhdGVzIG9yIHJldXNlcyBhcG9sbG8gY2xpZW50IGluIHRoZSBicm93c2VyLlxuICogQHBhcmFtICB7T2JqZWN0fSBpbml0aWFsU3RhdGVcbiAqL1xuZnVuY3Rpb24gaW5pdEFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUpIHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcbiAgaWYgKCFnbG9iYWxBcG9sbG9DbGllbnQpIHtcbiAgICBnbG9iYWxBcG9sbG9DbGllbnQgPSBjcmVhdGVBcG9sbG9DbGllbnQoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBnbG9iYWxBcG9sbG9DbGllbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgY29uZmlndXJlcyB0aGUgQXBvbGxvQ2xpZW50XG4gKiBAcGFyYW0gIHtPYmplY3R9IFtpbml0aWFsU3RhdGU9e31dXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudChpbml0aWFsU3RhdGUgPSB7fSkge1xuICBjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XG4gICAgdXJpOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUE9MTE9fQ0xJRU5UX1VSTCwgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSk7XG5cbiAgY29uc3Qgc3NyTW9kZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuICBjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICB0eXBlUG9saWNpZXM6IHtcbiAgICAgIFF1ZXJ5OiB7XG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIC8vIFJldXNhYmxlIGhlbHBlciBmdW5jdGlvbiB0byBnZW5lcmF0ZSBhIGZpZWxkXG4gICAgICAgICAgLy8gcG9saWN5IGZvciB0aGUgUXVlcnkucHJvZHVjdHMgZmllbGQuXG4gICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgIGtleUFyZ3M6IGZhbHNlLFxuICAgICAgICAgICAgbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgaXRlbXM6IG5ld0l0ZW1zIH0gPSBpbmNvbWluZztcbiAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmluY29taW5nLFxuICAgICAgICAgICAgICAgICAgICBpdGVtczogWy4uLmV4aXN0aW5nLml0ZW1zLCAuLi5uZXdJdGVtc10sXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBpbmNvbWluZztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSkucmVzdG9yZShpbml0aWFsU3RhdGUpO1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZSxcbiAgICBsaW5rOiBodHRwTGluayxcbiAgICBjYWNoZSxcbiAgfSk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IENoYXJ0V2l0aE5vU1NSID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LWFwZXhjaGFydHMnKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbnR5cGUgQXBleENoYXJ0VHlwZSA9IHtcbiAgW3Byb3BzOiBzdHJpbmddOiBhbnk7XG59O1xuXG5jb25zdCBBcGV4Q2hhcnQgPSAocHJvcHM6IEFwZXhDaGFydFR5cGUpID0+IHtcbiAgcmV0dXJuIDxDaGFydFdpdGhOb1NTUiB7Li4ucHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBleENoYXJ0O1xuIiwiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnYmFzZXVpJztcblxuY29uc3QgQ29udGFpbmVyQXJlYSA9IHN0eWxlZCgnZGl2Jywge1xuXHR3aWR0aDogJzEwMCUnLFxuXHRtYXhXaWR0aDogJzEwODBweCcsXG5cdHBhZGRpbmdMZWZ0OiAnMTVweCcsXG5cdHBhZGRpbmdSaWdodDogJzE1cHgnLFxuXHRtYXJnaW46ICcwIGF1dG8nLFxuXHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0ekluZGV4OiAxLFxuXG5cdCdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTM1cHgpJzoge1xuXHRcdG1heFdpZHRoOiAnOTIwcHgnLFxuXHR9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lckFyZWE7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lckFyZWEgZnJvbSAnLi9Db250YWluZXIuc3R5bGVkJztcblxuY29uc3QgQ29udGFpbmVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7fT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiA8Q29udGFpbmVyQXJlYT57Y2hpbGRyZW59PC9Db250YWluZXJBcmVhPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsImltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ2Jhc2V1aSc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicsIHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgTGFiZWxCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicsICh7ICR0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBib3JkZXI6IDAsXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgY29sb3I6ICR0aGVtZS5jb2xvcnMuY29udGVudFNlY29uZGFyeSxcbiAgLi4uJHRoZW1lLnR5cG9ncmFwaHkuZm9udDIwMCxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAwLFxuICB9LFxufSkpO1xuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkKCdzcGFuJywge1xuICB3aWR0aDogJzEwcHgnLFxuICBoZWlnaHQ6ICcxMHB4JyxcbiAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXcmFwcGVyLCB7IExhYmVsQnV0dG9uLCBJbmRpY2F0b3IgfSBmcm9tICcuL0xhYmVsR3JvdXAuc3R5bGVkJztcblxudHlwZSBMYWJlbEdyb3VwID0ge1xuICBpdGVtczoge1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICB9W107XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBMYWJlbEdyb3VwID0gKHsgaXRlbXMsIHN0eWxlLCBvbkNsaWNrIH06IExhYmVsR3JvdXApID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBzdHlsZT17c3R5bGV9PlxuICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgPExhYmVsQnV0dG9uIGtleT17YGxhYmVsR3JvdXAta2V5JHtpdGVtLmxhYmVsfWB9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgIDxJbmRpY2F0b3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvciA/IGl0ZW0uY29sb3IgOiAnI2VlZWVlZScgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICZuYnNwOyZuYnNwO1xuICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICA8L0xhYmVsQnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWxHcm91cDtcbiIsImltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ2Jhc2V1aSc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicsIChwcm9wczogYW55KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6IHByb3BzLiR2YXJpYW50ID09PSAnbGlzdCcgPyAnY2VudGVyJyA6ICdmbGV4LXN0YXJ0JyxcbiAgZmxleERpcmVjdGlvbjogcHJvcHMuJHZhcmlhbnQgPT09ICdncmlkJyA/ICdjb2x1bW4nIDogJ3JvdycsXG4gIGJhY2tncm91bmRDb2xvcjpcbiAgICBwcm9wcy4kdmFyaWFudCA9PT0gJ2dyaWQnID8gcHJvcHMuJHRoZW1lLmNvbG9ycy5wcmltYXJ5QiA6ICd0cmFuc3BhcmVudCcsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkKCdkaXYnLCAocHJvcHM6IGFueSkgPT4gKHtcbiAgbWluV2lkdGg6IHByb3BzLiR2YXJpYW50ID09PSAnbGlzdCcgPyAnNDFweCcgOiAnMTAwJScsXG4gIG1hcmdpbkxlZnQ6IHByb3BzLiR2YXJpYW50ID09PSAnbGlzdCcgPyAnMjBweCcgOiAnMCcsXG4gIG1hcmdpblJpZ2h0OiBwcm9wcy4kdmFyaWFudCA9PT0gJ2xpc3QnID8gJzIwcHgnIDogJzAnLFxuICBtYXJnaW5Cb3R0b206IHByb3BzLiR2YXJpYW50ID09PSAnZ3JpZCcgPyAnMjBweCcgOiAnMCcsXG4gIGhlaWdodDogcHJvcHMuJHRodW1iSGVpZ2h0ID8gcHJvcHMuJHRodW1iSGVpZ2h0IDogJ2F1dG8nLFxufSkpO1xuXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkKCdpbWcnLCAocHJvcHM6IGFueSkgPT4gKHtcbiAgd2lkdGg6IHByb3BzLiR0aHVtYldpZHRoID8gcHJvcHMuJHRodW1iV2lkdGggOiAnYXV0bycsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkKCdkaXYnLCB7fSk7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZCgnaDMnLCAocHJvcHM6IGFueSkgPT4gKHtcbiAgZm9udFdlaWdodDogNTAwLFxuICBjb2xvcjogcHJvcHMuJHRoZW1lLmNvbG9ycy5wcmltYXJ5LFxuICBmb250U2l6ZTogcHJvcHMuJHZhcmlhbnQgPT09ICdsaXN0JyA/ICcxNHB4JyA6ICcxOHB4JyxcbiAgbGluZUhlaWdodDogcHJvcHMuJHZhcmlhbnQgPT09ICdsaXN0JyA/ICcxOHB4JyA6ICcyMnB4JyxcbiAgbWFyZ2luQm90dG9tOiBwcm9wcy4kdmFyaWFudCA9PT0gJ2xpc3QnID8gJzEwcHgnIDogJzIwcHgnLFxufSkpO1xuXG5leHBvcnQgY29uc3QgVGl0bGVMaW5rID0gc3R5bGVkKCdhJywge1xuICBjb2xvcjogJ2luaGVyaXQnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjI1cyBlYXNlJyxcbiAgJzpob3Zlcic6IHtcbiAgICBvcGFjaXR5OiAwLjgsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZCgncCcsIChwcm9wczogYW55KSA9PiAoe1xuICAuLi5wcm9wcy4kdGhlbWUudHlwb2dyYXBoeS5mb250MjAwLFxuICBjb2xvcjogcHJvcHMuJHRoZW1lLmNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICBtYXJnaW5Cb3R0b206IHByb3BzLiR2YXJpYW50ID09PSAnZ3JpZCcgPyAnMjBweCcgOiAnMCcsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkKCdhJywgKHsgJHRoZW1lIH0pID0+ICh7XG4gIGNvbG9yOiAkdGhlbWUuY29sb3JzLmNvbnRlbnRBY2NlbnQsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICc6aG92ZXInOiB7XG4gICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXcmFwcGVyLCB7XG4gIEltYWdlLFxuICBDb250ZW50LFxuICBUaXRsZSxcbiAgVGl0bGVMaW5rLFxuICBQYXJhZ3JhcGgsXG4gIExpbmssXG4gIEltZyxcbn0gZnJvbSAnLi9MaXN0R3JpZENhcmQuc3R5bGVkJztcblxudHlwZSBMaXN0R3JpZENhcmRUeXBlID0ge1xuICB0aHVtYj86IHN0cmluZztcbiAgdGh1bWJXaWR0aD86IHN0cmluZztcbiAgdGh1bWJIZWlnaHQ/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgYXV0aG9yPzogc3RyaW5nO1xuICBhdXRob3JVcmw/OiBzdHJpbmc7XG4gIGJ0bj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdmFyaWFudD86ICdncmlkJyB8ICdsaXN0JztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICB3ZWJzaXRlVXJsPzogc3RyaW5nO1xufTtcblxuY29uc3QgTGlzdEdyaWRDYXJkID0gKHtcbiAgdGh1bWIsXG4gIHRodW1iV2lkdGgsXG4gIHRodW1iSGVpZ2h0LFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGF1dGhvcixcbiAgYXV0aG9yVXJsLFxuICBidG4sXG4gIHZhcmlhbnQgPSAnbGlzdCcsXG4gIHN0eWxlLFxuICB3ZWJzaXRlVXJsLFxufTogTGlzdEdyaWRDYXJkVHlwZSkgPT4ge1xuICBjb25zdCBhZGRDbGFzc2VzID0gW107XG4gIGlmICh2YXJpYW50ID09PSAnbGlzdCcpIHtcbiAgICBhZGRDbGFzc2VzLnB1c2goJ2xpc3RncmlkLWNhcmQnKTtcbiAgfVxuICBpZiAodGh1bWIpIHtcbiAgICBhZGRDbGFzc2VzLnB1c2goJ2hhcy10aHVtYicpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9e2FkZENsYXNzZXMuam9pbignICcpfSAkdmFyaWFudD17dmFyaWFudH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHt0aHVtYiAmJiAoXG4gICAgICAgIDxJbWFnZSAkdmFyaWFudD17dmFyaWFudH0gJHRodW1iSGVpZ2h0PXt0aHVtYkhlaWdodH0+XG4gICAgICAgICAgPEltZyAkdGh1bWJXaWR0aD17dGh1bWJXaWR0aH0gc3JjPXt0aHVtYn0gYWx0PXt0aXRsZX0gLz5cbiAgICAgICAgPC9JbWFnZT5cbiAgICAgICl9XG5cbiAgICAgIDxDb250ZW50PlxuICAgICAgICA8VGl0bGUgJHZhcmlhbnQ9e3ZhcmlhbnR9PlxuICAgICAgICAgIHt3ZWJzaXRlVXJsID8gKFxuICAgICAgICAgICAgPFRpdGxlTGluayBocmVmPXt3ZWJzaXRlVXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9UaXRsZUxpbms+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgPFBhcmFncmFwaCAkdmFyaWFudD17dmFyaWFudH0+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufXsnICd9XG4gICAgICAgICAge2F1dGhvciAmJiAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgT3duZWQgYnkgPExpbmsgaHJlZj17YXV0aG9yVXJsfT57YXV0aG9yfTwvTGluaz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAge2J0biAmJiBidG59XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEdyaWRDYXJkO1xuIiwiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnYmFzZXVpJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZCgnZGl2JywgKHsgJHRoZW1lIH0pID0+ICh7XG4gIGJhY2tncm91bmRDb2xvcjogJHRoZW1lLmNvbG9ycy5wcmltYXJ5QixcbiAgYm94U2hhZG93OiAkdGhlbWUubGlnaHRpbmcuc2hhZG93NDAwLFxufSkpO1xuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZCgnZGl2JywgKHsgJHRoZW1lIH0pID0+ICh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIHBhZGRpbmc6ICR0aGVtZS5zaXppbmcuc2NhbGU3MDAsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBJY29uID0gc3R5bGVkKCdkaXYnLCAocHJvcHM6IGFueSkgPT4gKHtcbiAgd2lkdGg6ICc1MHB4JyxcbiAgaGVpZ2h0OiAnNTBweCcsXG4gIGJvcmRlclJhZGl1czogJzUwJScsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgYmFja2dyb3VuZENvbG9yOiBwcm9wcy4kY29sb3IgPyBwcm9wcy4kY29sb3IgOiAnI0ZGMDA4MCcsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBJbmZvID0gc3R5bGVkKCdkaXYnLCB7XG4gIHdpZHRoOiAnY2FsYygxMDAlIC0gNjhweCknLFxufSk7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZCgnaDQnLCAoeyAkdGhlbWUgfSkgPT4gKHtcbiAgLi4uJHRoZW1lLnR5cG9ncmFwaHkuZm9udDQ1MCxcbiAgY29sb3I6ICR0aGVtZS5jb2xvcnMucHJpbWFyeUEsXG4gIG1hcmdpbkJvdHRvbTogJHRoZW1lLnNpemluZy5zY2FsZTAsXG59KSk7XG5cbmV4cG9ydCBjb25zdCBBY3Rpb24gPSBzdHlsZWQoJ2RpdicsICh7ICR0aGVtZSB9KSA9PiAoe1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBwYWRkaW5nOiBgMThweCAyMHB4IDE3cHhgLFxuICBib3JkZXJUb3A6IGAxcHggZGFzaGVkICR7JHRoZW1lLmNvbG9ycy5ib3JkZXJPcGFxdWV9YCxcbn0pKTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZCgnYnV0dG9uJywgKHByb3BzOiBhbnkpID0+ICh7XG4gIGNvbG9yOiBwcm9wcy4kY29sb3IgPyBwcm9wcy4kY29sb3IgOiAnI0ZGMDA4MCcsXG4gIGJvcmRlcjogMCxcbiAgYm94U2hhZG93OiAnbm9uZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIC4uLnByb3BzLiR0aGVtZS50eXBvZ3JhcGh5LmZvbnQyMDAsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcbiAgJzpob3Zlcic6IHtcbiAgICBvcGFjaXR5OiAnMC43JyxcbiAgfSxcbiAgJzpmb2N1cyc6IHtcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZCgnc3BhbicsICh7ICR0aGVtZSB9KSA9PiAoe1xuICBjb2xvcjogJHRoZW1lLmNvbG9ycy5jb250ZW50U2Vjb25kYXJ5LFxuICAuLi4kdGhlbWUudHlwb2dyYXBoeS5mb250MjAwLFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXcmFwcGVyLCB7XG4gIENvbnRlbnQsXG4gIEljb24sXG4gIEluZm8sXG4gIFRpdGxlLFxuICBBY3Rpb24sXG4gIEJ1dHRvbixcbiAgTGFiZWwsXG59IGZyb20gJy4vU2l0ZXMuc3R5bGVkJztcblxudHlwZSBTaXRlc1R5cGUgPSB7XG4gIGljb24/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGJ0bnRleHQ/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xufTtcblxuY29uc3QgU2l0ZXMgPSAoe1xuICBpY29uLFxuICBjb2xvcixcbiAgZGVzY3JpcHRpb24sXG4gIHRpdGxlLFxuICBidG50ZXh0LFxuICBsYWJlbCxcbiAgb25DbGljayxcbiAgc3R5bGUsXG59OiBTaXRlc1R5cGUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBzdHlsZT17c3R5bGV9PlxuICAgICAgPENvbnRlbnQ+XG4gICAgICAgIHtpY29uICYmIDxJY29uICRjb2xvcj17Y29sb3J9PntpY29ufTwvSWNvbj59XG4gICAgICAgIDxJbmZvPlxuICAgICAgICAgIDxMYWJlbD57ZGVzY3JpcHRpb259PC9MYWJlbD5cbiAgICAgICAgICA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+XG4gICAgICAgIDwvSW5mbz5cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIHtidG50ZXh0IHx8IGxhYmVsID8gKFxuICAgICAgICA8QWN0aW9uPlxuICAgICAgICAgIDxCdXR0b24gJGNvbG9yPXtjb2xvcn0gb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgICB7YnRudGV4dH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8TGFiZWw+e2xhYmVsfTwvTGFiZWw+XG4gICAgICAgIDwvQWN0aW9uPlxuICAgICAgKSA6IChcbiAgICAgICAgJydcbiAgICAgICl9XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2l0ZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBleENoYXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVWlFbGVtZW50cy9BcGV4Q2hhcnQvQXBleENoYXJ0JztcblxudHlwZSBDYXNoRmxvd1R5cGUgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgY2F0ZWdvcmllczogc3RyaW5nW107XG4gIGNhc2g6IG51bWJlcltdO1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xufTtcblxuY29uc3QgQ2FzaEZsb3cgPSAoe1xuICBjbGFzc05hbWUsXG4gIHRpdGxlLFxuICBjYXRlZ29yaWVzLFxuICBjYXNoLFxuICBoZWlnaHQgPSAnMjUxJyxcbn06IENhc2hGbG93VHlwZSkgPT4ge1xuICBjb25zdCBbY2hhcnRPcHRpb25zLCBzZXRDaGFydE9wdGlvbnNdID0gdXNlU3RhdGUoe1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgfSxcbiAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgYmFyOiB7XG4gICAgICAgICAgY29sb3JzOiB7XG4gICAgICAgICAgICByYW5nZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZyb206IC0xMDAsXG4gICAgICAgICAgICAgICAgdG86IC00NixcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNGRjAwODAnLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZnJvbTogLTQ1LFxuICAgICAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzc5MjhDQScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiAxMDAsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjM0FBNzZEJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb2x1bW5XaWR0aDogJzYwJScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgeGF4aXM6IHtcbiAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgICAgfSxcbiAgICAgIGZpbGw6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0Nhc2ggRmxvdycsXG4gICAgICAgIGRhdGE6IGNhc2gsXG4gICAgICB9LFxuICAgIF0sXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwZXhDaGFydFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBvcHRpb25zPXtjaGFydE9wdGlvbnMub3B0aW9uc31cbiAgICAgIHNlcmllcz17Y2hhcnRPcHRpb25zLnNlcmllc31cbiAgICAgIHR5cGU9XCJiYXJcIlxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc2hGbG93O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwZXhDaGFydCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VpRWxlbWVudHMvQXBleENoYXJ0L0FwZXhDaGFydCc7XG5cbnR5cGUgUHJvZHVjdFZpZXdzVHlwZSA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjYXRlZ29yaWVzOiBzdHJpbmdbXTtcbiAgcHJvZHVjdHM6IG51bWJlcltdO1xuICB2aWV3czogbnVtYmVyW107XG4gIGhlaWdodD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBQcm9kdWN0Vmlld3MgPSAoe1xuICBjbGFzc05hbWUsXG4gIHRpdGxlLFxuICBjYXRlZ29yaWVzLFxuICBwcm9kdWN0cyxcbiAgdmlld3MsXG4gIGhlaWdodCA9ICcyNDcnLFxufTogUHJvZHVjdFZpZXdzVHlwZSkgPT4ge1xuICBjb25zdCBbY2hhcnRPcHRpb25zLCBzZXRDaGFydE9wdGlvbnNdID0gdXNlU3RhdGUoe1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB6b29tOiB7XG4gICAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwbG90T3B0aW9uczoge1xuICAgICAgICBiYXI6IHtcbiAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkYXRhTGFiZWxzOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGNvbG9yczogWycjM0FBNzZEJywgJyNFRUVFRUUnXSxcbiAgICAgIHhheGlzOiB7XG4gICAgICAgIHR5cGU6ICdjYXRlZ29yeScsXG4gICAgICAgIGNhdGVnb3JpZXMsXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICAgIH0sXG4gICAgICBmaWxsOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2VyaWVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQcm9kdWN0JyxcbiAgICAgICAgZGF0YTogcHJvZHVjdHMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVmlldycsXG4gICAgICAgIGRhdGE6IHZpZXdzLFxuICAgICAgfSxcbiAgICBdLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxBcGV4Q2hhcnRcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgb3B0aW9ucz17Y2hhcnRPcHRpb25zLm9wdGlvbnN9XG4gICAgICBzZXJpZXM9e2NoYXJ0T3B0aW9ucy5zZXJpZXN9XG4gICAgICB0eXBlPVwiYmFyXCJcbiAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Vmlld3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBleENoYXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVWlFbGVtZW50cy9BcGV4Q2hhcnQvQXBleENoYXJ0JztcblxudHlwZSBQcm9kdWN0c0JhclR5cGUgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgbGFiZWxzOiBzdHJpbmdbXTtcbiAgcHJvZHVjdHM6IG51bWJlcltdO1xufTtcblxuY29uc3QgUHJvZHVjdHNCYXIgPSAoeyBjbGFzc05hbWUsIGxhYmVscywgcHJvZHVjdHMgfTogUHJvZHVjdHNCYXJUeXBlKSA9PiB7XG4gIGNvbnN0IFtjaGFydE9wdGlvbnMsIHNldENoYXJ0T3B0aW9uc10gPSB1c2VTdGF0ZSh7XG4gICAgb3B0aW9uczoge1xuICAgICAgZmlsbDoge1xuICAgICAgICBjb2xvcnM6IFsnIzAwNzBGMycsICcjNzkyOENBJywgJyNGRjAwODAnXSxcbiAgICAgIH0sXG4gICAgICBjb2xvcnM6IFsnIzAwNzBGMycsICcjNzkyOENBJywgJyNGRjAwODAnXSxcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxhYmVscyxcbiAgICAgIGRhdGFMYWJlbHM6IHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogJzMwcHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNlcmllczogcHJvZHVjdHMsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwZXhDaGFydFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBvcHRpb25zPXtjaGFydE9wdGlvbnMub3B0aW9uc31cbiAgICAgIHNlcmllcz17Y2hhcnRPcHRpb25zLnNlcmllc31cbiAgICAgIHR5cGU9XCJyYWRpYWxCYXJcIlxuICAgICAgaGVpZ2h0PVwiMzE1XCJcbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNCYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBleENoYXJ0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVWlFbGVtZW50cy9BcGV4Q2hhcnQvQXBleENoYXJ0JztcblxudHlwZSBWaWV3c1R5cGUgPSB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgdG90YWxWaWV3OiBudW1iZXI7XG59O1xuXG5jb25zdCBWaWV3cyA9ICh7IGNsYXNzTmFtZSwgdG90YWxWaWV3IH06IFZpZXdzVHlwZSkgPT4ge1xuICBjb25zdCBbY2hhcnRPcHRpb25zLCBzZXRDaGFydE9wdGlvbnNdID0gdXNlU3RhdGUoe1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIGNoYXJ0OiB7XG4gICAgICAgIHRvb2xiYXI6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgIHJhZGlhbEJhcjoge1xuICAgICAgICAgIHN0YXJ0QW5nbGU6IC0xMzUsXG4gICAgICAgICAgZW5kQW5nbGU6IDIyNSxcbiAgICAgICAgICBob2xsb3c6IHtcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIHNpemU6ICc3MCUnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdmcm9udCcsXG4gICAgICAgICAgICBkcm9wU2hhZG93OiB7XG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHRvcDogMyxcbiAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgYmx1cjogNCxcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4yNCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cmFjazoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNFRUVFRUUnLFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6ICc2NyUnLFxuICAgICAgICAgICAgbWFyZ2luOiAwLCAvLyBtYXJnaW4gaXMgaW4gcGl4ZWxzXG4gICAgICAgICAgICBkcm9wU2hhZG93OiB7XG4gICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHRvcDogLTMsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIGJsdXI6IDQsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuMzUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YUxhYmVsczoge1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICAgICAgICBmb250U2l6ZTogJzMwcHgnLFxuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbDogYW55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZmlsbDoge1xuICAgICAgICBjb2xvcnM6IFsnIzc5MjhDQSddLFxuICAgICAgfSxcbiAgICAgIHN0cm9rZToge1xuICAgICAgICBsaW5lQ2FwOiAncm91bmQnLFxuICAgICAgfSxcbiAgICAgIGxhYmVsczogWydQZXJjZW50J10sXG4gICAgfSxcbiAgICBzZXJpZXM6IFt0b3RhbFZpZXddLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxBcGV4Q2hhcnRcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgb3B0aW9ucz17Y2hhcnRPcHRpb25zLm9wdGlvbnN9XG4gICAgICBzZXJpZXM9e2NoYXJ0T3B0aW9ucy5zZXJpZXN9XG4gICAgICB0eXBlPVwicmFkaWFsQmFyXCJcbiAgICAgIGhlaWdodD1cIjMxNVwiXG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdzO1xuIiwiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IElvSW9zTWFpbFVucmVhZCwgSW9NZENhcnQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQgeyBGYU1vbmV5Q2hlY2tBbHQsIEZhQ2hhcnRMaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IHsgR3JpZCwgQ2VsbCB9IGZyb20gJ2Jhc2V1aS9sYXlvdXQtZ3JpZCc7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gJ2Jhc2V1aS9ibG9jayc7XG5pbXBvcnQgeyBDYXJkLCBTdHlsZWRCb2R5IH0gZnJvbSAnYmFzZXVpL2NhcmQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL1VpRWxlbWVudHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgTGlzdEdyaWRDYXJkIGZyb20gJ2NvbXBvbmVudHMvVWlFbGVtZW50cy9MaXN0R3JpZENhcmQvTGlzdEdyaWRDYXJkJztcbmltcG9ydCBMYWJlbEdyb3VwIGZyb20gJ2NvbXBvbmVudHMvVWlFbGVtZW50cy9MYWJlbEdyb3VwL0xhYmVsR3JvdXAnO1xuaW1wb3J0IFNpdGVzIGZyb20gJ2NvbXBvbmVudHMvVWlFbGVtZW50cy9TaXRlcy9TaXRlcyc7XG5pbXBvcnQgUHJvZHVjdFZpZXdzIGZyb20gJ2NvbnRhaW5lcnMvV2lkZ2V0cy9Qcm9kdWN0Vmlld3MnO1xuaW1wb3J0IFByb2R1Y3RzQmFyIGZyb20gJ2NvbnRhaW5lcnMvV2lkZ2V0cy9Qcm9kdWN0c0Jhcic7XG5pbXBvcnQgVmlld3MgZnJvbSAnY29udGFpbmVycy9XaWRnZXRzL1ZpZXdzJztcbmltcG9ydCBDYXNoRmxvdyBmcm9tICdjb250YWluZXJzL1dpZGdldHMvQ2FzaEZsb3cnO1xuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tICdhcG9sbG8vY2xpZW50JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IHByb2R1Y3RzQmFyT3B0aW9ucyA9IFtcblx0e1xuXHRcdGNvbG9yOiAnI0ZGMDA4MCcsXG5cdFx0bGFiZWw6ICdCYW5hbmEnLFxuXHR9LFxuXHR7XG5cdFx0Y29sb3I6ICcjNzkyOENBJyxcblx0XHRsYWJlbDogJ09yYW5nZScsXG5cdH0sXG5cdHtcblx0XHRjb2xvcjogJyMwMDcwRjMnLFxuXHRcdGxhYmVsOiAnQmx1ZWJlcnJ5Jyxcblx0fSxcbl07XG5jb25zdCBHRVRfREFTSEJPQVJEID0gZ3FsYFxuXHRxdWVyeSB7XG5cdFx0ZGFzaGJvYXJkIHtcblx0XHRcdHJlY2VudEFwcHMge1xuXHRcdFx0XHRpZFxuXHRcdFx0XHRuYW1lXG5cdFx0XHRcdGltYWdlXG5cdFx0XHRcdGRlc2NyaXB0aW9uXG5cdFx0XHR9XG5cdFx0XHRwcm9kdWN0Vmlld3Mge1xuXHRcdFx0XHRjYXRlZ29yaWVzXG5cdFx0XHRcdHByb2R1Y3RzXG5cdFx0XHRcdHZpZXdzXG5cdFx0XHR9XG5cdFx0XHRwcm9kdWN0c0JhciB7XG5cdFx0XHRcdGxhYmVsc1xuXHRcdFx0XHRwcm9kdWN0c1xuXHRcdFx0fVxuXHRcdFx0Y2FzaEZsb3cge1xuXHRcdFx0XHRjYXRlZ29yaWVzXG5cdFx0XHRcdGNhc2hcblx0XHRcdH1cblx0XHR9XG5cdH1cbmA7XG5jb25zdCBIb21lOiBOZXh0UGFnZTx7fT4gPSAoKSA9PiB7XG5cdGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoR0VUX0RBU0hCT0FSRCwge1xuXHRcdG5vdGlmeU9uTmV0d29ya1N0YXR1c0NoYW5nZTogdHJ1ZSxcblx0fSk7XG5cdGlmICghZGF0YSkgcmV0dXJuIG51bGw7XG5cdGNvbnN0IHsgcHJvZHVjdFZpZXdzLCByZWNlbnRBcHBzLCBwcm9kdWN0c0JhciwgY2FzaEZsb3cgfSA9IGRhdGEuZGFzaGJvYXJkO1xuXHRyZXR1cm4gKFxuXHRcdDxDb250YWluZXI+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPiBJTlNULjwvdGl0bGU+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8QmxvY2tcblx0XHRcdFx0bWFyZ2luTGVmdD17Jy04cHgnfVxuXHRcdFx0XHRtYXJnaW5SaWdodD17Jy04cHgnfVxuXHRcdFx0XHRwYWRkaW5nVG9wPXtbJzE1cHgnLCAnMjBweCcsICczMHB4JywgJzQwcHgnXX1cblx0XHRcdD5cblx0XHRcdFx0PEdyaWQgZ3JpZENvbHVtbnM9ezEyfSBncmlkR3V0dGVycz17MH0gZ3JpZE1hcmdpbnM9ezB9PlxuXHRcdFx0XHRcdDxDZWxsIHNwYW49e1sxMiwgMTIsIDZdfT5cblx0XHRcdFx0XHRcdDxHcmlkIGdyaWRDb2x1bW5zPXsxMn0gZ3JpZEd1dHRlcnM9ezE2fSBncmlkTWFyZ2lucz17MH0+XG5cdFx0XHRcdFx0XHRcdDxDZWxsIHNwYW49e1sxMiwgNl19PlxuXHRcdFx0XHRcdFx0XHRcdDxTaXRlc1xuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMjBweCcgfX1cblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwiMjEwXCJcblx0XHRcdFx0XHRcdFx0XHRcdGljb249ezxJb0lvc01haWxVbnJlYWQgY29sb3I9XCIjZmZmZmZmXCIgc2l6ZT1cIjEuN2VtXCIgLz59XG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj1cIlVucmVhZCBPcmRlciBFbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRidG50ZXh0PVwiVmlldyByZXBvcnRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb3RhbCBtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdWaWV3IHJlcG9ydCBvZiB1bnJlYWQgZW1haWwuJyl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9DZWxsPlxuXHRcdFx0XHRcdFx0XHQ8Q2VsbCBzcGFuPXtbMTIsIDZdfT5cblx0XHRcdFx0XHRcdFx0XHQ8U2l0ZXNcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj1cIiMwMDcwRjNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCIxOThcIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PElvTWRDYXJ0IGNvbG9yPVwiI2ZmZmZmZlwiIHNpemU9XCIxLjdlbVwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249XCJQZW5kaW5nIE9yZGVyc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRidG50ZXh0PVwiVmlldyByZXBvcnRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJUb3RhbCBvcmRlcnNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ1ZpZXcgcmVwb3J0IG9mIHBlbmRpbmcgb3JkZXJzLicpfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvQ2VsbD5cblx0XHRcdFx0XHRcdFx0PENlbGwgc3Bhbj17WzEyLCA2XX0+XG5cdFx0XHRcdFx0XHRcdFx0PFNpdGVzXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9XCIjM0FBNzZEXCJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwiJDIxME1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17PEZhQ2hhcnRMaW5lIGNvbG9yPVwiI2ZmZmZmZlwiIHNpemU9XCIxLjZlbVwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249XCJZZWFybHkgSW5jb21lXCJcblx0XHRcdFx0XHRcdFx0XHRcdGJ0bnRleHQ9XCJWaWV3IHJlcG9ydFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlllYXJseSBpbmNvbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ1ZpZXcgcmVwb3J0IG9mIHllYXJseSBpbmNvbWUuJyl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9DZWxsPlxuXHRcdFx0XHRcdFx0XHQ8Q2VsbCBzcGFuPXtbMTIsIDZdfT5cblx0XHRcdFx0XHRcdFx0XHQ8U2l0ZXNcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj1cIiM3OTI4Q0FcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCIkMjEwTVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uPXs8RmFNb25leUNoZWNrQWx0IGNvbG9yPVwiI2ZmZmZmZlwiIHNpemU9XCIxLjZlbVwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249XCJUb3RhbCBTcGVudFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRidG50ZXh0PVwiVmlldyByZXBvcnRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJQcmV2aW91cyBtb250aFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnVmlldyByZXBvcnQgb2YgcHJldmlvdXMgbW9udGguJyl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9DZWxsPlxuXHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdDwvQ2VsbD5cblx0XHRcdFx0XHQ8Q2VsbCBzcGFuPXtbMTIsIDEyLCA2XX0+XG5cdFx0XHRcdFx0XHQ8R3JpZCBncmlkR3V0dGVycz17MTZ9IGdyaWRNYXJnaW5zPXswfT5cblx0XHRcdFx0XHRcdFx0PENlbGwgc3Bhbj17MTJ9PlxuXHRcdFx0XHRcdFx0XHRcdDxDYXJkXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cIlByb2R1Y3QgVmlld1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRvdmVycmlkZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0Um9vdDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyAkdGhlbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyVG9wQ29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckJvdHRvbUNvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJMZWZ0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJveFNoYWRvdzogJHRoZW1lLmxpZ2h0aW5nLnNoYWRvdzQwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiAnMzEycHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcyMHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0VGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZTogKHsgJHRoZW1lIH0pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLiR0aGVtZS50eXBvZ3JhcGh5LmZvbnQyNTAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRCb2R5OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pbkhlaWdodDogJzI2MHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFN0eWxlZEJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxQcm9kdWN0Vmlld3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yaWVzPXtwcm9kdWN0Vmlld3MuY2F0ZWdvcmllc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9kdWN0cz17cHJvZHVjdFZpZXdzLnByb2R1Y3RzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdzPXtwcm9kdWN0Vmlld3Mudmlld3N9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1N0eWxlZEJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdFx0XHQ8L0NlbGw+XG5cdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0PC9DZWxsPlxuXHRcdFx0XHQ8L0dyaWQ+XG5cblx0XHRcdFx0PEdyaWQgZ3JpZENvbHVtbnM9ezEyfSBncmlkR3V0dGVycz17MTZ9IGdyaWRNYXJnaW5zPXswfT5cblx0XHRcdFx0XHQ8Q2VsbCBzcGFuPXtbMTIsIDEyLCA0XX0+XG5cdFx0XHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIlByb2R1Y3QgTGlzdFwiXG5cdFx0XHRcdFx0XHRcdG92ZXJyaWRlcz17e1xuXHRcdFx0XHRcdFx0XHRcdFJvb3Q6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyAkdGhlbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclRvcENvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tQ29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyTGVmdENvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJveFNoYWRvdzogJHRoZW1lLmxpZ2h0aW5nLnNoYWRvdzQwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICR0aGVtZS5zaXppbmcuc2NhbGU3MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0VGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyAkdGhlbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLiR0aGVtZS50eXBvZ3JhcGh5LmZvbnQyNTAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0Qm9keToge1xuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW5IZWlnaHQ6ICczNzJweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxTdHlsZWRCb2R5PlxuXHRcdFx0XHRcdFx0XHRcdDxQcm9kdWN0c0JhclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGFkZGluZy1jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVscz17cHJvZHVjdHNCYXIubGFiZWxzfVxuXHRcdFx0XHRcdFx0XHRcdFx0cHJvZHVjdHM9e3Byb2R1Y3RzQmFyLnByb2R1Y3RzfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0XHQ8TGFiZWxHcm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogJy02NnB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtcz17cHJvZHVjdHNCYXJPcHRpb25zfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvU3R5bGVkQm9keT5cblx0XHRcdFx0XHRcdDwvQ2FyZD5cblx0XHRcdFx0XHQ8L0NlbGw+XG5cdFx0XHRcdFx0PENlbGwgc3Bhbj17WzEyLCAxMiwgNF19PlxuXHRcdFx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdFx0dGl0bGU9XCJSZWNlbnQgYXBwc1wiXG5cdFx0XHRcdFx0XHRcdG92ZXJyaWRlcz17e1xuXHRcdFx0XHRcdFx0XHRcdFJvb3Q6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyAkdGhlbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclRvcENvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tQ29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyTGVmdENvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJveFNoYWRvdzogJHRoZW1lLmxpZ2h0aW5nLnNoYWRvdzQwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICcxMHB4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW5IZWlnaHQ6ICc0MDhweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0VGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyAkdGhlbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLiR0aGVtZS50eXBvZ3JhcGh5LmZvbnQyNTAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxTdHlsZWRCb2R5PlxuXHRcdFx0XHRcdFx0XHRcdHtyZWNlbnRBcHBzLm1hcCgoaXRlbTogYW55KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEdyaWRDYXJkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aXRlbS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImxpc3RcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aHVtYj17aXRlbS5pbWFnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e2l0ZW0ubmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogJzI1cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0PC9TdHlsZWRCb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDwvQ2VsbD5cblx0XHRcdFx0XHQ8Q2VsbCBzcGFuPXtbMTIsIDEyLCA0XX0+XG5cdFx0XHRcdFx0XHQ8Q2FyZFxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIkF2ZXJhZ2UgVmlld1wiXG5cdFx0XHRcdFx0XHRcdG92ZXJyaWRlcz17e1xuXHRcdFx0XHRcdFx0XHRcdFJvb3Q6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyAkdGhlbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclRvcENvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyQm90dG9tQ29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ym9yZGVyTGVmdENvbG9yOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJveFNoYWRvdzogJHRoZW1lLmxpZ2h0aW5nLnNoYWRvdzQwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206ICR0aGVtZS5zaXppbmcuc2NhbGU3MDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0VGl0bGU6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyAkdGhlbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLiR0aGVtZS50eXBvZ3JhcGh5LmZvbnQyNTAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0Q29udGVudHM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluSGVpZ2h0OiAnMzcycHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkQm9keT5cblx0XHRcdFx0XHRcdFx0XHQ8Vmlld3MgY2xhc3NOYW1lPVwicGFkZGluZy1jb250cm9sXCIgdG90YWxWaWV3PXs3NX0gLz5cblx0XHRcdFx0XHRcdFx0PC9TdHlsZWRCb2R5PlxuXHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdDwvQ2VsbD5cblx0XHRcdFx0PC9HcmlkPlxuXG5cdFx0XHRcdDxHcmlkIGdyaWRDb2x1bW5zPXsxMn0gZ3JpZEd1dHRlcnM9ezE2fSBncmlkTWFyZ2lucz17MH0+XG5cdFx0XHRcdFx0PENlbGwgc3Bhbj17MTJ9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXNoLWZsb3dcIj5cblx0XHRcdFx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cIkNhc2ggRmxvd1wiXG5cdFx0XHRcdFx0XHRcdFx0b3ZlcnJpZGVzPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRSb290OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyAkdGhlbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJUb3BDb2xvcjogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlclJpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b21Db2xvcjogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlckxlZnRDb2xvcjogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJveFNoYWRvdzogJHRoZW1lLmxpZ2h0aW5nLnNoYWRvdzQwMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFRpdGxlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiAoeyAkdGhlbWUgfSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi4kdGhlbWUudHlwb2dyYXBoeS5mb250MjUwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0Qm9keToge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtaW5IZWlnaHQ6ICcyMDBweCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxTdHlsZWRCb2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENhc2hGbG93XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhdGVnb3JpZXM9e2Nhc2hGbG93LmNhdGVnb3JpZXN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2g9e2Nhc2hGbG93LmNhc2h9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvU3R5bGVkQm9keT5cblx0XHRcdFx0XHRcdFx0PC9DYXJkPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9DZWxsPlxuXHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHQ8L0Jsb2NrPlxuXHRcdDwvQ29udGFpbmVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhIb21lKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L3JlYWN0L3NzclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYXNldWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFzZXVpL2Jsb2NrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhc2V1aS9jYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhc2V1aS9sYXlvdXQtZ3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwZXhjaGFydHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==