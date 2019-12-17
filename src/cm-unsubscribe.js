import MjText from 'mjml-text';
import { registerDependencies } from 'mjml-validator';

registerDependencies({
    'mj-column': ['mc-text'],
    'mj-hero': ['mc-text'],
    'mc-text': [],
});

export default class CmUnsubscribe extends MjText {
    renderContent() {
        return `
            <unsubscribe>
                ${this.getContent()}
            </unsubscribe>
        `;
    }
}
