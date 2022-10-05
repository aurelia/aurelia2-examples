import Aurelia from 'aurelia';
import { MyApp } from './my-app';

import { StateDefaultConfiguration } from '@aurelia/state';

import { initialState } from './initial-state';
import { todosHandler } from './state-actions';

import { persistentStatePlugin } from './persistent-state';

Aurelia
  .register(
    StateDefaultConfiguration.init(
      // We use parse any saved JSON in localStorage or we get the initial state if there is no localStorage
      JSON.parse(localStorage.getItem('todosState')) || initialState,
      todosHandler
    ),
    persistentStatePlugin('todosState')
  )
  .app(MyApp)
  .start();