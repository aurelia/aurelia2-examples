export class BasicAnimation {
  private rotateAnimation: Animation;

  fadeIn(element: HTMLElement) {
    return element.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 2200,
      easing: 'linear',
    });
  }

  fadeOut(element: HTMLElement) {
    return element.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 2200,
      easing: 'linear',
    });
  }

  rotate(element: HTMLElement) {
    const animationSettings: KeyframeAnimationOptions = {
      duration: 3000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in',
    };

    const keyframes = [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(180deg)' },
    ];

    this.rotateAnimation = element.animate(keyframes, animationSettings);
  }

  flip(element: HTMLElement, offset: 'X' | 'Y' = 'Y') {
    const keyframes = [
      { transform: `rotate${offset}(0deg)` },
      { transform: `rotate${offset}(180deg)` },
    ];

    return element.animate(keyframes, {
      duration: 800,
      easing: 'linear',
    });
  }

}
