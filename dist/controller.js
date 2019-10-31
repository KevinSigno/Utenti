"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utente_1 = require("./Utente");
//creo il primo utente
var primoUtente = new Utente_1.utente.UtenteVoti("kevin@gmail.com", "kevin", "signo", true, "+393341704418", "SGNKVN99A14I690P", 8, 9);
//creo il secondo utente
var secondoUtente = new Utente_1.utente.UtenteVoti("ezio.raciti@gmail.com", "ezio", "raciti", true, "+393936888453", "RCTZEI98E14F255H", 9, 10);
//creo il terzo utente
var terzoUtente = new Utente_1.utente.UtenteVoti("agli.hoxha@gmail.com", "agli", "hoxha", true, "+391250678320", "HXHGLA96E20Z100C", 15, 16);
//creo l'array di utenti
var gruppoUtenti = [];
//Inserisco all'interno dell'array i 3 utenti
gruppoUtenti.push(primoUtente);
gruppoUtenti.push(secondoUtente);
gruppoUtenti.push(terzoUtente);
//# sourceMappingURL=controller.js.map