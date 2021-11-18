import { Repos } from './Repos';
import { User } from './User';
import {gitHubServices} from './gitHubServices';
let svc = new gitHubServices();
svc.getUserInfo("GOWTHAMMAX17",(user: User) => {
    console.log(user);
});
svc.getRepos("GOWTHAMAX17",(repos:Repos[])=>{
    console.log(repos);
});
