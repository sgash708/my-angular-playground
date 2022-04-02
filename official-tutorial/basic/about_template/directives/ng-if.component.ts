import { Component } from '@angular/core';

@Component({
  selector: 'hello-ng-if',
  templateUrl: './ng-if.component.html'
})
export class HelloWorldNgIfComponent {
  message: string = 'im read only';
  canEdit: boolean = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    this.message = this.canEdit ? 'you can edit me' : 'im read only'; 
  }
}
