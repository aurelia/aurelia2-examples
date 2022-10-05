import { newInstanceForScope } from '@aurelia/kernel';
import { IValidationRules } from '@aurelia/validation';
import { IValidationController } from '@aurelia/validation-html';

export class AdvancedExample {
  private person = {
    name: '',
    email: '',
    age: '',
    isVip: false,
    vipNumber: '',
  };

  public constructor(
    @newInstanceForScope(IValidationController)
    private validationController: IValidationController,
    @IValidationRules private validationRules: IValidationRules
  ) {
    validationRules
    .on(this.person)
    .ensure('name')
      .required()
    .ensure('email')
      .email()
      .required()
    .ensure('age')
      .min(18)
      .required()
    .when((person: any) => person.isVip)
      .ensure('vipNumber')
        .minLength(5)
        .maxLength(10)
        .required();
  }

  public async submit() {
    console.log(this.validationController);
    const result = await this.validationController.validate();

    if (result.valid) {
      alert('Form is valid');
    }
  }
}
