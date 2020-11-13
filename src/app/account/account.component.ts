import { Component, OnInit } from '@angular/core';

import { ServiceStorageService } from '../service-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {dataValue;

  constructor(private getService:ServiceStorageService,
              private router:Router) { }

  ngOnInit(): void {

  this.dataValue=this.getService.getData();
  console.log(this.dataValue);
  }
  
  logout(){
  this.getService.getDestroy();
  this.router.navigate(['/login']);
  }
}
