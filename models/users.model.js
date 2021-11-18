module.exports = class User{
    constructor(username, password, dni, isAdmin ){
        this.username = username;
        this.password = password;
        this.dni = dni;
        this.isAdmin = isAdmin;
    }
}