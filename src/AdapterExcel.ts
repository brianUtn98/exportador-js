import Exportable from "./Exportable";

export default interface AdapterExcel{
    exportar(exportable: Exportable): String
}