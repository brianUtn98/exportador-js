import AdapterPDF from "./AdapterPDF";
import EstrategiaExportacion from "./EstrategiaExportacion";
import Exportable from "./Exportable";

class ExportarPDF implements EstrategiaExportacion{
    adapter: AdapterPDF;

    constructor(adapter: AdapterPDF){
        this.adapter = adapter;
    }

    exportar(exportable: Exportable): String{
        return this.adapter.exportar(exportable);
    }

    cambiarAdapter(adapter: AdapterPDF): void{
        this.adapter = adapter;
    }
}

export default ExportarPDF;