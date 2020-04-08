import { Pipe, PipeTransform } from '@angular/core';
import { Account } from './account';
import { AccountType } from './account-type.enum';

@Pipe({
  name: 'filterAccount'
})
export class FilterAccountPipe implements PipeTransform {

  transform(accounts: Account[], filterBy : AccountType): Account[] {
   let filterAccounts = null;

   accounts.forEach(element => {
     if (element.accountType === filterBy) {
       if (!filterAccounts) {
        filterAccounts = [];
       }
      filterAccounts.push(element);
     }
   });

   return filterAccounts;

    
  }

}
