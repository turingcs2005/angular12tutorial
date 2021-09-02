import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-basics',
  templateUrl: './form-basics.component.html',
  styleUrls: ['./form-basics.component.scss']
})
export class FormBasicsComponent implements OnInit {

  exampleForm = this.fb.group({});

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.exampleForm = this.fb.group({
      name: [''],
      nationality: [''],

      address: this.fb.group({
        streetAddress: [''],
        city: ['']
      }),

      family: this.fb.array([
        this.fb.control(''),
        new FormControl('')
      ])
    });
  }

  get name() {
    return (<FormControl>this.exampleForm.get('name'));
  }

  get nationality() {
    return (<FormControl>this.exampleForm.get('nationality'));
  }

  get address() {
    return (<FormGroup>this.exampleForm.controls.address);
  }

  get family() {
    return (<FormArray>this.exampleForm.controls.family);
  }

  logName() {
    // log name
    console.log('%c1. Form control \'name\' is logged to console:', 'color: blue');
    console.log(this.name);

    // log name's value
    console.log('%c2. Value property of form control \'name\':', 'color: blue');
    console.log(this.name?.value);

    // log name's parent (exampleForm) 
    console.log('%c3. You can access a control\'s parent via .parent property:', 'color: blue');
    console.log(this.name?.parent);
  }

  logNationality() {
    console.log(this.nationality.value);
  }

  logAddress1() {
    console.log((<FormGroup>this.exampleForm.controls.address).controls.streetAddress1.value);
  }

  logAddress() {
    // show group
    console.log('%c1. FormGroup address', 'color: blue');
    console.log(this.address);

    // show controls
    console.log('%c2. Controls holds a FormGroup\'s children as name-AbstractControl pairs.', 'color: blue');
    console.log(this.address.controls);

    // check syntax equivalence
    console.log('%c3. This.exampleForm.get(\'address\') is equivalent to this.exampleForm.controls.address', 'color: blue');
    console.log(this.address === this.exampleForm.get('address'));

    // show values
    console.log('%c4. Value holds a FormGroup\'s children\'s values as name-value pairs', 'color: blue');
    console.log(this.address.value);
  }

  logFamily() {
    // show array
    console.log('%c1. Show FormArray family', 'color: blue');
    console.log(this.family);

    // show controls
    console.log('%c2. Controls holds a FormArray\'s children as index-Abstraction pairs', 'color: blue');
    console.log(this.family.controls);

    // show values
    console.log('%c3. Value holds a FormArray\'s children\'s values as an array', 'color: blue');
    console.log(this.family.value);
  }

  onSubmit() {
    console.log('Example form submitted!');
    console.log(this.exampleForm.value);
  }

}
