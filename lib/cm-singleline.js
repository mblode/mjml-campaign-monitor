'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _mjmlText = require('mjml-text');

var _mjmlText2 = _interopRequireDefault(_mjmlText);

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
    'mj-column': ['cm-singleline'],
    'mj-hero': ['cm-singleline'],
    'mj-text': ['cm-singleline'],
    'cm-singleline': []
});

var CmSingleline = (_temp = _class = function (_MjText) {
    (0, _inherits3.default)(CmSingleline, _MjText);

    function CmSingleline() {
        (0, _classCallCheck3.default)(this, CmSingleline);
        return (0, _possibleConstructorReturn3.default)(this, (CmSingleline.__proto__ || (0, _getPrototypeOf2.default)(CmSingleline)).apply(this, arguments));
    }

    (0, _createClass3.default)(CmSingleline, [{
        key: 'renderContent',
        value: function renderContent() {
            return '\n            <singleline\n                ' + this.htmlAttributes({
                label: this.getAttribute('label'),
                repeatertitle: this.getAttribute('repeatertitle')
            }) + '\n            >\n                ' + this.getContent() + '\n            </singleline>\n        ';
        }
    }]);
    return CmSingleline;
}(_mjmlText2.default), _class.allowedAttributes = {
    label: 'string',
    repeatertitle: 'string'
}, _temp);
exports.default = CmSingleline;
module.exports = exports.default;