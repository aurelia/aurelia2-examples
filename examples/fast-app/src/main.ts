import Aurelia, { AppTask, DialogConfiguration, DialogService, IAttrMapper, IContainer, NodeObserverLocator } from 'aurelia';
import { MyApp } from './my-app';
import { FASTAdapter, FASTDialogGlobalSettings, FASTDialogRenderer } from 'aurelia-fast-adapter';

import { 
  provideFASTDesignSystem, 
  fastCard, 
  fastDialog,
  fastTextField,
  fastTreeView,
  fastTabs,
  fastButton,
  fastTreeItem
} from '@microsoft/fast-components';



Aurelia.register(AppTask.creating(IContainer, container => {
  const attrMapper = container.get(IAttrMapper);
  const nodeObserverLocator = container.get(NodeObserverLocator);
  attrMapper.useTwoWay((el, property) => {
    switch (el.tagName) {
      case 'FAST-SLIDER':
      case 'FAST-TEXT-FIELD':
      case 'FAST-TEXT-AREA':
        return property === 'value';
      case 'FAST-CHECKBOX':
      case 'FAST-RADIO':
      case 'FAST-RADIO-GROUP':
      case 'FAST-SWITCH':
        return property === 'checked';
      case 'FAST-TABS':
        return property === 'activeid';
      default:
        return false;
    }
  });

  // Teach Aurelia what events to use to observe properties of elements.
  // Because FAST components all use a single change event to notify,
  // we can use a single common object
  const valuePropertyConfig = { events: ['input', 'change'] };
  nodeObserverLocator.useConfig({
    'FAST-CHECKBOX': {
      checked: valuePropertyConfig
    },
    'FAST-RADIO': {
      checked: valuePropertyConfig
    },
    'FAST-RADIO-GROUP': {
      value: valuePropertyConfig
    },
    'FAST-SLIDER': {
      value: valuePropertyConfig
    },
    'FAST-SWITCH': {
      checked: valuePropertyConfig
    },
    'FAST-TABS': {
      activeid: valuePropertyConfig
    },
    'FAST-TEXT-FIELD': {
      value: valuePropertyConfig
    },
    'FAST-TEXT-AREA': {
      value: valuePropertyConfig
    }
  });
}))
.register(DialogConfiguration.customize((settings: FASTDialogGlobalSettings) => {
  settings.startingZIndex = 3;
  settings.prefix = 'ecos';
  //settings.hiddenFirst = true;
}, [DialogService, FASTDialogRenderer, FASTDialogGlobalSettings]))
  .app(MyApp)
  .start();

  provideFASTDesignSystem()    
    .register(
        fastCard(),
        fastTextField(),
        fastTreeView(),
        fastTreeItem(),
        fastDialog(),
        fastTabs(),
        fastButton()
    );