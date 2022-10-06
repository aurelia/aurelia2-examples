import { EmotionCustomAttribute } from './resources/custom-attributes/emotion';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .register(EmotionCustomAttribute)
  .app(MyApp)
  .start();