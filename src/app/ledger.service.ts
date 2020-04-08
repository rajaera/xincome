import { Injectable } from '@angular/core';
import { TransactionRecord } from './transaction-record';
import { DebitSumPipe } from './debit-sum.pipe';
import { CreditSumPipe } from './credit-sum.pipe';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {
 
  constructor(private _auth : AuthService, private debitPipe : DebitSumPipe, private creditPipe : CreditSumPipe) {
    
    
   }   

  ledgerList(){    
    let _legger_name = this._auth.auther().email + '_' + 'ledger';
    let transactionList : TransactionRecord[];
    if (localStorage.getItem(_legger_name)) {
      transactionList = JSON.parse(localStorage.getItem(_legger_name));
    } else {
      transactionList = [];
    }    
    return transactionList;
  }

  addRecord(record : TransactionRecord){
    let _legger_name = this._auth.auther().email + '_' + 'ledger';
    let transactionList : TransactionRecord[];
    if (localStorage.getItem(_legger_name)) {
      transactionList = JSON.parse(localStorage.getItem(_legger_name));
    } else {
      transactionList = [];
    }    
    
    if (transactionList.push(record)) {
      localStorage.setItem(_legger_name, JSON.stringify(transactionList));
      return true;
    }

    return false;
  }

  deleteRecord(record : TransactionRecord) {
    let _legger_name = this._auth.auther().email + '_' + 'ledger';
    let transactionList : TransactionRecord[];
    if (localStorage.getItem(_legger_name)) {
      transactionList = JSON.parse(localStorage.getItem(_legger_name));
    } else {
      transactionList = [];
    }    
    
      for (let i = 0; i < transactionList.length ; i++) {
        let r = transactionList[i];
        if (r.uuid === record.uuid) {
          if (transactionList.splice(i,1)) {
            localStorage.setItem(_legger_name, JSON.stringify(transactionList));
            return true;
          } else {
            return false;
          }
        }
    }
  }

  balance() : number {    
    let credit = this.creditPipe.transform(this.ledgerList());
    let debit = this.debitPipe.transform(this.ledgerList());
    console.log(this.ledgerList());
    return credit - debit;
  }


}
