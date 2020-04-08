import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'; 




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { TrasactionFormComponent } from './trasaction-form/trasaction-form.component';
import { LedgerComponent } from './ledger/ledger.component';
import { RecordCardComponent } from './record-card/record-card.component';
import { DebitSumPipe } from './debit-sum.pipe';
import { CreditSumPipe } from './credit-sum.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select'; 
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 




import { LedgerService } from './ledger.service';
import { AuthService } from './auth.service';
import { UserRegistryService } from './user-registry.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LedgerHomeComponent } from './ledger-home/ledger-home.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountListComponent } from './account-list/account-list.component';
import { FilterAccountPipe } from './filter-account.pipe';
import { AccountTypeNamePipe } from './account-type-name.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingsComponent,
    TrasactionFormComponent,
    LedgerComponent,    
    RecordCardComponent,   
    DebitSumPipe,
    CreditSumPipe,
    LoginComponent,
    HeaderComponent,
    LedgerHomeComponent,
    AccountHomeComponent,
    AccountFormComponent,
    AccountListComponent,
    FilterAccountPipe,
    AccountTypeNamePipe,
      
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatMomentDateModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule
      
  ],
  providers: [        
    DatePipe,
    MatMomentDateModule,
    DebitSumPipe,
    CreditSumPipe,
    LedgerService,
    UserRegistryService,
    AuthService,
    AuthGuard,
    FilterAccountPipe,
    AccountTypeNamePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
