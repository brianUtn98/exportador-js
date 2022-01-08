import Exportable from "./Exportable";

export default interface AdapterPDF{
    exportar(exportable: Exportable): String;
}