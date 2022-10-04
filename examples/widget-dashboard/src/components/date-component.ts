import { customElement } from 'aurelia';

@customElement({
    name: 'date-component',
    template: `<div class="component date-component"><h4>\${date}</h4></div>`
})
export class DateComponent {
    date = new Date().toDateString(); 
}