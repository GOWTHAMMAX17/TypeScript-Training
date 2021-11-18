"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repos = void 0;
var Repos = /** @class */ (function () {
    function Repos(repoResponse) {
        this.name = repoResponse.name;
        this.description = repoResponse.description;
        this.url = repoResponse.url;
        this.size = repoResponse.size;
        this.forkCount = repoResponse.forks_count;
    }
    return Repos;
}());
exports.Repos = Repos;
