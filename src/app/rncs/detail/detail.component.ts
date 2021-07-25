import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IRnc } from '../rnc.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  @Input() rnc: IRnc;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  onCloseModal() {
    this.modalController.dismiss();
  }

}
