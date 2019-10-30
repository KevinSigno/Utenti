import { UtenteGenerico } from "./Utente";
import { Email } from "../Validazioni/validazioni";

export class Docente extends UtenteGenerico {
    password: string;

    constructor(email: string, nome: string, cognome: string, privacy: boolean, password: string) {
        super(email, privacy);
        this.password = password;
    }
}