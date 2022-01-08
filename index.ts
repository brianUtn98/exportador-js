import readline from "readline";

import Exportador from "./src/Exportador"

const exportador = new Exportador()

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