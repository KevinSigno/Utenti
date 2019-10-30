x
export class Email{

    constructor(private email: string){
        this.email=email.validate(email);
    }

    public setEmail(email:string){
        this.email=email.validate(email)

    }

    public getEmail(){
        return this.email
    }

    private validate(email:string):string{
        const mailpattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        }
    }






export class Telefono{
    constructor(private telefono: String, private prefix?: String, private number?: String){}

    get getPrefix(){
        return this.prefix
    }

    get getNumber(){
        return this.number
    }

    validate(){

        if(this.telefono.charAt(0) === '+'){
            this.prefix = this.telefono.slice(0, 3);
            for(let i = 3; i < this.telefono.length; i++){
                if(isNaN(Number(this.telefono.charAt(i)))){
                    console.log("Errore nell'inserimento")
                    return false
                }
            }
            this.number = this.telefono.slice(3, this.telefono.length)
            console.log(this.prefix + " - " + this.number)
            return true
        }else{
            for(let i = 0; i < this.telefono.length; i++){
                if(isNaN(Number(this.telefono.charAt(i)))){
                    console.log("Errore nell'inserimento")
                    return false
                }
            }
            this.number = this.telefono.slice(0, this.telefono.length)
            this.prefix === undefined ? console.log("Prefisso non inserito - " + this.number) : console.log(this.prefix + " - " + this.number)
        return true
        }
    }
}


export class CF{
    constructor(private cf:string){}
    get getcf(){
        return this.cf
    
    }

    validate(){
        let pattern = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/;
        if(pattern.test(this.cf)){
            console.log("trueeeee")
            return true
        }else{
            console.log("falseeee")
            return false
        }
    }
}