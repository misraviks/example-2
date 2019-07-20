import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Input('game') gameElement:{type:string,value:number};
  @Output() gameStart= new EventEmitter();
  @Output() gameStop= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onGameStart()
  {
    this.gameStart.emit();
  }
  onGameStop()
  {
    this.gameStop.emit();
  }
}
