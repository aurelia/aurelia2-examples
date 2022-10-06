import { css, cache } from "@emotion/css";
import { INode } from "aurelia";

export class EmotionCustomAttribute {
  private value;

  constructor(@INode readonly element: HTMLElement) {}

  attached() {
    const isShadow = this.element.getRootNode() instanceof ShadowRoot;

    if ( isShadow ) {
        cache.sheet.container = this.element.getRootNode() as HTMLElement;
    } else {
        cache.sheet.container = document.head;
    }

    this.element.classList.add(css(this.value));
  }
}
