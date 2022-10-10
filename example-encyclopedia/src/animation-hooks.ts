import { lifecycleHooks } from '@aurelia/runtime-html';
import { animate } from 'motion';

@lifecycleHooks()
export class AnimationHooks {
  private element;
  private backwards = false;

  public created(vm, controller): void {
    this.element = controller.host;
    console.log(this.element);
  }

  public loading(vm, _params, _instruction, navigation) {
    this.backwards = navigation.navigation.back;
  }

  public unloading(vm, _instruction, navigation) {
    this.backwards = navigation.navigation.back;
  }

  public attaching() {
    if (this.backwards) {
        animate(this.element, { scale: 0 });
      //animateOut(this.element);
    } else {
        animate(this.element, { scale: 1 });
      //animateIn(this.element);
    }
  }

  public detaching() {
    if (this.backwards) {
        animate(this.element, { scale: 1 });
      //animateIn(this.element);
    } else {
        animate(this.element, { scale: 0 });
      //animateOut(this.element);
    }
  }
}
