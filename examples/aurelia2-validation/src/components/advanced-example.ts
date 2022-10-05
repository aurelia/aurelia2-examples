import { newInstanceForScope } from '@aurelia/kernel';
import { IValidationRules } from '@aurelia/validation';
import { IValidationController } from '@aurelia/validation-html';

export class AdvancedExample {
  private person = {
    name: '',
    email: '',
    age: '',
    addresses: [],
    isVip: false,
    vipNumber: '',
  };

  public constructor(
    @newInstanceForScope(IValidationController)
    private validationController: IValidationController,
    @IValidationRules validationRules: IValidationRules
  ) {
    validationRules
      .on(this.person)
      .ensure('name')
        .required()
      .ensure('email')
        .email()
      .ensure('age')
        .min(18)
      .ensure('addresses')
        .minItems(1)
      .when((person: any) => person.isVip)
        .ensure('vipNumber')
          .minLength(5)
          .maxLength(10);
  }

  public async submit() {
    const result = await this.validationController.validate();

    if (result.valid) {
      alert('Form is valid');
    }
  }
}
