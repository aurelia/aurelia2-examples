import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { ValidationHtmlConfiguration } from '@aurelia/validation-html';
import { MyApp } from './my-app';

Aurelia
  .register(
    RouterConfiguration.customize({
      useUrlFragmentHash: false,
    }),
    ValidationHtmlConfiguration
  )
  .app(MyApp)
  .start();