import { valueConverter } from 'aurelia';

@valueConverter('currency')
export class CurrencyValueConverter {
    toView(value) {
        if (!value) {
            return value;
        }

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        return formatter.format(value);
    }
}