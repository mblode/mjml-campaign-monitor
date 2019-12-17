"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mjmlText = _interopRequireDefault(require("mjml-text"));

var _mjmlValidator = require("mjml-validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _mjmlValidator.registerDependencies)({
  'mj-column': ['mc-text'],
  'mj-hero': ['mc-text'],
  'mc-text': []
});

class McText extends _mjmlText.default {
  isHideable() {
    if (this.getAttribute('mc:hideable') !== false) {
      return true;
    }

    return false;
  }

  renderContent(compound = false) {
    const attrs = {
      style: 'text',
      'mc:edit': this.getAttribute('mc:edit')
    };

    if (compound === false && this.isHideable()) {
      attrs['mc:hideable'] = true;
    }

    return `
      <multiline
        ${this.htmlAttributes(attrs)}
      >
        ${this.getContent()}
      </multiline>
    `;
  }

  renderContent() {
    return `
      <multiline
        ${this.htmlAttributes({
      style: 'text',
      'mc:edit': this.getAttribute('mc:edit'),
      'mc:hideable': this.getAttribute('mc:hideable') ? 'mc:hideable' : null
    })}
      >
        ${this.getContent()}
      </multiline>
    `;
  }

}

exports.default = McText;

_defineProperty(McText, "allowedAttributes", { ..._mjmlText.default.allowedAttributes,
  'mc:edit': 'string',
  'mc:hideable': 'string'
});

_defineProperty(McText, "defaultAttributes", { ..._mjmlText.default.defaultAttributes,
  'mc:hideable': false
});