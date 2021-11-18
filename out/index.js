"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gitHubServices_1 = require("./gitHubServices");
var svc = new gitHubServices_1.gitHubServices();
svc.getUserInfo("GOWTHAMMAX17", function (user) {
    console.log(user);
});
svc.getRepos("GOWTHAMAX17", function (repos) {
    console.log(repos);
});
