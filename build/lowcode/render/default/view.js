!function e(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.BizComps=r():t.BizComps=r()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function t(){return e.default}:function t(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=window.React},function(e,t){e.exports=window.Next},function(e,t,r){e.exports=r(7)},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){})),r.d(t,"ColorfulButton",(function(){return s})),r.d(t,"ColorfulInput",(function(){return S})),r.d(t,"MyInput",(function(){return N})),r.d(t,"bizCssPrefix",(function(){return T}));var n={};r.r(n),r.d(n,"ColorfulButton",(function(){return s})),r.d(n,"ColorfulInput",(function(){return S})),r.d(n,"MyInput",(function(){return N})),r.d(n,"bizCssPrefix",(function(){return T}));var o=r(0),u=r(1),c=r(3),i=["type","color","style"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r=a(e,t),n,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function a(e,t){if(null==e)return{};var r={},n=Object.keys(e),o,u;for(u=0;u<n.length;u++)o=n[u],t.indexOf(o)>=0||(r[o]=e[o]);return r}var y=function e(t){var r=t.type,n=void 0===r?"primary":r,c=t.color,f=t.style,p=void 0===f?{}:f,a=b(t,i),y=p||{};c&&(y.backgroundColor=c);var O=a||{};return O.style=y,Object(o.createElement)(u.Button,l({type:n},O),"fusion button")};y.displayName="ColorfulButton";var O,s=y,j=r(4),d=["color","style"];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r=w(e,t),n,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function w(e,t){if(null==e)return{};var r={},n=Object.keys(e),o,u;for(u=0;u<n.length;u++)o=n[u],t.indexOf(o)>=0||(r[o]=e[o]);return r}var x,h,S=function e(t){var r=t.color,n=t.style,c=void 0===n?{}:n,i=m(t,d),f=c||{};r&&(f.backgroundColor=r);var l=i||{};return l.style=f,Object(o.createElement)(u.Input,g({},l))},C=r(5),D=["color","style"];function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(e,t){if(null==e)return{};var r=z(e,t),n,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function z(e,t){if(null==e)return{};var r={},n=Object.keys(e),o,u;for(u=0;u<n.length;u++)o=n[u],t.indexOf(o)>=0||(r[o]=e[o]);return r}var M,_,N=function e(t){var r=t.color,n=t.style,c=void 0===n?{}:n,i=B(t,D),f=c||{};r&&(f.backgroundColor=r);var l=i||{};return l.style=f,Object(o.createElement)(u.Input,k({},l))},T="bizpack",R=r(6),q={},A="BizComps",F=!0;function G(e,t){return e.default?e.default:e[t]?e[t]:e}}])}));