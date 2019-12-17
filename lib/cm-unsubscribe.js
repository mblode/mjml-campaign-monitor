'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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

var _mjmlValidator = require('mjml-validator');

var _mjmlCore = require('mjml-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
    'mj-column': ['cm-unsubscribe'],
    'mj-hero': ['cm-unsubscribe'],
    'mj-text': ['cm-unsubscribe'],
    'cm-unsubscribe': []
});

var CmUnsubscribe = function (_BodyComponent) {
    (0, _inherits3.default)(CmUnsubscribe, _BodyComponent);

    function CmUnsubscribe() {
        (0, _classCallCheck3.default)(this, CmUnsubscribe);
        return (0, _possibleConstructorReturn3.default)(this, (CmUnsubscribe.__proto__ || (0, _getPrototypeOf2.default)(CmUnsubscribe)).apply(this, arguments));
    }

    (0, _createClass3.default)(CmUnsubscribe, [{
        key: 'render',
        value: function render() {
            return '<unsubscribe>' + this.renderChildren(this.props.children) + '</unsubscribe>';
        }
    }]);
    return CmUnsubscribe;
}(_mjmlCore.BodyComponent);

exports.default = CmUnsubscribe;
module.exports = exports.default;