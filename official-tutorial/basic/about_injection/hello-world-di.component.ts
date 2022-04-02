import { Component } from '@angular/core';
import { Logger } from '../services/logger.service.ts';

@Component({
  selector: 'hello-world-di',
  templateUrl: './hello-world-di.component.ts'
})
export class HelloWorldDIComponent {
  count = 0;

  // Loggerの初期化
  constructor(private logger: Logger) {}

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
