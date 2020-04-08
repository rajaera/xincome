import { Pipe, PipeTransform } from '@angular/core';
import { TransactionRecord } from './transaction-record';
import { TransactionType } from './transaction-type.enum';
import { AccountType } from './account-type.enum';

@Pipe({
  name: 'debitSum'
})
export class DebitSumPipe implements PipeTransform {
  
  transform(record: TransactionRecord[]): number {
    let sum = 0;
    record.forEach( (element) => {
      if (element.account.accountType == AccountType.EXPENSES_GENERAL) {
        sum += parseFloat('' + element.amount);
      }
      
  });
    return sum;
  }

}
