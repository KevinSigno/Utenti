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


//controllo telefono
export class Telefono{
    constructor(private tel: string){
        this.tel=this.validate(tel);
    }


    public setTelefono(tel:string){
        this.tel=this.validate(tel);
    }
    public getTelefono(){
        return this.tel;
    }
    

    private validate(tel:string){
        if (tel === "" || tel === null)
        //controllo se il numero è statto inserito 
        throw new Error("Phone number missing");

    if (tel.length <12 || tel.length >12 )
        //Controllo la lunghezza del numero inserito
        throw new Error("This is not a phone number");

    if (tel.slice(0, 3) !== "+39")
       //controllo sul prefix
        throw new Error("Missing +");
    
    return tel;

        
        
    }
}

//controllo codice fiscale
export class CF{
    constructor(private cf:string){
        this.cf=this.validate(cf);
    }
    public setCf(cf:string){
        this.cf=this.validate(cf);
    }

    private validate(cf:string){
        const cfPattern = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
        //controllo se il codice fiscale è stato inserito
        if (cf==="" || cf=== null){
            throw new Error("Codice Fiscale is missing")
        }

        //matcho il codice fiscale insrito con il pattern const cfPattern = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
        if (cf.match(cfPattern) == null){
            throw new Error("Wrong characters");
        }
        return cf;

    }
}

//Controllo voti
export class Voti{

    private votoOrale: number;
    private votoScritto: number;
    private votoTotale: number;

    constructor(voti:Array<number>){
        this.votoOrale=this.validate(voti[0]);
        this.votoScritto=this.validate(voti[1])
        this.votoTotale=(this.votoOrale+this.votoScritto)/2;
    }
    public getVoto(){
        return this.votoTotale;
    }
    private validate(voto:number){
        if(voto=== null || isNaN(voto) || voto<1 || voto >10){
            throw new Error("This is not a correct rate");
        }
        return voto;
    }


}
    