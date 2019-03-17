import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';


export class ChatService {


  private socket ;


  constructor() {

      this.socket = io();


  }




// 3 functions that  handling all request from client,and send it to server!
public sendMessage(data) {
  this.socket.emit('new-message', data);
}

public joinRoom(data) {
  this.socket.emit('join', data);
}

public leaveRoom(data) {
this.socket.emit('leave', data);
}

public typing(data) {
  this.socket.emit('typing', data);
}

public stoptyping(data) {
  this.socket.emit('stop-typing', data);
}



// 3 functions that  recive data from server.
public getMessages = () => {
  return Observable.create((observer) => {
      this.socket.on('new-message', (data) => {
          observer.next(data);
      });
  });
}

public getjoinRoom = () => {
  return Observable.create((observer) => {
      this.socket.on('new user joined', (data) => {
          observer.next(data);
      });
  });
}

public userLeave = () => {
  return Observable.create((observer) => {
      this.socket.on('new user leave', (data) => {
          observer.next(data);
      });
  });
}

public usertyping = () => {
  return Observable.create((observer) => {
      this.socket.on('typing', (data) => {
          observer.next(data);
      });
  });
}

public userstoptyping = () => {
  return Observable.create((observer) => {
      this.socket.on('stop-typing', (data) => {
          observer.next(data);
      });
  });
}



}
