import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TransactionRecord } from '../transaction-record';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TransactionType } from '../transaction-type.enum';
import { LedgerService } from '../ledger.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-ledger-list',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.scss'],  
})
export class LedgerComponent  {
  
  
  
  displayedColumns = ['transactionDate',  'accountCode', 'description', 'debit', 'credit' ];
  dataSource: MatTableDataSource<TransactionRecord>;
  ledgerBalance : number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _auth : AuthService,private ledger : LedgerService) {
    
  }

  ngOnInit() {    
    this.dataSource = new MatTableDataSource(this.ledger.ledgerList());
    this.ledgerBalance = this.ledger.balance();
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

