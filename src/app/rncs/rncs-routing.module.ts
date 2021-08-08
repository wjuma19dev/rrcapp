import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RncsPage } from './rncs.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RncsPage,
      },
      {
        path: 'create',
        loadChildren: () => import('./create/create.module').then(m => m.CreatePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RncsPageRoutingModule {}
