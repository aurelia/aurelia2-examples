import { newInstanceForScope } from '@aurelia/kernel';
import { IValidationRules } from '@aurelia/validation';
import { IValidationController } from '@aurelia/validation-html';

class Person {
  public constructor(public name?: string, public age?: number) {}
}

export class BasicExample {
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
      .ensure('age')
      .required()
      .min(18);
  }

  public async submit() {
    const result = await this.validationController.validate();

    if (result.valid) {
      alert('Form is valid');
    }
  }
}
