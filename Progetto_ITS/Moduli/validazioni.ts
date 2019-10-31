//CONTROLLO EMAIL
export class Email {

     //vincolato ad Email
     private email: string;
     constructor(e: string) {
         this.email = this.validate(e);
     }
     public setEmail(e: string) {
         this.email = this.validate(e);
     }
     public getEmail() {
         return this.email;
     }
     //controllo Email
     private validate(e: string): string {
         const mailParam = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if (e === "" || e === null)
             //se vuoto o null
             throw new Error("Email Vuota");
         if (e.match(mailParam) == null)
             //match parametri
             throw new Error("Formato Email non valido");
         let domain = e.split("@")[1]; //splitto email con limite e passo da stringa ad array di stringhe
         if (domain.split(".")[1] !== "com" && domain.split(".")[1] !== "it")
             //condizione: se il TLD splittato, che si trova in posizione 1 del mio Array di stringhe non è ammesso lancio errore
             throw new Error("Email non valida");
         return e;
     }
 }
 



//CONTROLLO TELEFONO
export class Telefono {
    constructor(private numeroInserito: String, private prefisso?: String, private num?: String) { }
    validateNumber() {
        if (this.numeroInserito.charAt(0) === "+") { //Se il primo carattere del numero inserito e "+"
            this.prefisso = this.numeroInserito.slice(0, 3); //Assegna a prefisso la copia dei primi 3 caratteri del numero inserito.
            for (let i = 3; i < this.numeroInserito.length; i++) {
                if (isNaN(Number(this.numeroInserito.charAt(i)))) {
                    console.log("Errore nel prefisso");
                    return false;
                }
            }
            this.num = this.numeroInserito.slice(3, this.numeroInserito.length)
            console.log(this.prefisso + " - " + this.num);
            return true
        }
        else {
            for (let i = 0; i < this.numeroInserito.length; i++) {
                if (isNaN(Number(this.numeroInserito.charAt(i)))) {
                    console.log("Errore nel numero inserito");
                    return false;
                }
            }
            this.num = this.numeroInserito.slice(0, this.numeroInserito.length);
            this.prefisso === undefined ? console.log("Prefisso non inserito per questo numero: " + this.num) : console.log(this.prefisso + " - " + this.num);
            return true;
        }
    }
}



//CONTROLLO CODICEFISCALE
export class CF {
    constructor(private codiceFiscale: String) { }

    validateCodiceFiscale() {

        let i, cf = this.codiceFiscale, set1, set2, setpari, setdispari, s, caratterivalidi;

        if (cf == '') {
            console.log("Errore: Devi inserire un codice fiscale");
            return false;
        }

        cf = cf.toUpperCase();
        if (cf.length != 16) { //Controlla se il numero di caratteri e diverso da 16
            console.log("Errore: Il codice fiscale deve essere di 16 caratteri: " + this.codiceFiscale);
            return false;
        }

        caratterivalidi = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (i = 0; i < 16; i++) {
            if (caratterivalidi.indexOf(cf.charAt(i)) == -1) {
                console.log("Errore: Questo codice fiscale contiene caratteri non validi: " + this.codiceFiscale);
                return false;
            }
        }

        set1 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        set2 = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ";
        setpari = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        setdispari = "BAKPLCQDREVOSFTGUHMINJWZYX";
        s = 0;
        for (i = 1; i <= 13; i += 2)
            s += setpari.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));
        for (i = 0; i <= 14; i += 2)
            s += setdispari.indexOf(set2.charAt(set1.indexOf(cf.charAt(i))));

        if (s % 26 != cf.charCodeAt(15) - 'A'.charCodeAt(0)) {
            console.log("Codice fiscale invalido: " + this.codiceFiscale);
            return false;
        } else {
            console.log("Codice fiscale corretto: " + this.codiceFiscale);
            return true;
        }
    }
}