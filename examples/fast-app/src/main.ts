import Aurelia from 'aurelia';
import { DialogConfiguration, DialogService }  from '@aurelia/dialog';
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



Aurelia
.register(FASTAdapter)
.register(DialogConfiguration.customize((settings: FASTDialogGlobalSettings) => {
  //settings = 3;
  settings.prefix = 'ecos';
  settings.hiddenFirst = true;
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