import MjText from 'mjml-text';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
    'mj-column': ['cm-preferences'],
    'mj-hero': ['cm-preferences'],
    'mj-text': ['cm-preferences'],
    'cm-preferences': [],
});

class CmPreferences extends MjText {
    renderContent() {
        return `<preferences>${this.getContent()}</preferences>`;
    }
}

export default CmPreferences;
