import { newInstanceForScope } from '@aurelia/kernel';
import { BaseValidationRule, IValidateable, IValidationRules } from '@aurelia/validation';
import { IValidationController } from '@aurelia/validation-html';

class Person {
  public constructor(public name?: string, public age?: number) {}
}

class DogValidationRule extends BaseValidationRule {
  constructor() {
    super();
  }


  public execute(_value: string, _object?: IValidateable<any>) {
    return _value?.toLowerCase().includes('dog');
  }
}

class HexColorRule extends BaseValidationRule {
  constructor() {
    super();
  }


  public execute(_value: string, _object?: IValidateable<any>) {
    const condition = /^#([0-9a-f]{3}){1,2}$/i;
    return condition.test(_value);
  }
}

export class CustomRules {
  private person: Person;

  public constructor(
    @newInstanceForScope(IValidationController)
    private validationController: IValidationController,
    @IValidationRules validationRules: IValidationRules
  ) {
    this.person = new Person();

    validationRules
      .on(this.person)
      .ensure('name')
      .required()
      .satisfiesRule(new DogValidationRule())
      .withMessage("${$displayName} does not contain the word dog")
      .ensure('age')
      .required()
      .min(18)
      .ensure('color')
      .satisfiesRule(new HexColorRule())
  }

  public async submit() {
    const result = await this.validationController.validate();

    if (result.valid) {
      alert('Form is valid');
    }
  }
}
