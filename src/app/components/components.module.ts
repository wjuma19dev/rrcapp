import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonCreateComponent } from './button-create/button-create.component';
import { MenuComponent } from '../components/menu/menu.component';



@NgModule({
  declarations: [
    ButtonCreateComponent,
    MenuComponent,
    MenuOptionsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ButtonCreateComponent,
    MenuComponent,
    MenuOptionsComponent
  ]
})
export class ComponentsModule { }
