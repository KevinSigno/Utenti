import { CF } from "../Validazioni/validazioni";
import { UtenteInteressato } from "./utenteInteressato";

export class UtenteIscritto extends UtenteInteressato {

    codice_fiscale: CF;

    constructor(email: string, nome: string, cognome: string, privacy: boolean, telefono: string, codice_fiscale: string) {
        super(nome, cognome, email, privacy, telefono);
        this.codice_fiscale = new CF(codice_fiscale);
    }
}