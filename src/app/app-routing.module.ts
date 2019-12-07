import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VscrollComponent } from './components/vscroll/vscroll.component';
import { DragComponent } from './components/drag/drag.component';
import { ListadragComponent } from './components/listadrag/listadrag.component';

const routes: Routes = [
  {path: 'vscroll', component: VscrollComponent },
  {path: 'drag', component: DragComponent },
  {path: 'listadrag', component: ListadragComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'vscroll'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
