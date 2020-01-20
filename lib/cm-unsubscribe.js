'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _mjmlValidator = require('mjml-validator');

var _mjmlText = require('mjml-text');

var _mjmlText2 = _interopRequireDefault(_mjmlText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
    'mj-column': ['cm-unsubscribe'],
    'mj-hero': ['cm-unsubscribe'],
    'cm-unsubscribe': []
});

var CmUnsubscribe = (_temp = _class = function (_MjText) {
    (0, _inherits3.default)(CmUnsubscribe, _MjText);

    function CmUnsubscribe() {
        (0, _classCallCheck3.default)(this, CmUnsubscribe);
        return (0, _possibleConstructorReturn3.default)(this, (CmUnsubscribe.__proto__ || (0, _getPrototypeOf2.default)(CmUnsubscribe)).apply(this, arguments));
    }

    (0, _createClass3.default)(CmUnsubscribe, [{
        key: 'renderContent',
        value: function renderContent() {
            return '<div ' + this.htmlAttributes({ style: 'text' }) + '><unsubscribe ' + this.htmlAttributes({ style: 'text' }) + '>' + this.getContent() + '</unsubscribe></div>';
        }
    }]);
    return CmUnsubscribe;
}(_mjmlText2.default), _class.allowedAttributes = (0, _extends3.default)({}, _mjmlText2.default.allowedAttributes), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlText2.default.defaultAttributes), _temp);
exports.default = CmUnsubscribe;
module.exports = exports.default;