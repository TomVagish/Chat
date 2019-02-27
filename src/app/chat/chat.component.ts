import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  username = 'user';
  messegeContent: string;
  allMessages: string[] = [];

  constructor(private chat: ChatService) { }


  ngOnInit() {

    this.chat.getMessages()
      .subscribe((message) => {
     this.allMessages.push(message);

      });
      }





  sendMessage(event) {
    if (event.key === 'Enter') {
      this.chat.sendMessage(this.messegeContent);
      this.messegeContent = null;

    }

  }
}
