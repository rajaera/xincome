import { Account } from './account';

export class TransactionRecord {
    uuid : string;
    account : Account;    
    transactionDate : string;
    description : string;
    amount : number;

}
