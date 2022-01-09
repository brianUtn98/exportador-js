import readline from "readline";
import ExportarPDF from "./src/ExportarPDF";
import ExampleClass from "./src/ExampleClass";

import Exportador from "./src/Exportador"
import AdapterJsPDF from "./src/AdapterJsPDF";

const exportable = new ExampleClass("brian","monroy","balboa 4250","1759");
const adapterJsPdf = new AdapterJsPDF();
const estrategiaPDF = new ExportarPDF(adapterJsPdf);
const exportadorPDF = new Exportador(exportable,estrategiaPDF);

/**
function askQuestion(query: any) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}


const run = async() => {
    while(true){
    await askQuestion("Todo bien? ");
    }
}


run();
**/

console.log(exportadorPDF.exportar());