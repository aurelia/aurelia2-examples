import Aurelia, { DialogConfiguration, DialogService } from 'aurelia';
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