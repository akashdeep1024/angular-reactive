import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  FormControl,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'demo-reactive';
  testFormGroup: FormGroup;
  name = this.fb.control('',Validators.required);
  profileFormGroup: FormGroup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }
  onSubmit() {
    console.log(this.profileFormGroup.get('firstName').value);
    console.log(this.profileFormGroup.value);
  }
  get getterfirstname() {
    return this.profileFormGroup.get('firsName') as FormControl;
  }
  get aliases() {
    return this.profileFormGroup.get('aliases') as FormArray;
  }
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }
  updateProfile() {
    this.profileFormGroup.patchValue({
      firstName: 'Deepika',
      address: {
        city: 'Warrensburg',
      },
    });
    alert(JSON.stringify(this.profileFormGroup.value));
    console.log(this.profileFormGroup.value);
  }
  updateName() {
    this.name.setValue('Akash Deep');
  }

  buildForm() {
    this.testFormGroup = this.fb.group({
      name: [''],
      id: [''],
    });
  }
}
