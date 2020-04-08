import { Component, OnInit, Input} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations'
import { TransactionRecord } from '../transaction-record';
import { LedgerService } from '../ledger.service';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss'],
  animations : [
    trigger('cardFadeOutState',[
      state('show', style({
        opacity : 1
      })),
      state('hide', style({
        opacity : 0
      })),
      transition('show => hide', animate('5500ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),    
    trigger('deletedSuccessFadeInState',[
      state('show', style({
        opacity : 1
      })),
      state('hide', style({
        opacity : 0
      })),
      transition('show => hide', animate('0ms')),
      transition('hide => show', animate('1000ms ease-in')),

                
    ]),

  ]
})
export class RecordCardComponent implements OnInit {
 
  transactionRecord : TransactionRecord;
  showCard : boolean = true;
  showRecordContent : boolean = true;
  showDeleteSuccess : boolean = false;


  constructor(private ledger : LedgerService) { 
    
  }

  ngOnInit(): void {
    this.transactionRecord = {
    uuid : '',
    account : null,    
    transactionDate : '',
    description : '',
    amount : 0

    };
    this.cardPopUp(false);
  }

  /** Animation Effects */
  get cardFadeOutStateName() {
    return this.showCard ? 'show' : 'hide';
  }  

  get deleteSuccessFadeInStateName() {
    return this.showDeleteSuccess ? 'show' : 'hide';
  }

  cardPopUp(toggle : boolean) {
    this.showCard = toggle;
    this.showRecordContent = toggle;
    this.showDeleteSuccess  = !toggle;
  }


   /** End Animation Effects */

  delete() {
    if (this.ledger.deleteRecord(this.transactionRecord)) {
      this.cardPopUp(false);
    }
    
  }
  
   setRecord(transactionRecord : TransactionRecord) {
     
     this.transactionRecord = transactionRecord;
     this.cardPopUp(true);
   }

}
