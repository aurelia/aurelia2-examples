import { AppTask } from 'aurelia';
import { IStore } from '@aurelia/state';

export function persistentStatePlugin(stateKey: string) {
    return AppTask.creating(IStore, store => {
        // Create a subscriber which listens to all state changes and persists them to localStorage
        store.subscribe({
          handleStateChange: newState => localStorage.setItem(stateKey, JSON.stringify(newState))
        })
    });
}