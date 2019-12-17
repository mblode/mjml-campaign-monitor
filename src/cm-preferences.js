import { registerDependencies } from 'mjml-validator';
import { BodyComponent } from 'mjml-core';

registerDependencies({
    'mj-column': ['cm-preferences'],
    'mj-hero': ['cm-preferences'],
    'mj-text': ['cm-preferences'],
    'cm-preferences': [],
});

export default class CmPreferences extends BodyComponent {
    render() {
        return `<preferences>${this.renderChildren(this.props.children)}</preferences>`;
    }
}
