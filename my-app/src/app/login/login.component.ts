import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInvalid = false; 
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { } // injection of authentication service

  ngOnInit(): void {
  }
  onSubmit(signInForm: NgForm){
    if (!signInForm.valid){
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false; 
      return;
    }
    this.checkCredentials(signInForm);
    console.log(signInForm.value)
    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    this.authenticationService.authenticate(signInData);
  }

  private checkCredentials(signInForm: NgForm){

    const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
    if(!this.authenticationService.authenticate(signInData)){       // if authentication failed, display invilid creds
      this.isFormInvalid = false; 
      this.areCredentialsInvalid = true; 
    }
  }
}
