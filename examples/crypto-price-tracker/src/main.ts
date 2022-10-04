import Aurelia, { StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';

import bootstrap from 'bootstrap/dist/css/bootstrap.css';

Aurelia
  .register(StyleConfiguration.shadowDOM({
    // optionally add the shared styles for all components
    sharedStyles: [bootstrap]
  }))
  .app(MyApp)
  .start();