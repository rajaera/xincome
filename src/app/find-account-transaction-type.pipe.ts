import { Pipe, PipeTransform } from '@angular/core';
import { AccountType } from './account-type.enum';
import { TransactionType } from './transaction-type.enum';

@Pipe({
  name: 'findAccountTransactionType'
})
export class FindAccountTransactionTypePipe implements PipeTransform {

  transform(value: number): number {
   
    switch (+value) {
      
      case AccountType.EXPENSES_GENERAL : return TransactionType.DEBIT;
      case AccountType.INCOME_GENERAL : return TransactionType.CREDIT;
      default : return 0;
    }
  }

}
