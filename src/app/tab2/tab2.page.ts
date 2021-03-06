import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  msgData: any = {};
  allMessage: any = [];
  allParticipants: any = [];

  constructor(
    private socket: Socket
  ) {
    this.socket.connect();
    this.socket.on('msgFromServer', (data) => {
      this.allMessage.push(data)
      console.log(data)
    });
  }

  ngOninit(){
  }
  
  sendMessage() {
    console.log(this.msgData)
    this.socket.emit('Initialise Instructor Connection', this.msgData);
    this.allMessage.push(this.msgData);
  }
  
  getMessage() {
    console.log("receiving");
    this.socket.connect();
    this.socket.on('msgFromServer', (data) => {
      console.log("skr got some message");
      this.allMessage.push(data)
      console.log(data)
    });
    this.socket.on('participant-joined', (data) => {
      this.allParticipants.push(data)
      console.log(data)
    });
  }

}
