import { INode } from 'aurelia';

export class AccessShadowDom {
    public shadowRoot: ShadowRoot;
    public childShadowRoot: ShadowRoot;

    // We'll populate this by querying a child component
    private childText = '';

    constructor(@INode readonly element: HTMLElement) {

    }

    public attached() {
        // Get the shadowRoot of this routeable view
        // we have to query using the name of this component due to how the router handles ShadowDOM
        this.shadowRoot = this.element.querySelector('access-shadow-dom').shadowRoot;

        // Get the shadowRoot of our child component
        this.childShadowRoot = this.shadowRoot.querySelector('access-child-component').shadowRoot;

        if (this.childShadowRoot) {
            const h4 = this.childShadowRoot.querySelector('h4');
            
            if (h4) {
                this.childText = h4.textContent;
            }
        }
    }
}