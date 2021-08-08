import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';
import { IRnc } from '../rnc.interface';

@Component({
  selector: 'app-rnc',
  templateUrl: './rnc.component.html'
})
export class RncComponent implements OnInit {

  @Input() rnc: IRnc;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async onClick(): Promise<void> {
    const modal = await this.modalController.create({
      component: DetailComponent,
      componentProps: { rnc: this.rnc }
    });
    await modal.present();
  }

}
