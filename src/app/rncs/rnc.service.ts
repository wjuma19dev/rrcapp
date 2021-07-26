import { ERegimen, EEstado, EActividad } from './rnc.enum';
import { EventEmitter, Injectable } from '@angular/core';
import { IRnc } from './rnc.interface';


@Injectable({ providedIn: 'root' })
export class RncService {

    rncs: IRnc[] = [
        {
          cedulaORnc: '101-04359-8',
          nombreRazonSocial: 'SCOTIABANK REPUBLICA DOMINICANA SA, BANCO MULTIPLE',
          nombreComercial: 'SCOTIABANK REPUBLICA DOMINICANA',
          regimenDePago: ERegimen.NORMAL,
          estado: EEstado.ACTIVO,
          actividadEconomica: EActividad.BANCOSMULTIPLES
        },
        {
          cedulaORnc: '097-0024444-6',
          nombreRazonSocial: 'WILSON JUMA',
          nombreComercial: 'WILSON ANTONIO JUMA ALCANTARA',
          regimenDePago: ERegimen.NORMAL,
          estado: EEstado.ACTIVO,
          actividadEconomica: EActividad.BANCOSMULTIPLES
        }
    ]

    rncsObservador: EventEmitter<IRnc[]> = new EventEmitter();

    constructor() {
        console.log('RNC SERVICE WORKS')
    }

    get obtenerRncs() {
        return [...this.rncs];
    }

    create(nuevoRnc: IRnc) {
      this.rncs.push(nuevoRnc);
      console.log(this.rncs)
      this.rncsObservador.emit([...this.rncs]);
    }
}