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

var _mjmlValidator = require('mjml-validator');

var _mjmlCore = require('mjml-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
    'mj-body': ['cm-repeater'],
    'mj-column': ['cm-repeater'],
    'cm-repeater': ['mj-section', 'mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-raw', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar', 'cm-image', 'cm-layout']
});

var CmRepeater = function (_BodyComponent) {
    (0, _inherits3.default)(CmRepeater, _BodyComponent);

    function CmRepeater() {
        (0, _classCallCheck3.default)(this, CmRepeater);
        return (0, _possibleConstructorReturn3.default)(this, (CmRepeater.__proto__ || (0, _getPrototypeOf2.default)(CmRepeater)).apply(this, arguments));
    }

    (0, _createClass3.default)(CmRepeater, [{
        key: 'render',
        value: function render() {
            return '<repeater>' + this.renderChildren(this.props.children) + '</repeater>';
        }
    }]);
    return CmRepeater;
}(_mjmlCore.BodyComponent);

exports.default = CmRepeater;
module.exports = exports.default;