import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetService } from './pet.service';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutComponent } from './about/about.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetFormComponent,
    MainpageComponent,
    AboutComponent,
    PetEditComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
