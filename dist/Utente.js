"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var validazioni_1 = require("../Moduli/validazioni");
var utente;
(function (utente) {
    //Classe utente generico
    var UtenteGenerico = /** @class */ (function () {
        function UtenteGenerico(email, privacy) {
            this.privacy = false;
            this.email = new validazioni_1.Email(email);
            this.privacy = privacy;
        }
        return UtenteGenerico;
    }());
    utente.UtenteGenerico = UtenteGenerico;
    //Utente Interessato
    var UtenteInteressato = /** @class */ (function (_super) {
        __extends(UtenteInteressato, _super);
        function UtenteInteressato(email, nome, cognome, privacy, telefono) {
            var _this = _super.call(this, email, privacy) || this;
            _this.nome = "";
            _this.cognome = "";
            _this.nome = nome;
            _this.cognome = cognome;
            _this.telefono = new validazioni_1.Telefono(telefono);
            return _this;
        }
        return UtenteInteressato;
    }(UtenteGenerico));
    utente.UtenteInteressato = UtenteInteressato;
    //Utente iscritto
    var UtenteIscritto = /** @class */ (function (_super) {
        __extends(UtenteIscritto, _super);
        function UtenteIscritto(email, nome, cognome, privacy, telefono, codice_fiscale, pagamenti) {
            var _this = _super.call(this, nome, cognome, email, privacy, telefono) || this;
            _this.codice_fiscale = new validazioni_1.CF(codice_fiscale);
            _this.pagamenti = pagamenti;
            return _this;
        }
        return UtenteIscritto;
    }(UtenteInteressato));
    utente.UtenteIscritto = UtenteIscritto;
    //Utente voti
    var UtenteVoti = /** @class */ (function (_super) {
        __extends(UtenteVoti, _super);
        function UtenteVoti(email, nome, cognome, privacy, telefono, codice_fiscale, voti, pagamenti) {
            var _this = _super.call(this, nome, cognome, email, privacy, telefono, codice_fiscale, pagamenti) || this;
            _this.voti = voti;
            return _this;
        }
        return UtenteVoti;
    }(UtenteIscritto));
    utente.UtenteVoti = UtenteVoti;
    //Docente
    var Docente = /** @class */ (function (_super) {
        __extends(Docente, _super);
        function Docente(email, nome, cognome, privacy, password) {
            var _this = _super.call(this, email, privacy) || this;
            _this.password = password;
            return _this;
        }
        return Docente;
    }(UtenteGenerico));
    utente.Docente = Docente;
})(utente = exports.utente || (exports.utente = {}));
//# sourceMappingURL=Utente.js.map