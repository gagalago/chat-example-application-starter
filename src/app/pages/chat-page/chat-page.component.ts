import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdCard } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'chat-page',
  directives: [MdToolbar, MdCard],
  template: `
    <md-toolbar>
      <md-toolbar-row></md-toolbar-row>
    </md-toolbar>
    
    <div class="chat-container">
      <md-card></md-card>
    </div>
  `,
  styleUrls: ['chat-page.component.css']
})
export class ChatPageComponent {

  constructor() {}
}
