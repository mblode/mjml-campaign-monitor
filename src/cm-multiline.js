import MjText from 'mjml-text';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
    'mj-column': ['cm-multiline'],
    'mj-hero': ['cm-multiline'],
    'mj-text': ['cm-multiline'],
    'cm-multiline': [],
});

class CmMultiline extends MjText {
    static allowedAttributes = {
        label: 'string',
    };

    render() {
        return `<multiline${this.htmlAttributes({
            label: this.getAttribute('label'),
        })}>${this.getContent()}</multiline>`;
    }
}

export default CmMultiline;
