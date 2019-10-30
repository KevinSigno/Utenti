import { CF } from "../Validazioni/validazioni";
import { UtenteInteressato } from "./utenteInteressato";

export class UtenteIscritto extends UtenteInteressato {
    pagamenti: number;
    codice_fiscale: CF;

    constructor(email: string, nome: string, cognome: string, privacy: boolean, telefono: string, codice_fiscale: string, pagamenti: number) {
        super(nome, cognome, email, privacy, telefono);
        this.codice_fiscale = new CF(codice_fiscale);
        this.pagamenti = pagamenti;
    }
}