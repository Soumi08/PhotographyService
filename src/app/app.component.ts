import { Component } from '@angular/core';


import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceProjectService } from './service-project.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
loginForm:FormGroup;
  loginDetails;
  userResponse;

  constructor(private loginService:ServiceProjectService,
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
        
        //this.router.navigate(['/profile']);
   
    })
  }
 
}

