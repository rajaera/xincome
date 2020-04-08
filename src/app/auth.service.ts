import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistryService } from './user-registry.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private registerService : UserRegistryService) { }

  loginUser(user) {
    
    if (!this.registerService.hasUser(user)) {
      this.registerService.register(user);

    } 

    localStorage.setItem('xincomer',JSON.stringify(user));
    

    
    return true;
  }

  loggedIn(){
    return !!localStorage.getItem('xincomer');
  }

  auther(){
    return JSON.parse(localStorage.getItem('xincomer'));
  }

  logOut(){
    localStorage.removeItem('xincomer');
    return true;
  }
}
