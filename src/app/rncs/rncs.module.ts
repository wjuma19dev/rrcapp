import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RncsPageRoutingModule } from './rncs-routing.module';

// PAGINAS Y COMPONENTES:
import { RncsPage } from './rncs.page';
import { RncComponent } from './rnc/rnc.component';
import { DetailComponent } from './detail/detail.component';

// MIS MODULOS:
import { ComponentsModule } from '../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RncsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RncsPage, RncComponent, DetailComponent]
})
export class RncsPageModule {}
