import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DlModule } from './dl/dl.module';

const routes: Routes = [
  {
    path: '/dialog',
    loadChildren: () => import('./dl/dl.module').then((m) => m.DlModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
