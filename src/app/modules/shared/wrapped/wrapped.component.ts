import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-wrapped',
  templateUrl: './wrapped.component.html',
  styleUrls: ['./wrapped.component.scss']
})
export class WrappedComponent implements OnInit {
  @Input() control = new FormControl();
  @Input() label = '';

  constructor() { }

  ngOnInit(): void {
  }

}
