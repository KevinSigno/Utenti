"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import modulo Users
var Utente_1 = require("./Utente");
//creo new Users
var User = new Utente_1.utente.UtenteVoti("mario@gmail.com", "mario", "rossi", true, "+39113467876", "MROSSI80A01E801W", 8, 9);
var User2 = new Utente_1.utente.UtenteVoti("luca@gmail.com", "luca", "verdi", true, "+39123367829", "LCAVRD80A01E801W", 9, 10);
var User3 = new Utente_1.utente.UtenteVoti("fede@gmail.com", "federico", "bianchi", true, "+39125067832", "FDEBCI80A01E809Z", 15, 16);
//creo array di Users
var groupUsers = [];
//push Users in array groupUsers
groupUsers.push(User);
groupUsers.push(User2);
groupUsers.push(User3);
//# sourceMappingURL=controller.js.map