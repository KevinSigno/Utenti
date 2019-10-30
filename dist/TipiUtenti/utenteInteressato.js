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
var Utente_1 = require("./Utente");
var validazioni_1 = require("../Validazioni/validazioni");
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
}(Utente_1.UtenteGenerico));
exports.UtenteInteressato = UtenteInteressato;
//# sourceMappingURL=utenteInteressato.js.map