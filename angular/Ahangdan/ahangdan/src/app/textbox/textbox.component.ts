import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent {

  @Input() label = "";
  @Input() placeholder = "";
  @Input() isEmail = false;
  @Input() isSecret = false;
  innerValue = "";
  @Output() valueChange = new EventEmitter();

  @Input()
  get value() {
    return this.innerValue;
  }

  set value(newValue) {
    this.innerValue = newValue;
    this.valueChange.emit(this.innerValue);
  }

  constructor() { }
}
