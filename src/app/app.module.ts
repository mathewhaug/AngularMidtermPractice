import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { DogsComponent } from './dogs/dogs.component';
import { DogInfo } from './models/dog-info';
import { DogListItemComponent } from './dog-list-item/dog-list-item.component';
import { DogSearchComponent } from './dog-search/dog-search.component';
import { AppRoutingModule } from './app-routing.module';
import { DogDetailedComponent } from './dog-detailed/dog-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    DogSearchComponent,
    DogListItemComponent,
    DogSearchComponent,
    DogDetailedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
