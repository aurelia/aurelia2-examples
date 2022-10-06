import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

import 'bootstrap/dist/css/bootstrap.css';

Aurelia
  .register(
    RouterConfiguration.customize({
      useUrlFragmentHash: false,
    })
  )
  .app(MyApp)
  .start();