import AdapterExcel from "./AdapterExcel";
import EstrategiaExportacion from "./EstrategiaExportacion";
import Exportable from "./Exportable";

class ExportarExcel implements EstrategiaExportacion{
    adapter: AdapterExcel;

    constructor(adapter: AdapterExcel){
        this.adapter = adapter;
    }
    
    exportar(exportable: Exportable): String{
        return this.adapter.exportar(exportable);
    }
}

export default ExportarExcel;