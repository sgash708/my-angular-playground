import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
})
export class HelloWorldComponent {
  message = 'Hello, World!';

  sayMessage() {
    alert(this.message);
  }
}
