import Datos from "./Datos";

class ExampleClass implements Exportable{
    lname: string;
    fname: string;
    address: string;
    zipcode: string;

    datos(): Datos{
        return {
            header: new Map<string,string>().set("lname","Lname").set("fname","Fname").set("address","Address").set("zipcode","Zipcode"),
            rows: Object.keys(this).map((key) => {
                return new Map<string,string>().set(key,this[key]);
            })
        }
    }
}