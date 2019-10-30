"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validazioni_1 = require("../Validazioni/validazioni");
//Classe UtenteGenerico che implementa Utente
var UtenteGenerico = /** @class */ (function () {
    function UtenteGenerico(email, privacy) {
        this.privacy = false;
        this.email = new validazioni_1.Email();
        this.privacy = privacy;
    }
    return UtenteGenerico;
}());
exports.UtenteGenerico = UtenteGenerico;
//# sourceMappingURL=Utente.js.map