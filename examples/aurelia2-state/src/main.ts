import Aurelia from 'aurelia';
import { MyApp } from './my-app';

import { StateDefaultConfiguration } from '@aurelia/state';

import { initialState } from './initial-state';
import { todosHandler } from './state-actions';

Aurelia
  .register(
    StateDefaultConfiguration.init(
      initialState,
      todosHandler
    )
  )
  .app(MyApp)
  .start();