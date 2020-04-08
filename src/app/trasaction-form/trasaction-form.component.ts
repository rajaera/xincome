


import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TransactionRecord } from '../transaction-record';
import { FindAccountTransactionTypePipe } from '../find-account-transaction-type.pipe';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

import { LedgerService } from '../ledger.service';
import { RecordCardComponent } from '../record-card/record-card.component';
import { AuthService } from '../auth.service';
import { AccountType } from '../account-type.enum';
import { Account } from '../account';
import { FilterAccountPipe } from '../filter-account.pipe';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-trasaction-form',
  templateUrl: './trasaction-form.component.html',
  styleUrls: ['./trasaction-form.component.scss'],  
})
export class TrasactionFormComponent implements OnInit {
  
  
  formGroup: FormGroup;
  filteredAccounts : Account[];  
  transactionDate : Date;
  lastRecorded : TransactionRecord;
  @ViewChild('lastRecordedView') lastRecordedView : RecordCardComponent;

  show : boolean = false;

  constructor(
    private _auth : AuthService,
    private ledger : LedgerService,  
    private accountService : AccountService,   
    private accountFilterPipe : FilterAccountPipe) { 
    
  }

  ngOnInit() {    
    this.transactionDate = new Date();
    this.filterAccount(AccountType.EXPENSES_GENERAL);
    this.createForm();

    console.log(this.filteredAccounts);
  }
  ngAfterViewInit() {
    
  }

  createForm() {
    this.formGroup = new FormGroup(
      {
        accountType :  new FormControl('',Validators.required),  
        accountUuid: new FormControl('',Validators.required),        
        transactionDate: new FormControl(this.transactionDate,[Validators.required]),
        description: new FormControl('',Validators.required),
        amount: new FormControl('',[Validators.required]),
      },
      
    );
  }

  onSubmit(){    
        
    if (this.formGroup.valid && this.createLedgerRecord()) {
      this.createForm();
      if (this.lastRecordedView && this.lastRecorded) {
        this.lastRecordedView.setRecord(this.lastRecorded);
      }
    }
    
    
  }

  createLedgerRecord(){    

    this.onDateChange( this.transactionDate);
    this.formGroup.value.uuid = new Date().getTime();
    this.formGroup.value.transactionDate = this.transactionDate;
    this.formGroup.value.account = this.accountService.findAccountByUuid(this.formGroup.value.accountUuid);
    
    this.lastRecorded = this.formGroup.value;
    return this.ledger.addRecord(this.formGroup.value);
  }

  onDateChange(newdate) {
    
    const _ = moment();
    const date = moment(newdate).add({hours: _.hour(), minutes:_.minute() , seconds:_.second()})
    this.transactionDate = date.toDate();
    
    
  }

  filterAccount(accType : number) {
    this.filteredAccounts = this.accountFilterPipe.transform(this.accountService.accountList(), accType);
    
  }

}
