import { UtenteGenerico } from "./Utente";
import { Telefono } from "../Validazioni/validazioni";

export class UtenteInteressato extends UtenteGenerico {


    nome: string = "";
    cognome: string = "";
    telefono: Telefono;
    constructor(email: string, nome: string, cognome: string, privacy: boolean, telefono: string) {

        super(email, privacy);
        this.nome = nome;
        this.cognome = cognome;
        this.telefono = new Telefono(telefono);
    }
}
