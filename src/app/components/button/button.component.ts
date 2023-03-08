import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string; // ! means it can be unassigned
  @Input() color!: string;
  @Output() btnClick = new EventEmitter(); // Emitter than can be defined for each button instance

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit(); // Emits whatever is output from btnClick
  }

}
