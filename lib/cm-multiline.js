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
    'mj-column': ['cm-multiline'],
    'mj-hero': ['cm-multiline'],
    'cm-multiline': []
});

var CmMultiline = (_temp = _class = function (_MjText) {
    (0, _inherits3.default)(CmMultiline, _MjText);

    function CmMultiline() {
        (0, _classCallCheck3.default)(this, CmMultiline);
        return (0, _possibleConstructorReturn3.default)(this, (CmMultiline.__proto__ || (0, _getPrototypeOf2.default)(CmMultiline)).apply(this, arguments));
    }

    (0, _createClass3.default)(CmMultiline, [{
        key: 'render',
        value: function render() {
            return '<div ' + this.htmlAttributes({ style: 'text' }) + '><multiline ' + this.htmlAttributes({
                label: this.getAttribute('label')
            }) + '>' + this.getContent() + '</multiline></div>';
        }
    }]);
    return CmMultiline;
}(_mjmlText2.default), _class.allowedAttributes = (0, _extends3.default)({}, _mjmlText2.default.allowedAttributes, {
    label: 'string'
}), _class.defaultAttributes = (0, _extends3.default)({}, _mjmlText2.default.defaultAttributes), _temp);
exports.default = CmMultiline;
module.exports = exports.default;