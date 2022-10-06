import Aurelia, { StyleConfiguration } from 'aurelia';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import shared from './shared.css';

Aurelia
  .register(
    StyleConfiguration.shadowDOM({
      // All of these styles will be injected into every Shadow DOM component in your app
      // Global styles do not work by design, so we need to do this
      sharedStyles: [bootstrap, shared]
    }),
    RouterConfiguration.customize({
      useUrlFragmentHash: false,
    })
  )
  .app(MyApp)
  .start();