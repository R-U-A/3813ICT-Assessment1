import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces/user';
import usersData from '../data/user.json';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  users: user[] = usersData;
  account: user [];
  constructor() { 
    this.account = []; 
  }

  ngOnInit(): void {
  }

}
