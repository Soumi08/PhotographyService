import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceProjectService } from '../service-project.service'; 
import { ServiceStorageService } from '../service-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  loginDetails;
  userResponse;

  constructor(private loginService:ServiceProjectService,
              private storageService:ServiceStorageService,
              private router:Router) { }

  ngOnInit(): void {
  this.loginForm=new FormGroup({
      email:new FormControl(null, [Validators.required]),
      password:new FormControl(null, [Validators.required])
   });
  }

  loginData()
  {
    console.log(this.loginForm.value);
    this.loginDetails=this.loginForm.value;
    this.loginService.LoginData(this.loginDetails).subscribe(loginParam=>{
       this.userResponse=loginParam;
       console.log(this.userResponse);
       alert(this.userResponse.message);

       this.storageService.setData(this.userResponse.email, this.userResponse.full_name, this.userResponse.token, this.userResponse.user_id);

       this.router.navigate(['/all']);
    
       
    })
        
       
  }
 
}
