import { ICustomElementViewModel } from 'aurelia';
import { I18N } from '@aurelia/i18n';

export class LanguageSwitcher implements ICustomElementViewModel {
    constructor(@I18N private readonly i18n: I18N) {
        const currentLocale = this.i18n.getLocale();
    }

    public async changeLocale(locale: string) {
        await this.i18n.setLocale(locale);

        console.log(this.i18n.getLocale());
    }
}