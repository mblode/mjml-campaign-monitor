import { registerDependencies } from 'mjml-validator';
import MjText from 'mjml-text';

registerDependencies({
    'mj-column': ['cm-preferences'],
    'mj-hero': ['cm-preferences'],
    'cm-preferences': [],
});

export default class CmPreferences extends MjText {
    static allowedAttributes = {
        ...MjText.allowedAttributes,
    };

    static defaultAttributes = {
        ...MjText.defaultAttributes,
    };

    render() {
        return `<div ${this.htmlAttributes({ style: 'text' })}><preferences>${this.getContent()}</preferences></div>`;
    }
}
