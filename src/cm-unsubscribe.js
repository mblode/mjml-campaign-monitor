import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-column': ['cm-unsubscribe'],
    'mj-hero': ['cm-unsubscribe'],
    'mj-text': ['cm-unsubscribe'],
    'cm-unsubscribe': [],
});

class CmUnsubscribe extends BodyComponent {
    render() {
        return `<unsubscribe>${this.getContent()}</unsubscribe>`;
    }
}

export default CmUnsubscribe;
