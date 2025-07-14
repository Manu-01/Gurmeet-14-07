import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  myForm!: FormGroup


  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/')]),
      address: new FormControl('', [Validators.required]),
      address2: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required, Validators.maxLength(6),Validators.pattern(/^\d+$/)]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      skills: new FormArray([
        new FormGroup({
          skillName: new FormControl('', Validators.required),
          branch: new FormControl('', Validators.required),
          experience: new FormControl('', Validators.required)
        })

      ])
    })
  }


  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(
      new FormGroup({
        skillName: new FormControl('', Validators.required),
        branch: new FormControl('', Validators.required),
        experience: new FormControl('', Validators.required)
      })
    );
  }





  submit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      this.myForm.reset()
    } else {
      console.log('Invalid Credentials');
      this.myForm.markAllAsTouched();
    }
  }











}





