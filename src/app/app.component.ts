import { Component } from '@angular/core';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [ChatPageComponent],
  template: `
    <chat-page></chat-page>
  `
})
export class AppComponent {
  
}
