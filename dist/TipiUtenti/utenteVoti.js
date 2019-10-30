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
var utenteIscritto_1 = require("./utenteIscritto");
var UtenteVoti = /** @class */ (function (_super) {
    __extends(UtenteVoti, _super);
    function UtenteVoti(email, nome, cognome, privacy, telefono, codice_fiscale, voti, pagamenti) {
        var _this = _super.call(this, nome, cognome, email, privacy, telefono, codice_fiscale, pagamenti) || this;
        _this.voti = voti;
        return _this;
    }
    return UtenteVoti;
}(utenteIscritto_1.UtenteIscritto));
exports.UtenteVoti = UtenteVoti;
//# sourceMappingURL=utenteVoti.js.map