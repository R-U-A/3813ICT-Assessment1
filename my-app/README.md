# MyApp

# 3813ICT-Assessment1
Simple user login, chatbox and account page

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Documentation:

3818ICT Milestone 1
Git Layout (1)
The git repository is set to public so anyone can inspect the code, the name is ‘3813ICT-Assessment1’. This repository contains the my-app, node_modules and server directories. Additionally, a readMe will be provided. The default branch main is being utilised for all push/ commits.
Version Control Approach
Throughout the development, phase to ensure I maintained access to milestone goals (or in some instances, solidly working code) frequent commits were made. None of which were required to be accessed however having the peace of mind that working milestones were available was extremely encouraging. Larger implementation will be needed for milestone 2, in which additional branches will be required.

Data Structures (1)
The main data structures used for milestone 1 were users, groups, routes, and forms. 
The users.json file consisted of an array of objects of type users that contained the necessary information of a user. This structure allows us to pass the users to wherever they may need to be passed in totality. 
Similarly, groups consisted of an array of object groups which in turn contained an array of users. This is explored further in milestone 2.
Routes is an array that contained components and allowed one to update a single array in order to manage components. 
Classes:
Classes were used to implement users and groups. These classes contained attributes that stored the data required for users to access the website and limited functionality. 
export class user{
    userId: string;
    userEmail: string;
    userPassword: string; 
    userAdmin: boolean;

    constructor(userId: string, email: string, password: string, userAdmin: boolean){
        this.userId = userId; 
        this.userEmail = email;
        this.userPassword = password;
        this.userAdmin = userAdmin;
    }
}


export class group{
    groupName: string;
    groupMembers: Array<user>;
    groupCount: Number; 
    groupAdmin: string;

    constructor(groupName: string, groupAdmin: string){
        this.groupName = groupName;
        this.groupMembers = [];
        this.groupCount = 0;
        this.groupAdmin = groupAdmin;
    }
}

REST API (2)
const routes: Routes = [
  {path: 'chatbox', component: ChatboxComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'adduser', component: AddUserComponent, canActivate:[AuthGuard]}
];

The server doesn’t communicate with the front end yet, however, routes are set. 


Angular Architecture Components (1)
Login 
The default route when the application is served is a simple login form that takes email and password and searches the user’s list to find if the login is valid. If the credentials are valid (that is the check_credentials returns true) the user is authenticated and able to navigate through to the main home page. If credentials do not match a valid user within the user.json file they will be prompted again and the form will be reset.  

Home 
The home is a relatively blank component, however, serves as the introduction of the navbar used to navigate the site. Depending on the user’s privileges, navigation options will vary. For instance, Admin users can navigate to the accounts page via router-link ‘Accounts’, however that option is not available to standard users who only have access to the home, chatbox and logout options. 

Account
 Is a component that displays the current valid users using the users.json information, only accessible by admins and allows them to add or remove users. 

Add-user 
The component which displays a form for a new user, only a skeleton in milestone one.

Chatbox 
The main focus for milestone 2, where messages are sent and channels/ groups will be visible.	

Data
Contains the user and group data structures in array.json form and is imported to .ts that utilise it (eg the login component to validate users). 

Interfaces
This component provides the skeletons/ declarations for the class users and groups and their functionality, exporting them respectively.

Guards
Is a component that houses the authentication methods, this component allows us to ‘guard’ routes from invalid/non-validated users who may attempt to bypass the login (via eg http://localhost:4200/home), without authentication users are redirected to the sign-in page.

Model
Contains the classification of the sign-in data taken from the login form, and also contains methods used in the authentication service. 

Services
Not many services were used during milestone 1, excluding the use of authentication services. This component allows the app to validate users and determine what is displayed for users. 
