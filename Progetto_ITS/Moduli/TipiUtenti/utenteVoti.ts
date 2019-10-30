import { UtenteIscritto } from "./utenteIscritto";

export class UtenteVoti extends  UtenteIscritto {

    voti: number;

    constructor(email: string, nome: string, cognome: string, privacy: boolean, telefono: string, codice_fiscale: string, voti: number, pagamenti: number) {
        super(nome, cognome, email, privacy, telefono, codice_fiscale,pagamenti);
        this.voti = voti;
    }
}