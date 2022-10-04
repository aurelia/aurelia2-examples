import { RouterConfiguration } from '@aurelia/router';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .register( RouterConfiguration )
  .app(MyApp)
  .start();