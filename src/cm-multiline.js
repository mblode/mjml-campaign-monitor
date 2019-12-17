import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-column': ['cm-multiline'],
    'mj-hero': ['cm-multiline'],
    'mj-text': ['cm-multiline'],
    'cm-multiline': [],
});

export default class CmMultiline extends BodyComponent {
    static allowedAttributes = {
        label: 'string',
    };

    render() {
        return `<multiline ${this.htmlAttributes({
            label: this.getAttribute('label'),
        })}>${this.getContent()}</multiline>`;
    }
}
