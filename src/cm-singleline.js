import MjText from 'mjml-text';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
    'mj-column': ['cm-singleline'],
    'mj-hero': ['cm-singleline'],
    'mj-text': ['cm-singleline'],
    'cm-singleline': [],
});

class CmSingleline extends MjText {
    static allowedAttributes = {
        label: 'string',
        repeatertitle: 'string',
    };

    renderContent() {
        return `<singleline ${this.htmlAttributes({
            label: this.getAttribute('label'),
            repeatertitle: this.getAttribute('repeatertitle'),
        })}>${this.getContent()}</singleline>`;
    }
}

export default CmSingleline;
