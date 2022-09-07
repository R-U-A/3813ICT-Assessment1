import { user } from "./user";

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

