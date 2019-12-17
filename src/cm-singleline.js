import MjText from 'mjml-text';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
    'mj-column': ['mc-text'],
    'mj-hero': ['mc-text'],
    'mc-text': [],
});

export default class CmSingleline extends MjText {
    static allowedAttributes = {
        ...MjText.allowedAttributes,
        label: 'string',
        repeatertitle: 'string',
    };

    static defaultAttributes = {
        ...MjText.defaultAttributes,
    };

    renderContent() {
        return `
      <singleline
        ${this.htmlAttributes({
            style: 'text',
            label: this.getAttribute('label'),
            repeatertitle: this.getAttribute('repeatertitle'),
        })}
      >
        ${this.getContent()}
      </singleline>
    `;
    }
}
