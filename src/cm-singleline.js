import { registerDependencies } from 'mjml-validator';
import MjText from 'mjml-text';

registerDependencies({
    'mj-column': ['cm-singleline'],
    'mj-hero': ['cm-singleline'],
    'mj-text': ['cm-singleline'],
    'cm-singleline': [],
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

    render() {
        return `<div ${this.htmlAttributes({ style: 'text' })}><singleline ${this.htmlAttributes({
            label: this.getAttribute('label'),
            repeatertitle: this.getAttribute('repeatertitle'),
        })}>${this.getContent()}</singleline></div>`;
    }
}
