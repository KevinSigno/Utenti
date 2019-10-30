import { Telefono, Email, CF } from "../Validazioni/validazioni";

//Interfaccia Utente
interface Utente {
    nome?: string;
    cognome?: string;
    email: Email;
    privacy: boolean;
    telefono?: Telefono;
}



//Classe UtenteGenerico che implementa Utente
export class UtenteGenerico implements Utente {
    email: Email;
    privacy: boolean = false;

    constructor(email: string, privacy: boolean) {
        this.email = new Email(email);
        this.privacy = privacy;
    }
}
