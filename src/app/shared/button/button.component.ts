import { Component } from '@angular/core';
import { Context } from 'ag-grid-community';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  editButton(): void {
    console.log(this.params.context)
    this.params?.context.componentParent.edit();
  }

  delet(): void {
    this.params.context.componentParent.delet();
  }
  view(params:any) {
    this.params.context.componentParent.viewdata(this.params.data);
  }
  openModel(params:any){
    this.params.context.componentParent.openModal()
  }


}
