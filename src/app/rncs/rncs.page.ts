import { FavoriteService } from './../favorite/favorite.service';
import { MenuOptionsComponent } from './../components/menu-options/menu-options.component';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding, MenuController, PopoverController } from '@ionic/angular';
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
  isAuthenticate: boolean = false;

  constructor(
    private menuController: MenuController,
    private rncService: RncService,
    private _popoverCtrl: PopoverController,
    private _favoriteService: FavoriteService
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

  onMenuOptions(event: Event) {
    this._popoverCtrl.create({
      component: MenuOptionsComponent,
      event: event,
      mode: 'ios'
    }).then(popover => {
      popover.present();
    })
  }

  onFavorite(rnc: IRnc, ionSliding: IonItemSliding): void {
    ionSliding.close();
    this._favoriteService.addFavorite(rnc);
    // console.log(rnc);
  }

}
