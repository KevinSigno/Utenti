"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Email = /** @class */ (function () {
    function Email(email) {
        this.email = email;
        this.email = email.validate(email);
    }
    Email.prototype.setEmail = function (email) {
        this.email = email.validate(email);
    };
    Email.prototype.getEmail = function () {
        return this.email;
    };
    Email.prototype.validate = function (email) {
        var mailpattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    };
    return Email;
}());
exports.Email = Email;
var Telefono = /** @class */ (function () {
    function Telefono(telefono, prefix, number) {
        this.telefono = telefono;
        this.prefix = prefix;
        this.number = number;
    }
    Object.defineProperty(Telefono.prototype, "getPrefix", {
        get: function () {
            return this.prefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "getNumber", {
        get: function () {
            return this.number;
        },
        enumerable: true,
        configurable: true
    });
    Telefono.prototype.validate = function () {
        if (this.telefono.charAt(0) === '+') {
            this.prefix = this.telefono.slice(0, 3);
            for (var i = 3; i < this.telefono.length; i++) {
                if (isNaN(Number(this.telefono.charAt(i)))) {
                    console.log("Errore nell'inserimento");
                    return false;
                }
            }
            this.number = this.telefono.slice(3, this.telefono.length);
            console.log(this.prefix + " - " + this.number);
            return true;
        }
        else {
            for (var i = 0; i < this.telefono.length; i++) {
                if (isNaN(Number(this.telefono.charAt(i)))) {
                    console.log("Errore nell'inserimento");
                    return false;
                }
            }
            this.number = this.telefono.slice(0, this.telefono.length);
            this.prefix === undefined ? console.log("Prefisso non inserito - " + this.number) : console.log(this.prefix + " - " + this.number);
            return true;
        }
    };
    return Telefono;
}());
exports.Telefono = Telefono;
var CF = /** @class */ (function () {
    function CF(cf) {
        this.cf = cf;
    }
    Object.defineProperty(CF.prototype, "getcf", {
        get: function () {
            return this.cf;
        },
        enumerable: true,
        configurable: true
    });
    CF.prototype.validate = function () {
        var pattern = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/;
        if (pattern.test(this.cf)) {
            console.log("trueeeee");
            return true;
        }
        else {
            console.log("falseeee");
            return false;
        }
    };
    return CF;
}());
exports.CF = CF;
//# sourceMappingURL=validazioni.js.map