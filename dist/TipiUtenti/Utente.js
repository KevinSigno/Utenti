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
var validazioni_1 = require("../Validazioni/validazioni");
var UtenteGenerico = /** @class */ (function () {
    function UtenteGenerico(email, privacy) {
        this.privacy = false;
        this.email = new validazioni_1.Email(email);
        this.privacy = privacy;
    }
    return UtenteGenerico;
}());
exports.UtenteGenerico = UtenteGenerico;
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
exports.UtenteInteressato = UtenteInteressato;
var UtenteIscritto = /** @class */ (function (_super) {
    __extends(UtenteIscritto, _super);
    function UtenteIscritto(email, nome, cognome, privacy, telefono, codice_fiscale) {
        var _this = _super.call(this, nome, cognome, email, privacy, telefono) || this;
        _this.codice_fiscale = new validazioni_1.CF(codice_fiscale);
        return _this;
    }
    return UtenteIscritto;
}(UtenteInteressato));
exports.UtenteIscritto = UtenteIscritto;
var UtenteVoti = /** @class */ (function (_super) {
    __extends(UtenteVoti, _super);
    function UtenteVoti(email, nome, cognome, privacy, telefono, codice_fiscale, voti) {
        var _this = _super.call(this, nome, cognome, email, privacy, telefono, codice_fiscale) || this;
        _this.voti = voti;
        return _this;
    }
    return UtenteVoti;
}(UtenteIscritto));
exports.UtenteVoti = UtenteVoti;
//# sourceMappingURL=Utente.js.map