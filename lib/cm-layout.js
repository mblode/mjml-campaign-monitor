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

var _class, _temp;

var _mjmlCore = require('mjml-core');

var _mjmlValidator = require('mjml-validator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
    'cm-repeater': ['cm-layout'],
    'cm-layout': ['mj-section', 'mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-raw', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar', 'mj-wrapper', 'cm-image']
});

var CmLayout = (_temp = _class = function (_BodyComponent) {
    (0, _inherits3.default)(CmLayout, _BodyComponent);

    function CmLayout() {
        (0, _classCallCheck3.default)(this, CmLayout);
        return (0, _possibleConstructorReturn3.default)(this, (CmLayout.__proto__ || (0, _getPrototypeOf2.default)(CmLayout)).apply(this, arguments));
    }

    (0, _createClass3.default)(CmLayout, [{
        key: 'render',
        value: function render() {
            return '<layout ' + this.htmlAttributes({ label: this.getAttribute('label') }) + '>' + this.renderChildren(this.props.children) + '</layout>';
        }
    }]);
    return CmLayout;
}(_mjmlCore.BodyComponent), _class.allowedAttributes = {
    label: 'string'
}, _temp);
exports.default = CmLayout;
module.exports = exports.default;