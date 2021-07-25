import { EActividad, EEstado, ERegimen } from "./rnc.enum";


export interface IRnc {
    cedulaORnc: string;
    nombreRazonSocial: string;
    nombreComercial: string;
    regimenDePago: ERegimen,
    estado: EEstado
    actividadEconomica: EActividad
}