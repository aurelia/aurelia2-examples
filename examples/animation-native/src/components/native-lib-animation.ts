import { animate, stagger } from 'motion';

export class NativeLibAnimation {

  rotate(element: HTMLElement) {
    const animation = animate(
      element,
      { transform: "rotate(45deg)" },
      { duration: 0.5 }
    );
  }

  seesaw(element: HTMLElement) {
    const animation = animate(
      element,
      { rotate: 90 },
      {
        duration: 0.5,
        easing: "ease-in-out",
        repeat: 3,
        direction: "alternate"
      }
    );
  }
  
  staggerElements(selector: string) {
    const animation = animate(
      selector,
      { x: 200 },
      {
        delay: stagger(0.1),
        duration: 0.5,
        easing: [.22, .03, .26, 1],
      }
    );
  }

}
