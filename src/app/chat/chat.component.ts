import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {
  username = 'Guest';
  messegeContent: string;
  allMessages: string[] = [];
  usernameFlag = false;



  constructor(private chat: ChatService) { }


  ngOnInit() {

    this.chat.getMessages()
      .subscribe((message) => {
     this.allMessages.push(message);

      });
      }


      saveUserName() {
        this.usernameFlag = true;
      }




  sendMessage(event) {
    if (event.key === 'Enter') {
      this.chat.sendMessage(this.messegeContent);
      this.messegeContent = null;

    }

  }
}
