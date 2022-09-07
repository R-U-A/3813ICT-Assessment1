import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces/user';
import usersData from '../data/user.json';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  //u1 = new user("1","smith_joe@gmail.com", "pos123", true);
  //u2 = new user("2","joe@gmail.com", "pos123", false);
  //u3 = new user("3","smith@gmail.com", "pos123", true);
  //u4 = new user("4","h_j@gmail.com", "pos123", false);

  users: user[] = usersData;
  account: user [];
  constructor() { 
    this.account = []; 
  }

  ngOnInit(): void {
  }

}
