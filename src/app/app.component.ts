import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { parse } from 'url';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChatService]
})
export class AppComponent implements OnInit {
  constructor(private chat: ChatService) {}
  title = 'chatClient';
  username = 'Tom';
  messegeContent: string;
  allMessages: string[] = [];


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
