import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'kt-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  formDetails: FormGroup = new FormGroup<any>({});

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.onInitFormDetails();
  }

  onInitFormDetails() {
    this.formDetails = this.formBuilder.group({
      email: undefined,
      age: undefined,
      phoneNumber: undefined,
      fullName: undefined
    })
  }

  onSubmitForm() {
    console.log('on submit reactive form: ', this.formDetails.value)
  }
}
