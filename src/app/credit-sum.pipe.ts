import { Pipe, PipeTransform } from '@angular/core';
import { TransactionRecord } from './transaction-record';
import { TransactionType } from './transaction-type.enum';
import { AccountType } from './account-type.enum';

@Pipe({
  name: 'creditSum'
})
export class CreditSumPipe implements PipeTransform {

  
  transform(record: TransactionRecord[]): number {
    let sum = 0;
    record.forEach( (element) => {
      if (element.account.accountType == AccountType.INCOME_GENERAL) {
        sum += parseFloat('' + element.amount);
      }
      
  });
    return sum;
  }

}
