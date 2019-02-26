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

  messegeContent: string;
  allMessages: string[] = [];


  ngOnInit() {

this.chat.getMessages()
  .subscribe((message) => {
 this.allMessages.push(message);

  });


  }

  sendMessage() {
    this.chat.sendMessage(this.messegeContent);
    this.messegeContent = null;
  }




}
