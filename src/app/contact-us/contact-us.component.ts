import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

   contactForm: FormGroup;
   constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  this.contactForm = this.fb.group({
    formName: ['', Validators.required],
    formEmail: ['', Validators.required],
    formSubjects: ['', Validators.required],
    formMessage: ['', Validators.required]
    });
  }

  onSubmit() {
   alert("Thank you for contacting us. Get back to you soon");
    
  }

 
}
