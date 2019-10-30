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
var utenteInteressato_1 = require("./utenteInteressato");
var UtenteIscritto = /** @class */ (function (_super) {
    __extends(UtenteIscritto, _super);
    function UtenteIscritto(email, nome, cognome, privacy, telefono, codice_fiscale, pagamenti) {
        var _this = _super.call(this, nome, cognome, email, privacy, telefono) || this;
        _this.codice_fiscale = new validazioni_1.CF(codice_fiscale);
        _this.pagamenti = pagamenti;
        return _this;
    }
    return UtenteIscritto;
}(utenteInteressato_1.UtenteInteressato));
exports.UtenteIscritto = UtenteIscritto;
//# sourceMappingURL=utenteIscritto.js.map