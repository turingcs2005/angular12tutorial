import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  floatMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  mouseOver() {
    this.floatMenu = true;
  }

  mouseOut() {
    this.floatMenu = false;
  }

}
