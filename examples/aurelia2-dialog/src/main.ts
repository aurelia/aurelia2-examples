import Aurelia from 'aurelia';
import {  DefaultDialogGlobalSettings, DialogConfiguration, DialogDefaultConfiguration } from '@aurelia/dialog';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

import 'bootstrap/dist/css/bootstrap.css';

Aurelia    
.register(
  RouterConfiguration.customize({
    useUrlFragmentHash: false,
  }))
  .register(DialogDefaultConfiguration)
  .app(MyApp)
  .start();