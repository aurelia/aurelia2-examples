export class NotesComponent {
    notes = [
        'Complete Aurelia 2 dashboard tutorial. It is quite long, so remember you need to take breaks'
    ];
    note = '';

    addNote(): void {
        this.notes.unshift(this.note);
        this.note = '';
    }

    removeNote(index: number): void {
        this.notes.splice(index, 1);
    }
}