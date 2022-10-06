import { watch } from '@aurelia/runtime-html';

export class HomePage {
  private name = '';
  private name2 = '';

  private console = [];
  private items = [];
  private items2 = [];

  @watch('name')
  nameChange(newName, oldName) {
    if (newName !== oldName) {
      this.console.unshift(`Name changed from ${oldName} to ${newName}`);
    }
  }

  // Watch the length property of the items array
  @watch((vm: HomePage) => vm.items.length)
  itemsChange(newLength, oldLength) {
    this.console.unshift(`Items length changed from ${oldLength} to ${newLength}`);
  }

  // We can use computed functions to watch properties
  // The same can be written as @watch('name2')
  @watch((vm: HomePage) => vm.name2)
  watchForRob(newName, oldName) {
    if (newName.trim() === 'Rob') {
      this.console.unshift('Rob is watching you!');
    } 

    if (oldName === 'Rob') {
      this.console.unshift('Rob is gone!');
    }
  }

  @watch((vm: HomePage) => vm.items2.map(f => f.value).join(', '))
  items2Changed(newValue, oldValue) {
    this.console.unshift(`Items 2 changed: ${newValue}`);
  }

  add() {
    this.items.push(Math.random());
  }

  addItems2() {
    this.items2.push({ value: Math.random() });
  }
}