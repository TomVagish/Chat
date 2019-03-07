import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from "@angular/core";
import { ChatService } from "../chat.service";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
  providers: [ChatService, AuthService]
})
export class ChatComponent implements OnInit, OnDestroy {
  messegeContent: string;

  allMessages: Array<{
    user: string;
    message: string;
    date: string;
  }> = [];
  onlineUsers: Array<{
    user: string;
    message: string;
    date: string;
  }> = [];
  usertypingArray: Array<{
    user: string;
    message: string;
  }>;

  usernameFlag = false;
  userTypingflag = false;
  joinLeaveRoom = true;
  flagSenduserTyping = false;
  user: string;
  room = 'Lobby';
  time: string;


  @ViewChild("mainPageMessages") myScrollContainer: any;

  constructor(private chat: ChatService, private auth: AuthService) {}
  showHideLogoutButton: boolean;
  private UsernameStatusSub: Subscription;

  ngOnInit() {

    const currentUsernameafterLogin = localStorage.getItem('CurrentUsername');
    if(currentUsernameafterLogin)
    {
      this.user = currentUsernameafterLogin;
      this.usernameFlag = true;
    }


    // this.UsernameStatusSub = this.auth
    // .getusernameCurrentUser()
    //   .subscribe(usernameStatus => {
    //     console.log(usernameStatus);
    //     this.user = usernameStatus;
    //     this.setUsernameFromDB();

    //   });

    if (this.auth.IsAuthenticated()) {
      this.showHideLogoutButton = true;
    } else {
      this.showHideLogoutButton = false;
    }

    // listen to incoming message when new user joining
    this.chat.getjoinRoom().subscribe(data => {
      this.onlineUsers.push(data);
    });

    // listen to incoming message when user leaving
    this.chat.userLeave().subscribe(data => {
      // this.onlineUsers.push(data);
      console.log(this.onlineUsers);
    });

    // listen to incoming message in room
    this.chat.getMessages().subscribe(message => {
      this.allMessages.push(message);
    });

    // listen to user typing
    this.chat.usertyping().subscribe(data => {
      this.usertypingArray = data.user;
      this.userTypingflag = true;
      if (this.userTypingflag) {
        setTimeout(() => {
          this.userTypingflag = false;
        }, 2000);
      }
    });

    // listen to stop typing user
    // this.chat.userstoptyping().
    // subscribe(data => {
    //  if(data){
    //    console.log(data);
    //    console.log(this.userTypingflag);
    //   this.userTypingflag = false;
    //   console.log(this.userTypingflag);

    //  }
    // }) ;
  }




  ngOnDestroy() {
    // this.UsernameStatusSub.unsubscribe();
  }

  saveUserName(form: NgForm) {
    this.user = form.value.user;
    this.usernameFlag = true;
  }

  // a function that send a message in chat
  sendMessage(event) {
    if (event.key === "Enter") {
      this.usertypingArray = null;
      const time = this.getCurrentTime();
      this.chat.sendMessage({
        user: this.user,
        room: this.room,
        message: this.messegeContent,
        date: time
      });
      // this.chat.stoptyping({ user: this.user, room: this.room });
      this.messegeContent = null;

      // stop typing after send message this.chat.stoptyping({user: this.user});

      this.myScrollContainer.scrollToBottom(300);
    }
  }

  // return the current time
  getCurrentTime() {
    const date = new Date();
    const time =
      date.getHours() +
      ":" +
      (date.getMinutes() < 10 ? "0" : "") +
      date.getMinutes();
    return time;
  }

  // user typing
  usertyping() {
    if (!this.flagSenduserTyping) {
      this.chat.typing({ user: this.user, room: this.room });
      setTimeout(() => {
        this.flagSenduserTyping = true;
      }, 2000);
    } else {
      this.chat.typing({ user: this.user, room: this.room });
      this.flagSenduserTyping = false;
    }
  }

  // new user joining to room
  join() {

    this.joinLeaveRoom = false;
    const time = this.getCurrentTime();
    this.chat.joinRoom({ user: this.user, room: this.room, date: time });
  }
  // user leaving room
  leave() {
    this.joinLeaveRoom = true;
    const time = this.getCurrentTime();
    this.chat.leaveRoom({ user: this.user, room: this.room, date: time });
  }

  logout() {
    this.auth.logout();
    this.showHideLogoutButton = false;
  }
}
