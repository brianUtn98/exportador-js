import Datos from "./Datos";
import Exportable from "./Exportable";

class ExampleClass implements Exportable{
    lname: string;
    fname: string;
    address: string;
    zipcode: string;

    constructor(lname: string, fname: string, address: string, zipcode: string){
        this.lname = lname;
        this.fname = fname;
        this.address = address;
        this.zipcode = zipcode;
    }

    datos(): Datos{
        return {
            header: new Map<string,string>().set("lname","Lname").set("fname","Fname").set("address","Address").set("zipcode","Zipcode"),
            rows: Object.keys(this).map((key,index) => {
                const props = Object.entries(this);
                return new Map<string,string>().set(key,String(props[index][1]));
            })
        }
    }
}

export default ExampleClass;