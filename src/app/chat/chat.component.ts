import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  HostListener
} from "@angular/core";
import { ChatService } from "../chat.service";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Subscription } from "rxjs";
import { leave } from "@angular/core/src/profile/wtf_impl";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
  providers: [ChatService, AuthService],
  styles: [
    `
      .changeSideinchat {
        text-align: right;
      }
    `,
    `
      .hideUsername {
        visibility: hidden;
      }
    `
  ]
})
export class ChatComponent implements OnInit, OnDestroy {
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    console.log("Processing beforeunload...");
    const Meonlineuser = { username: this.user };
    this.leave();
    event.returnValue = false;
  }
  messegeContent: string;

  allMessages: Array<{ user: string; message: string; date: string }> = [];
  onlineUsers: any;
  usertypingArray: Array<{ user: string; message: string }>;

  usernameFlag = false;
  userTypingflag = false;
  joinLeaveRoom = true;
  flagSenduserTyping = false;
  user: string;
  room = "Lobby";
  time: string;
  interval;

  @ViewChild("scrollMe") private myScrollContainer: ElementRef;

  constructor(private chat: ChatService, private auth: AuthService) {}
  showHideLogoutButton: boolean;
  private UsernameStatusSub: Subscription;

  ngOnInit() {
    const currentUsernameafterLogin = localStorage.getItem("CurrentUsername");
    if (currentUsernameafterLogin) {
      this.user = currentUsernameafterLogin;
      this.usernameFlag = true;
    }

    if (this.auth.IsAuthenticated()) {
      this.showHideLogoutButton = true;
    } else {
      this.showHideLogoutButton = false;
    }

    // listen to incoming message when new user joining
    this.chat.getjoinRoom().subscribe(data => {
      setTimeout(() => {
        this.getOnlineUsers({ room: this.room });
      }, 1000);
    });

    // listen to incoming message when user leaving
    this.chat.userLeave().subscribe(data => {
      setTimeout(() => {
        this.getOnlineUsers({ room: this.room });
      }, 100);
    });

    // listen to incoming message in room
    this.chat.getMessages().subscribe(message => {
      this.allMessages.push(message);
      this.scrollToBottom();
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
  }

  getOnlineUsers(room: any) {
    this.auth.getonlineUsers(room).subscribe(data => {
      setTimeout(() => {
        this.onlineUsers = data;
      }, 100);
    });
  }

  scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.log(err);
      }
    }, 100);
  }

  deleteMeFromOnlineUsers(username: any) {
    this.auth.deleteFromOnlineUsers(username).subscribe(data => {});
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
      this.scrollToBottom();
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
    const onlineuser = { username: this.user, room: this.room };
    this.auth.onlineUsers(onlineuser);

    setTimeout(() => {
      this.getOnlineUsers({ room: this.room });
    }, 1000);
  }
  // user leaving room
  leave() {
    this.joinLeaveRoom = true;
    const time = this.getCurrentTime();
    this.chat.leaveRoom({ user: this.user, room: this.room, date: time });
    const Meonlineuser = { username: this.user };
    this.deleteMeFromOnlineUsers(Meonlineuser);

    setTimeout(() => {
      this.onlineUsers = null;
    }, 1000);
    clearInterval(this.interval);
  }

  logout() {
    this.leave();
    this.auth.logout();
    this.showHideLogoutButton = false;
  }
}
