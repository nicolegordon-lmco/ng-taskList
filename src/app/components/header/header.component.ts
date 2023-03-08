import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /** name: type = var is static typing. This is typescript
      Javascript uses name = var **/ 
      title: string = 'Task Tracker'; 
      
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log("toggle")
  }

}
