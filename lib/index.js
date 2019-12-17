"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mjmlCore = require("mjml-core");

var _cmImage = _interopRequireDefault(require("./cm-image"));

var _cmLayout = _interopRequireDefault(require("./cm-layout"));

var _cmRepeater = _interopRequireDefault(require("./cm-repeater"));

var _cmUnsubscribe = _interopRequireDefault(require("./cm-unsubscribe"));

var _cmSingleline = _interopRequireDefault(require("./cm-singleline"));

var _cmMultiline = _interopRequireDefault(require("./cm-multiline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlCore.registerComponent)(_cmImage.default);
(0, _mjmlCore.registerComponent)(_cmLayout.default);
(0, _mjmlCore.registerComponent)(_cmRepeater.default);
(0, _mjmlCore.registerComponent)(_cmUnsubscribe.default);
(0, _mjmlCore.registerComponent)(_cmSingleline.default);
(0, _mjmlCore.registerComponent)(_cmMultiline.default);
var _default = {
  CmImage: _cmImage.default,
  CmLayout: _cmLayout.default,
  CmRepeater: _cmRepeater.default,
  CmUnsubscribe: _cmUnsubscribe.default,
  CmSingleline: _cmSingleline.default,
  CmMultiline: _cmMultiline.default
};
exports.default = _default;