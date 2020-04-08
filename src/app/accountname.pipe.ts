import { Pipe, PipeTransform } from '@angular/core';
import { AccountType } from './account-type.enum';

@Pipe({
  name: 'accountname'
})
export class AccountNamePipe implements PipeTransform {

  transform(value: any, args?:any): string {
    switch(+value) {
      case AccountType.EXPENSES_GENERAL : return 'General Expenses';
      case AccountType.INCOME_GENERAL : return 'General Income';
      default : return 'Default Account';

    }
  }

}
