//file does not give any function to the website but is only to demonstrate some TypeScript

//let num : string = 5;
// error: kan inte assigna numeriskt värde till variabel deklarerad att ha ett strängvärde.

let num : number = 5;
//num = "5";
// error: kan inte assigna om en variabel med ett strängvärde till en variabel som ska inneha ett numeriskt värde.


let arrOfNums : number[];
//variabel får bara innehålla array med nummeriska värden
let arrOfStr : string[];
//variabel får bara innehålla array med sträng värden
let arrOfAny : any[];
//godkänns. Arrayens innehålls typer kan inte definieras om utan måste vara "any". "Any" och "string", "number" osv är inte detsamma
let arrOfAny2 = [];
//godkänns samt skapar arrayen vilket arrOfAny inte gör.

//variabel får innehålla array med valfria värden, kan blandas
let arrOfOrdered : [number, string, boolean];


arrOfNums = [1, 2, 3 ,4 ,5];
//godkänns eftersom att värdet är array med nummeriska värden i.

//arrOfStr = [1, 2, 3 ,4 ,5];
//godkänns inte eftersom att värden i array inte är sträng.

arrOfAny = [1, 2, "test", true, [1, 2], {"color": "green", "number": 23}];
arrOfAny2 = arrOfAny;
//godkänner en array med olika typer av värden inuti.

//arrOfOrdered = [];
//Kan inte assignas eftersom att arrayen måste innehålla specifikt 3 värden i ordning nummer, sträng, boolean

arrOfOrdered = [5, "test", true];
//godkänns

//arrOfOrdered = ["test", 5, true];
//godkänns inte, fel ordning för värdena.

const returnString = (string1 : string, string2 : string) => console.log(string1 + " " + string2);
//returnString(2, "Anton");
//Visar error då bägge parametrarna ska vara av sträng-värde
returnString("Hej", "Anton");
//Godkänns. Funktionen kan returnera vilken type som helst.

//const returnStringHardCoded = (string1 : string, string2 : string) : string => console.log(string1 + " " + string2);
//returnStringHardCoded(2, "Anton");
//fungerar inte eftersom att console.log inte returnerar utan är en sideeffect med type "void" istället för "string"

const returnStringHardCoded2 = (string1 : string, string2 : string) : string => string1 + " " + string2;
console.log(returnStringHardCoded2("DET", "FUNGERAR"));
//Tar in 2 strängar som parametrar och returnerar även sträng. Inga errors eller varningar.



enum email { private = "antonhogstrom1994@gmail.com", business = "anton.business@gmail.com", student = "anton.student@gmail.com" };
console.log(email.business);
//skriver ut anton.business@gmail.com

class Icecream {
    private brand : string;
    private flavors : string[];

    constructor(brand : string, flavors : string[]) {
        this.brand = brand;
        this.flavors = flavors;
    }

    public getIcecream() : any[] {
        return [this.brand, [this.flavors]];
    }
}
let icecream1 = new Icecream("Magnum", ["choklad", "vanilj", "karamell"]);
console.log(icecream1.getIcecream());


interface Person {
    firstName: string
    lastName: string
    age: number
    married: boolean
    [key: string]: any
}
//Ett definierat interface om hur ett Person-objekt ska se ut

//const Adam : Person = {
//    firstName: "Adam",
//    lastName: "Andersson"
//}
//console.log(Adam);
//Varnar att age, married och student fattas.


const Anton : Person = {
    firstName: "Anton",
    lastName: "Hoegstroem",
    age: 26,
    married: false,
    student: "webdevelopment"
}
console.log(Anton);
//loggar objektet Anton utan varningar