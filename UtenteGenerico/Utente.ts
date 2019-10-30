import {Telefono, Email, CF} from "./validazioni";



interface Utente {
    nome?:string;
    cognome?:string;
    email:Email;
    privacy:boolean;
    telefono?:Telefono;

    
}

export class UtenteGenerico implements Utente{
    email:Email;
    privacy:boolean= false;

    constructor(email:string , privacy:boolean){
        this.email=new Email(email);
        this.privacy=privacy;
       
    }
}

export class UtenteInteressato extends UtenteGenerico{

   
    nome:string="";
    cognome:string="";
    telefono:Telefono;
    constructor(email:string ,nome:string, cognome:string, privacy:boolean, telefono:string ){
        
        super(email,privacy);
        this.nome=nome;
        this.cognome=cognome;
        this.telefono= new Telefono(telefono);
    }

}

export class UtenteIscritto extends UtenteInteressato{

codice_fiscale:CF;

constructor(email:string ,nome:string, cognome:string, privacy:boolean, telefono:string, codice_fiscale:string ){
    super(nome,cognome,email,privacy,telefono);
    this.codice_fiscale=new CF(codice_fiscale);

}

}


export class UtenteVoti extends UtenteIscritto{
    voti:number;

    constructor(email:string ,nome:string, cognome:string, privacy:boolean, telefono:string, codice_fiscale:string, voti:number ){
        super(nome,cognome,email,privacy,telefono,codice_fiscale);
        this.voti=voti;


    }
 
}