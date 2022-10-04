import { CustomElement } from 'aurelia';
import { render } from './helper';
import { MyApp } from '../src/my-app';

describe('my-app', () => {
  it('should render message', async () => {
    const node = (await render('<my-app></my-app>', MyApp)).firstElementChild;
    // In Shadow DOM open mode, shadowRoot is also accessible through DOM API
    //   node.shadowRoot
    // But only Aurelia API can access shadowRoot in both open and closed mode.
    const shadowRoot = CustomElement.for(node).shadowRoot;
    const text = (shadowRoot as Node).textContent;
    expect(text.trim()).toBe('Hello World!');
  });
});
