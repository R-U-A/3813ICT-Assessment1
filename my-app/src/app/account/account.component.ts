import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  account: user [];
  constructor() { 
    this.account = []; 
  }

  ngOnInit(): void {
  }

}
