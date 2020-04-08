import { Pipe, PipeTransform } from '@angular/core';
import { AccountType } from './account-type.enum';

@Pipe({
  name: 'accountTypeName'
})
export class AccountTypeNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch(+value) {
      case AccountType.EXPENSES_GENERAL : return 'Expenses';
      case AccountType.INCOME_GENERAL : return 'Income';
      default : return 'Default Account';

    }
  }

}
