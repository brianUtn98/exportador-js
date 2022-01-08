import Exportable from "./Exportable";

export default interface EstrategiaExportacion{
    exportar(exportable: Exportable): String;
}