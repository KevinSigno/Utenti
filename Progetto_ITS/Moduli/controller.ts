//import modulo Users
import { utente } from "./Utente";

//creo new Users

let primoUtente = new utente.UtenteVoti(
    "kevin@gmail.com",
    "kevin",
    "signo",
    true,
    "+393341704418",
    "SGNKVN99A14I690P",
    8,
    9

);
let secondoUtente = new utente.UtenteVoti(
    "ezio.raciti@gmail.com",
    "ezio",
    "raciti",
    true,
    "+393936888453",
    "RCTZEI98E14F255H",
    9,
    10
);
let terzoUtente = new utente.UtenteVoti(
    "agli.hoxha@gmail.com",
    "agli",
    "hoxha",
    true,
    "+391250678320",
    "HXHGLA96E20Z100C",
    15,
    16
);

//creo array di Users
let groupUsers: any = [];

//push Users in array groupUsers
groupUsers.push(primoUtente);
groupUsers.push(secondoUtente);
groupUsers.push(terzoUtente);

