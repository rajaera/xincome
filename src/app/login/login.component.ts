import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _auth : AuthService, private _router : Router) {
      if (this._auth.loggedIn()) {
        this._router.navigate(['/home']);
      }
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    console.log('createForm');
    this.formGroup = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email,
        ])       
        
      },
      
    );
  }

  logIn(){

    if (this.formGroup.valid) {
      this._auth.loginUser(this.formGroup.value);
      this._router.navigate(['/home']);
    }
    
    
  }

}
