import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCreateComponent } from './button-create/button-create.component';
import { MenuComponent } from '../components/menu/menu.component';



@NgModule({
  declarations: [
    ButtonCreateComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ButtonCreateComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
