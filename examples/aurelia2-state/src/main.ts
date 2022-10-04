import Aurelia from 'aurelia';
import { MyApp } from './my-app';

import { StateDefaultConfiguration } from '@aurelia/state';

import { initialState } from './initial-state';
import { keywordsHandler } from './state-actions';

Aurelia
  .register(
    StateDefaultConfiguration.init(
      initialState,
      keywordsHandler
    )
  )
  .app(MyApp)
  .start();