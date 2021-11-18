"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(userResponse) {
        this.login = userResponse.id;
        this.fullName = userResponse.login;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
    return User;
}());
exports.User = User;
