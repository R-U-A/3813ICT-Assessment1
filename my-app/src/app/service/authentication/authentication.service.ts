import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/interfaces/user';
import { SignInData } from 'src/app/model/signInData';
import usersData from '../../data/user.json';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isAuthenticated = false;
  isAdmin = false; 

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    for (let i = 0; i < usersData.length; i++)
    { console.log(usersData[i])
      if(this.checkCredentials(signInData, usersData[i])){
        this.isAuthenticated = true;
        if (typeof(Storage)!== "undefined"){
          localStorage.setItem("Current User", JSON.stringify(signInData));
        }
        else{
          console.log("No storage Support");
        }
        if (usersData[i].userAdmin){
          this.isAdmin = true;
        }
        else{
          this.isAdmin = false; 
        }
        this.router.navigate(['home']); 
        return true; 
      }
    }
    this.isAuthenticated = false;
    this.isAdmin = false;
    return false;
  }

  private checkCredentials(signInData: SignInData, User: user): boolean {
    return this.checkEmail(signInData.getEmail(), User.userEmail) && this.checkPassword(signInData.getPassword(), User.userPassword); 
  }

  private checkEmail(email: string, user_list_email: string): boolean {
    return email === user_list_email;
  }

  private checkPassword(password: string, user_list_password: string): boolean {
    return password === user_list_password;
  }

  logout(){
    this.isAuthenticated = false;
    localStorage.clear();
    this.router.navigate(['']);
  }
  
}
