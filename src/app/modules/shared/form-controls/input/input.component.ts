import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() show = true;
  @Input() label = '';
  @Input() toolTip = '';
  @Input() control = new FormControl();
  @Input() CSS_Class = '';
  @Input() icon = '';
  @Input() fmt = '';

  constructor(
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {
    if (this.fmt) {
      switch(this.fmt) {
        case 'currency': {
          this.control.valueChanges.subscribe( v => {
            if (v) {
              this.control.setValue(
                // 🔥 Remove non-digits; remove leading zeros; convert to new currency format; disable event emission to avoid infinite loop.
                this.currencyPipe.transform(v.replace(/\D/g, '').replace(/^0+/, ''), 'USD', 'symbol', '1.0-0'), {emitEvent: false}
              );
            }
          });
          break;
        }
      }
    }
  }

}
