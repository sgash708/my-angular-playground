import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-bindings',
  templateUrl: 'bindings.component.html'
})
export class HelloWorldBindingsComponent {
  fontColor: string = 'blue';
  sayHelloId: number = 1;
  canClick: boolean = false;
  message: string = 'Hello, World!';

  sayMessage() {
    alert(this.message);
  }
}
