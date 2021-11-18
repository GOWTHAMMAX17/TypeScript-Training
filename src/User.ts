import { Repos } from "./Repos";
export class User{
    login!: string;
    fullName!: string;
    repoCount!: number;
    followerCount!: number;
    repos!: Repos[];

    constructor(userResponse: any){
        this.login = userResponse.id;
        this.fullName = userResponse.login;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
}