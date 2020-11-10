import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceProjectService } from '../service-project.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm:FormGroup;
  regDetails;
  userResponse;

  constructor(private regService:ServiceProjectService,
              private router:Router) { }

  ngOnInit(): void {
  this.regForm=new FormGroup({
      firstname:new FormControl(null, [Validators.required]),
      lastname:new FormControl(null, [Validators.required]),
      email:new FormControl(null, [Validators.required, Validators.pattern('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$')]),
      password:new FormControl(null, [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')])
   });
  }

  regData()
  {
    console.log(this.regForm.value);
    this.regDetails=this.regForm.value;
    this.regService.RegData(this.regDetails).subscribe(regParam=>{
       this.userResponse=regParam;
       console.log(this.userResponse);
       alert(this.userResponse.message);

        //this.router.navigate(['/login']);
    })
   
  }

}
