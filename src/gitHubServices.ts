import * as request from 'request';
import { User } from './User';
import { Repos } from './Repos';
import { countBy } from 'lodash';
let OPTIONS:any ={
    headers:{
        'User-Agent': 'request'
    },
    json:true
};
export class gitHubServices{
    getUserInfo(userName:string,cb:(user: User)=>any){
        request.get('https://api.github.com/users/' + userName,OPTIONS,(error:any,response:any,body:any) =>{
            let user = new User(body);
            cb(user);
        })
    }
    getRepos(userName:string, cb:(repos: Repos[])=>any){
        request.get('https://api.github.com/users/' + userName + '/repos',OPTIONS,(error:any,response:any,body:any) =>{
            let repoArray = body;
            let repos = repoArray.map((repo: any) => new Repos(repo));
            cb(repos);
        })
    }
}