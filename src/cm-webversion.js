import { registerDependencies } from 'mjml-validator';
import MjText from 'mjml-text';

registerDependencies({
    'mj-column': ['cm-webversion'],
    'mj-hero': ['cm-webversion'],
    'cm-webversion': [],
});

export default class CmWebversion extends MjText {
    static allowedAttributes = {
        ...MjText.allowedAttributes,
    };

    static defaultAttributes = {
        ...MjText.defaultAttributes,
    };

    renderContent() {
        return `<div ${this.htmlAttributes({ style: 'text' })}><webversion ${this.htmlAttributes({ style: 'text' })}>${this.getContent()}</webversion></div>`;
    }
}
