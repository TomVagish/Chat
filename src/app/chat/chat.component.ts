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

  allMessages: Array<{user: string, message: string, date: string}> = [];
  usertypingArray: Array<{user: string, message: string}>;



  usernameFlag = false;
  userTypingflag = false;


  user: string;
  room: string;
  time: string;

  constructor(private chat: ChatService) { }




  ngOnInit() {





      // listen to incoming message when new user joining
      this.chat.getjoinRoom()
      .subscribe((data) => {
        this.allMessages.push(data);

      });

      // listen to incoming message when user leaving
      this.chat.userLeave()
      .subscribe((data) => {
        this.allMessages.push(data);
      });

      // listen to incoming message in room
      this.chat.getMessages()
      .subscribe((message) => {
         this.allMessages.push(message);

      });

      this.chat.usertyping()
      .subscribe((data) => {
        this.usertypingArray = data.user;
        this.userTypingflag = true;
        console.log(this.usertypingArray);
      });

      }


      saveUserName() {
        this.usernameFlag = true;
      }



    // a function that send a message in chat
  sendMessage(event) {


    if (event.key === 'Enter') {
      this.usertypingArray = null;
      this.chat.sendMessage({user: this.user, room: this.room, message: this.messegeContent});
      this.messegeContent = null;

    }
  }

  getCurrentTime() {
    const date = new Date();
     const time = date.getHours() + ':' + date.getMinutes();
     return time;
  }



  usertyping() {

    this.chat.typing({user: this.user, room: this.room });
  }

  // new user joining to room
  join() {
    const time = this.getCurrentTime();
     this.chat.joinRoom({user: this.user, room: this.room, date: time});

  }
  // user leaving room
  leave() {
    this.chat.leaveRoom({user: this.user, room: this.room});
  }

}
