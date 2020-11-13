import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceStorageService {
  token;

  constructor() { }

  setData(email:string,full_name:string,token:string,user_id:string) 
  {
     window.localStorage.setItem('email',email);
      window.localStorage.setItem('full_name',full_name);
     window.localStorage.setItem('token',token);
      window.localStorage.setItem('user_id',user_id);
  }
  
  getData()   
  {
    const allData=[];
    let abc={
    email:window.localStorage.getItem('email'),
    full_name:window.localStorage.getItem('full_name'),
    user_id:window.localStorage.getItem('user_id')
    }
    allData.push(abc);
    return allData;
  }

  getToken()  
  {
    return window.localStorage.getItem('token');
  }
  
  getDestroy()  
  {
    return window.localStorage.clear();
  }
}
