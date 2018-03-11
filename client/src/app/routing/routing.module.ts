
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetListComponent } from "../pet-list/pet-list.component";
import { PetFormComponent } from '../pet-form/pet-form.component';
import { MainpageComponent } from '../mainpage/mainpage.component';
import { PetEditComponent } from '../pet-edit/pet-edit.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mainpage',
    pathMatch: 'full'
  },
  {
    path: 'mainpage',
    component: MainpageComponent
  },
  {
    path: 'pets',
    component: PetListComponent
  },
  {
    path: 'pets/new',
    component: PetFormComponent
  },
  {
    path: 'pets/:id/edit',
    component: PetEditComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }