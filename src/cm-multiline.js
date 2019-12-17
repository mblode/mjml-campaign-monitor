import MjText from 'mjml-text';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
    'mj-column': ['mc-text'],
    'mj-hero': ['mc-text'],
    'mc-text': [],
});

export default class CmMultiline extends MjText {
    static allowedAttributes = {
        ...MjText.allowedAttributes,
        label: 'string',
    };

    static defaultAttributes = {
        ...MjText.defaultAttributes,
    };

    renderContent() {
        return `
      <multiline
        ${this.htmlAttributes({
            style: 'text',
            label: this.getAttribute('label'),
        })}
      >
        ${this.getContent()}
      </multiline>
    `;
    }
}
