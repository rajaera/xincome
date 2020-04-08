import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  auther : any; 
  constructor(private _auth : AuthService, private _router : Router) { }

  ngOnInit(): void {
    this.auther = this._auth.auther();
  }

  logOut() {
    if (this._auth.logOut()) {
      this._router.navigate(['/login']);
    }
  }

}
