import {Component, OnDestroy, OnInit} from '@angular/core';
import {TemplateDrivenFromModel} from "../models/template-driven-from.model";

@Component({
  selector: 'kt-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit, OnDestroy {

  form: TemplateDrivenFromModel = new TemplateDrivenFromModel();

  constructor() {
  }

  ngOnInit(): void {
    console.log('this is from ng oninit method()');
  }

  ngOnDestroy() {
    console.log('this is from ng on destroyed !');
  }

  onSubmitForm() {
    console.log('on click submit form: ', this.form);
  }

  onEmailChange(event: any) {
    console.log('on email change: ', event);
  }
}
