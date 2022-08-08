"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.bizCssPrefix = exports.MySelect = exports.ColorfulInput = exports.ColorfulButton = void 0;

var _colorfulButton = _interopRequireDefault(require("./components/colorful-button"));

exports.ColorfulButton = _colorfulButton["default"];

var _colorfulInput = _interopRequireDefault(require("./components/colorful-input"));

exports.ColorfulInput = _colorfulInput["default"];

var _mySelect = _interopRequireDefault(require("./components/my-select"));

exports.MySelect = _mySelect["default"];
var bizCssPrefix = 'bizpack';
exports.bizCssPrefix = bizCssPrefix;