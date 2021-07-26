import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { EActividad, EEstado, ERegimen } from './rnc.enum';

import { IRnc } from './rnc.interface';
import { RncService } from './rnc.service';

@Component({
  selector: 'app-rncs',
  templateUrl: './rncs.page.html',
  styleUrls: ['./rncs.page.scss'],
})
export class RncsPage implements OnInit {

  rncs: IRnc[] = [];

  constructor(
    private menuController: MenuController,
    private rncService: RncService
  ) { }

  ngOnInit() {
    this.rncs = this.rncService.obtenerRncs;
    console.log("NGONINIT")
    this.rncService.rncsObservador
      .subscribe(rncs => {
        this.rncs = rncs;
      });
  }

  ionViewDidEnter() {
    console.log("Entrando a la pagina de RNC");
    // this.rncs = this.rncService.obtenerRncs;
  }

  onClick() {
    this.menuController.open();
  }

}
