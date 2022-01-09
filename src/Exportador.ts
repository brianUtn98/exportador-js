import EstrategiaExportacion from "./EstrategiaExportacion";
import Exportable from "./Exportable";

class Exportador{
    exportable: Exportable;
    estrategia: EstrategiaExportacion;

    constructor(exportable: Exportable, estrategia: EstrategiaExportacion){
        this.exportable = exportable;
        this.estrategia = estrategia;
    }

    exportar(){
        return this.estrategia.exportar(this.exportable);
    }

    cambiarModo(estrategia: EstrategiaExportacion){
        this.estrategia = estrategia;
    }
}

export default Exportador;