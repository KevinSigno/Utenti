//CONTROLLO EMAIL
export class Email {

    private email: string;
    constructor(emailInserita: string) {
        this.email = this.validate(emailInserita);
    }
    public setEmail(emailInserita: string) {
        this.email = this.validate(emailInserita);
    }
    public getEmail() {
        return this.email;
    }

    private validate(emailInserita: string): string {
        const caratteri = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //Controlla se è vuoto o null
        if (emailInserita === "" || emailInserita === null)
            console.log("Devi inserire una email.");

        if (emailInserita.match(caratteri) == null)
            console.log("La mail inserita contiene caratteri non validi.");

        let dominioEmail = emailInserita.split("@")[1];
        if (dominioEmail.split(".")[1] !== "com" && dominioEmail.split(".")[1] !== "it")
            console.log("Il dominio della email deve essere .com oppure .it");

        return emailInserita;
    }
}



//CONTROLLO TELEFONO
export class Telefono {
    constructor(private numeroIntero: String, private prefisso?: String, private numero?: String) { }
    validateNumber() {
        if (this.numeroIntero.charAt(0) === "+") { //Se il primo carattere del numero intero è "+"
            this.prefisso = this.numeroIntero.slice(0, 3);//Assegno a prefisso i primi 3 caratteri del numero intero
            for (let i = 3; i < this.numeroIntero.length; i++) {
                if (isNaN(Number(this.numeroIntero.charAt(i)))) {
                    console.log("Errore nel prefisso");
                    return false;
                }
            }
            this.numero = this.numeroIntero.slice(3, this.numeroIntero.length)
            console.log(this.prefisso + " - " + this.numero);
            return true
        }
        else {
            for (let i = 0; i < this.numeroIntero.length; i++) {
                if (isNaN(Number(this.numeroIntero.charAt(i)))) {
                    console.log("Errore nel numero inserito");
                    return false;
                }
            }
            this.numero = this.numeroIntero.slice(0, this.numeroIntero.length);
            this.prefisso === undefined ? console.log("Prefisso non inserito per questo numero: " + this.numero) : console.log(this.prefisso + " - " + this.numero);
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
        if (cf.length != 16) { //Controlla se il numero di caratteri emailInserita diverso da 16
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