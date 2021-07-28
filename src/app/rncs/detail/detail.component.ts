import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { IRnc } from '../rnc.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  @Input() rnc: IRnc;

  constructor(
    private modalController: ModalController,
    private actionSheet: ActionSheetController
  ) { }

  ngOnInit() {}

  onCloseModal() {
    this.modalController.dismiss();
  }

  async onActionSheet() {
    const actionSheet = await this.actionSheet.create({
      cssClass: 'action-sheet-dropdown',
      buttons: [
        {
          text: 'Agregar a favoritos',
          icon: 'star-outline',
          handler: () => {
            console.log('Compartiendo el rnc!');
          }
        },
        {
          text: 'Compartir en redes',
          icon: 'share-outline',
          handler: () => {
            console.log('Compartiendo el rnc!');
          }
        },
        {
          text: 'Eliminar este registro',
          icon: 'trash-outline',
          handler: () => {
            console.log('Compartiendo el rnc!');
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          cssClass: 'action-btn-cancelar',
          handler: () => {
            console.log('Cancelaste!')
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
