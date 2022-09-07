import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';
import usersData from '../../data/user.json';
//import user from '../../interfaces/user'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly adminUser = new SignInData('john_smith@gmail.com', 'abc123');
  isAuthenticated = false;
  isAdmin = false; 

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      if (typeof(Storage)!== "undefined"){
        localStorage.setItem("Current User", JSON.stringify(signInData));
      }
      else{
        console.log("No storage Support");
      }
      this.router.navigate(['home']); 
      return true; 
    }
    this.isAuthenticated = false;
    this.isAdmin = false;
    return false;
  }

  //private checkAdmin(user: User): boolean {
  //  return this.userAdmin;
  //}

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword()); 
  }

  private checkEmail(email: string): boolean {
    return email === this.adminUser.getEmail();
  }

  private checkPassword(password: string): boolean {
    return password === this.adminUser.getPassword();

  }

  logout(){
    this.isAuthenticated = false;
    localStorage.clear();
    this.router.navigate(['']);
  }
  
}
