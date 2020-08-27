import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/_models/message';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.css']
})
export class MessageCardComponent implements OnInit {

  @Input()
  message: Message;
  @Input()
  recipientId: number;
  isHover: boolean;

  constructor() {
    this.isHover = false;
  }

  ngOnInit() {
  }

}
