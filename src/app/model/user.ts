export class User {

    constructor({_access_token, _expireIn}) {
        this.access_token = _access_token;
        this.expiresIn = _expireIn;
    }
    
    access_token: String;
    expiresIn: Number;

}