import { Component, OnInit } from '@angular/core';
import { EActividad, EEstado, ERegimen } from './rnc.enum';

import { IRnc } from './rnc.interface';

@Component({
  selector: 'app-rncs',
  templateUrl: './rncs.page.html',
  styleUrls: ['./rncs.page.scss'],
})
export class RncsPage implements OnInit {

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

  constructor() { }

  ngOnInit() {}

  onClick() {
    
  }

}
