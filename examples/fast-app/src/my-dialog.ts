import { IDialogController } from "aurelia";

export class MyDialog
{
    valueFromDialog: string = '';
    
    constructor(@IDialogController private dialogController: IDialogController) 
    {
        
        
    }

    cancel()
    {
        this.dialogController.cancel();
    }

    accept()
    {
        this.dialogController.ok({ valueFromDialog: this.valueFromDialog });
    }
    
}