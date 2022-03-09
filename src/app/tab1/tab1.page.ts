import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  msgData: any = {};
  allMessage: any = [];
  PrfxUrl = "http://localhost:6000/";
  constructor(
    private socket: Socket,
    private authService: AuthService,
    private http: HttpClient
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
    // console.log(this.msgData)
    // this.socket.emit('Initialise Instructor Connection', this.msgData);
    // this.allMessage.push(this.msgData);

    this.authService.sendToExpress(this.msgData)
    .then((result) => {
      console.log(result, "<<<<=====");
    })
    .catch((err) => {
      console.log(err, "<<<===err");
    });
    
  }
  
  getMessage() {
    this.socket.connect();
    this.socket.on('msgFromServer', (data) => {
      this.allMessage.push(data)
      console.log(data)
    });
    // return this.socket.fromEvent('chat')
    // .pipe(map((data:any) =>
    //   console.log(data.msg) 
    //   // this.allMessage.push(data.msg)
    // ));
  }

}
