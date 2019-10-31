import { Telefono, Email, CF } from "../Moduli/validazioni";

export namespace utente{

//Interfaccia utente
interface Utente {
    nome?: string;
    cognome?: string;
    email: Email;
    privacy: boolean;
    telefono?: Telefono;
}

//Classe utente generico
export class UtenteGenerico implements Utente {
    email: Email;
    privacy: boolean = false;

    constructor(email: string, privacy: boolean) {
        this.email = new Email(email);
        this.privacy = privacy;
    }
}

//Utente Interessato
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

//Utente iscritto
export class UtenteIscritto extends UtenteInteressato {
    pagamenti: number;
    codice_fiscale: CF;

    constructor(email: string, nome: string, cognome: string, privacy: boolean, telefono: string, codice_fiscale: string, pagamenti: number) {
        super(nome, cognome, email, privacy, telefono);
        this.codice_fiscale = new CF(codice_fiscale);
        this.pagamenti = pagamenti;
    }
}


//Utente voti
export class UtenteVoti extends  UtenteIscritto {

    voti: number;

    constructor(email: string, nome: string, cognome: string, privacy: boolean, telefono: string, codice_fiscale: string, voti: number, pagamenti: number) {
        super(nome, cognome, email, privacy, telefono, codice_fiscale,pagamenti);
        this.voti = voti;
    }
}

//Docente
export class Docente extends UtenteGenerico  {
    password: string;

    constructor(email: string, nome: string, cognome: string, privacy: boolean, password: string) {
        super(email, privacy);
        this.password = password;
    }
}


}