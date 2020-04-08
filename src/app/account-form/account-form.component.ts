import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountType } from '../account-type.enum';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  formGroup: FormGroup;
  
  constructor(private _accSvc : AccountService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup(
      {
        accountType: new FormControl(AccountType.EXPENSES_GENERAL,Validators.required),        
        accountName: new FormControl('',[Validators.required]),
        accountCode: new FormControl('',Validators.required),
        
      },
      
    );
  }


  onSubmit(){    
        
    if (this.formGroup.valid && this.createAccountRecord()) {
      this.createForm();
      
    }
    
    
  }

  createAccountRecord(){ 
    this.formGroup.value.uuid = new Date().getTime();   
    
    return this._accSvc.addRecord(this.formGroup.value);
  }

}
