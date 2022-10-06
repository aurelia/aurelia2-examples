import Aurelia, { attributePattern } from 'aurelia';
import { AttrSyntax } from '@aurelia/runtime-html';
import { RouterConfiguration } from '@aurelia/router';
import { MyApp } from './my-app';

import 'bootstrap/dist/css/bootstrap.css';

@attributePattern({ pattern: ':PART', symbols: ':' })
export class VueBindAttributePattern {
  public [':PART'](rawName: string, rawValue: string, parts: string[]): AttrSyntax {
    return new AttrSyntax(rawName, rawValue, parts[0], 'bind');
  }
}

@attributePattern({ pattern: '@PART', symbols: '@' })
export class AngularTriggerAttributePattern {
  public ['@PART'](rawName: string, rawValue: string, parts: string[]): AttrSyntax {
    return new AttrSyntax(rawName, rawValue, parts[0], 'trigger');
  }
}

@attributePattern({ pattern: '[(PART)]', symbols: '[()]' })
export class BananaInBoxAttributePattern {
  public ['[(PART)]'](name, value, [target]) {
    return new AttrSyntax(name, value, target, 'two-way');
  }
}

Aurelia
  .register(
    VueBindAttributePattern,
    AngularTriggerAttributePattern,
    BananaInBoxAttributePattern,
    RouterConfiguration.customize({
      useUrlFragmentHash: false,
    })
  )
  .app(MyApp)
  .start();