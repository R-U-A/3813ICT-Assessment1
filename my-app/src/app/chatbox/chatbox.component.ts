import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {

  constructor() { }
  current_message = ""
  messages: any = []
  send_message(){
    this.messages.push(this.current_message);
  }
  ngOnInit(): void {
  }

}
