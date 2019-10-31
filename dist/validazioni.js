"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//CONTROLLO EMAIL
var Email = /** @class */ (function () {
    function Email(emailInserita) {
        this.email = this.validate(emailInserita);
    }
    Email.prototype.setEmail = function (emailInserita) {
        this.email = this.validate(emailInserita);
    };
    Email.prototype.getEmail = function () {
        return this.email;
    };
    Email.prototype.validate = function (emailInserita) {
        var caratteri = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //Controlla se è vuoto o null
        if (emailInserita === "" || emailInserita === null)
            console.log("Devi inserire una email.");
        if (emailInserita.match(caratteri) == null)
            console.log("La mail inserita contiene caratteri non validi.");
        var dominioEmail = emailInserita.split("@")[1];
        if (dominioEmail.split(".")[1] !== "com" && dominioEmail.split(".")[1] !== "it")
            console.log("Il dominio della email deve essere .com oppure .it");
        return emailInserita;
    };
    return Email;
}());
exports.Email = Email;
//controllo telefono
var Telefono = /** @class */ (function () {
    function Telefono(tel) {
        this.tel = tel;
        this.tel = this.validate(tel);
    }
    Telefono.prototype.setTelefono = function (tel) {
        this.tel = this.validate(tel);
    };
    Telefono.prototype.getTelefono = function () {
        return this.tel;
    };
    Telefono.prototype.validate = function (tel) {
        if (tel === "" || tel === null)
            //controllo se il numero è statto inserito 
            throw new Error("Numero non inserito.");
        if (tel.length < 12 || tel.length > 12)
            //Controllo la lunghezza del numero inserito
            throw new Error("Il numero inserito deve essere di 12 cifre.");
        if (tel.slice(0, 3) !== "+39")
            //controllo sul prefix
            throw new Error("Prefisso non valido.");
        return tel;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
//controllo codice fiscale
var CF = /** @class */ (function () {
    function CF(cf) {
        this.cf = cf;
        this.cf = this.validate(cf);
    }
    CF.prototype.setCf = function (cf) {
        this.cf = this.validate(cf);
    };
    CF.prototype.validate = function (cf) {
        var cfPattern = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
        //controllo se il codice fiscale è stato inserito
        if (cf === "" || cf === null) {
            throw new Error("Codice Fiscale non inserito.");
        }
        //matcho il codice fiscale insrito con il pattern const cfPattern = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
        if (cf.match(cfPattern) == null) {
            throw new Error("Il Codice Fiscale inserito non e' valido.");
        }
        return cf;
    };
    return CF;
}());
exports.CF = CF;
//Controllo voti
var Voti = /** @class */ (function () {
    function Voti(voti) {
        this.votoOrale = this.validate(voti[0]);
        this.votoScritto = this.validate(voti[1]);
        this.votoTotale = (this.votoOrale + this.votoScritto) / 2;
    }
    Voti.prototype.getVoto = function () {
        return this.votoTotale;
    };
    Voti.prototype.validate = function (voto) {
        if (voto === null || isNaN(voto) || voto < 1 || voto > 10) {
            throw new Error("Questo valutazione non è valida.");
        }
        return voto;
    };
    return Voti;
}());
exports.Voti = Voti;
//# sourceMappingURL=validazioni.js.map