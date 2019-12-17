import MjText from 'mjml-text';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
    'mj-column': ['cm-unsubscribe'],
    'mj-hero': ['cm-unsubscribe'],
    'mj-text': ['cm-unsubscribe'],
    'cm-unsubscribe': [],
});

class CmUnsubscribe extends MjText {
    renderContent() {
        return `<unsubscribe>${this.getContent()}</unsubscribe>`;
    }
}

export default CmUnsubscribe;
