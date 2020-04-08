import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { TrasactionFormComponent } from './trasaction-form/trasaction-form.component';
import { LedgerComponent } from './ledger/ledger.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { LedgerHomeComponent } from './ledger-home/ledger-home.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountFormComponent } from './account-form/account-form.component';


const routes: Routes = [
  {path:'', redirectTo : '/home', pathMatch : 'full'},
  {
    path : 'home', 
    component : HomeComponent, 
    canActivate : [AuthGuard],  
    children :[
      {path:'', redirectTo : '/ledger', pathMatch : 'full'},
      {path : '**', redirectTo : 'home', pathMatch : 'full'}
    ]  
    },
  
  {
    path:'ledger', 
    component: LedgerHomeComponent,
    canActivate : [AuthGuard],
    children : [      
      {path:'', component : LedgerComponent},
      {
        path:'new-transaction', 
        component: TrasactionFormComponent,
        canActivate : [AuthGuard],
      },

    ]
  },
  {
    path:'account', 
    component: AccountHomeComponent,
    canActivate : [AuthGuard],
    children : [      
      {path:'', component : AccountListComponent},
      {
        path:'new-account', 
        component: AccountFormComponent,
        canActivate : [AuthGuard],
      },

    ]
  },
  {path:'settings', component: SettingsComponent},
  {
    path : 'login', 
    component : LoginComponent    
  },
  {path:'**', redirectTo : '/home', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
