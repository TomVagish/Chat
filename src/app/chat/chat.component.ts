import {Component, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';
import {NgForm} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({selector: 'app-chat',
 templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
   providers: [ChatService, AuthService]})

export class ChatComponent implements OnInit {

    messegeContent : string;

    allMessages : Array < {
        user: string,
        message: string,
        date: string
    } > = [];
    onlineUsers : Array < {
        user: string,
        message: string,
        date: string
    } > = [];
    usertypingArray : Array < {
        user: string,
        message: string
    } >;

    usernameFlag = false;
    userTypingflag = false;
    joinLeaveRoom = true;

    user: string;
    room: string;
    time: string;

    constructor(private chat: ChatService, private auth: AuthService) {}

    ngOnInit() {


        // listen to incoming message when new user joining
        this
            .chat
            .getjoinRoom()
            .subscribe((data) => {
                this
                    .onlineUsers
                    .push(data);
            });

        // listen to incoming message when user leaving
        this
            .chat
            .userLeave()
            .subscribe((data) => {
                // this.onlineUsers.push(data);

                console.log(this.onlineUsers);

            });

        // listen to incoming message in room
        this
            .chat
            .getMessages()
            .subscribe((message) => {
                this
                    .allMessages
                    .push(message);
            });

        // listen to user typing
        this
            .chat
            .usertyping()
            .subscribe((data) => {
                this.usertypingArray = data.user;
                this.userTypingflag = true;
                setTimeout(() => {
                    this.userTypingflag = false;
                }, 1000);
            });

    }

    saveUserName(form: NgForm) {
        this.user = form.value.user;
        this.usernameFlag = true;
    }

    // a function that send a message in chat
    sendMessage(event) {

        if (event.key === 'Enter') {
            this.usertypingArray = null;
            const time = this.getCurrentTime();
            this
                .chat
                .sendMessage({user: this.user, room: this.room, message: this.messegeContent, date: time});
            this.messegeContent = null;

            // stop typing after send message this.chat.stoptyping({user: this.user});

        }
    }

    // return the current time
    getCurrentTime() {
        const date = new Date();
        const time = date.getHours() + ':' + (date.getMinutes() < 10
            ? '0'
            : '') + date.getMinutes();
        return time;
    }

    // user typing
    usertyping() {
      this
      .chat
      .typing({user: this.user, room: this.room});
    }

    // new user joining to room
    join() {
        this.joinLeaveRoom = false;
        const time = this.getCurrentTime();
        this
            .chat
            .joinRoom({user: this.user, room: this.room, date: time});

    }
    // user leaving room
    leave() {
        this.joinLeaveRoom = true;
        const time = this.getCurrentTime();
        this
            .chat
            .leaveRoom({user: this.user, room: this.room, date: time});
    }


    tokenn() {

      const tok =  this.auth.getToken();
      console.log(tok);


    }

}
