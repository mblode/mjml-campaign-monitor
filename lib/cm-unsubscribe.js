"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mjmlText = _interopRequireDefault(require("mjml-text"));

var _mjmlValidator = require("mjml-validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mjmlValidator.registerDependencies)({
  'mj-column': ['mc-text'],
  'mj-hero': ['mc-text'],
  'mc-text': []
});

class McText extends _mjmlText.default {
  renderContent() {
    return `
      <unsubscribe>
        ${this.getContent()}
      </unsubscribe>
    `;
  }

}

exports.default = McText;