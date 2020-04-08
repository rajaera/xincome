import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistryService {

  constructor() { }

  registry() {
    return JSON.parse(localStorage.getItem('xincomereg')) ?JSON.parse(localStorage.getItem('xincomereg')):[];
  }

  register(user) {
    let register = this.registry();
    register.push(user);
    localStorage.setItem('xincomereg', JSON.stringify(register));
  }

  hasUser(user) {
    
    let reguser : boolean = false;
    for(let r of this.registry()) {
      if (r.email === user.email) {
        return true;
      }
    }

    return false;
  }
}
