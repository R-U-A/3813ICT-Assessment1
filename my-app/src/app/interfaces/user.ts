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


