import { DialogDeactivationStatuses, IDialogService } from "@aurelia/dialog";
import { MyDialog } from "./my-dialog";

export class MyApp {
  public message = 'Hello World!';

  constructor(@IDialogService private dialogService: IDialogService) {

  }

  showDialog() {
    this.dialogService.open({
      component: () => MyDialog,
      lock: false
    }).whenClosed((response) => {
      if (response.status === DialogDeactivationStatuses.Ok) {
        const res = <{ valueFromDialog: string }>response.value;
        alert(res.valueFromDialog);
      }
    });
  }
}