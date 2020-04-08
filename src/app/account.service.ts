import { Injectable } from '@angular/core';
import { Account } from './account';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 

  constructor(private _auth : AuthService) { 

  }

  accountList() {
    let _acc_list_name = this._auth.auther().email + '_acc_list';
    let accountList : Account[];
    if (localStorage.getItem(_acc_list_name)) {
      accountList = JSON.parse(localStorage.getItem(_acc_list_name));
    } else {
      accountList = [];
    }    
    return accountList;
  }

  addRecord(record : Account){
    let _acc_list_name = this._auth.auther().email + '_' + 'acc_list';
    let accountList : Account[];
    if (localStorage.getItem(_acc_list_name)) {
      accountList = JSON.parse(localStorage.getItem(_acc_list_name));
    } else {
      accountList = [];
    }    
    
    if (accountList.push(record)) {
      localStorage.setItem(_acc_list_name, JSON.stringify(accountList));
      return true;
    }

    return false;
  }

  deleteRecord(record : Account) {
    let _acc_list_name = this._auth.auther().email + '_' + 'acc_list';
    let accountList : Account[];
    if (localStorage.getItem(_acc_list_name)) {
      accountList = JSON.parse(localStorage.getItem(_acc_list_name));
    } else {
      accountList = [];
    }    
    
      for (let i = 0; i < accountList.length ; i++) {
        let r = accountList[i];
        if (r.uuid === record.uuid) {
          if (accountList.splice(i,1)) {
            localStorage.setItem(_acc_list_name, JSON.stringify(accountList));
            return true;
          } else {
            return false;
          }
        }
    }
  }

  findAccountByUuid(uuid : string) : Account {
    this.accountList().forEach(element => {
      if (element.uuid === uuid) {
        return element;
      }
    });

    return null;
  }


}
