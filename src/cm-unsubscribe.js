import { registerDependencies } from 'mjml-validator';
import MjText from 'mjml-text';

registerDependencies({
    'mj-column': ['cm-unsubscribe'],
    'mj-hero': ['cm-unsubscribe'],
    'cm-unsubscribe': [],
});

export default class CmUnsubscribe extends MjText {
    static allowedAttributes = {
        ...MjText.allowedAttributes,
    };

    static defaultAttributes = {
        ...MjText.defaultAttributes,
    };

    renderContent() {
        return `<div ${this.htmlAttributes({ style: 'text' })}><unsubscribe>${this.getContent()}</unsubscribe></div>`;
    }
}
