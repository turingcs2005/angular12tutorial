import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-wrapped-date',
  templateUrl: './wrapped-date.component.html',
  styleUrls: ['./wrapped-date.component.scss']
})
export class WrappedDateComponent implements OnInit {

  @Input() control = new FormControl();
  @Input() label = '';

  constructor() { }

  ngOnInit(): void {
  }

}
