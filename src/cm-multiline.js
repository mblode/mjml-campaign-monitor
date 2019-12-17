import { registerDependencies } from 'mjml-validator';
import MjText from 'mjml-text';

registerDependencies({
    'mj-column': ['cm-multiline'],
    'mj-hero': ['cm-multiline'],
    'cm-multiline': [],
});

export default class CmMultiline extends MjText {
    static allowedAttributes = {
        ...MjText.allowedAttributes,
        label: 'string',
    };

    static defaultAttributes = {
        ...MjText.defaultAttributes,
    };

    render() {
        return `<div ${this.htmlAttributes({ style: 'text' })}><multiline ${this.htmlAttributes({
            label: this.getAttribute('label'),
        })}>${this.getContent()}</multiline></div>`;
    }
}
