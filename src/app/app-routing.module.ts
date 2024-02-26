import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogListItemComponent } from './dog-list-item/dog-list-item.component';
import { DogDetailedComponent } from './dog-detailed/dog-detailed.component';


const routes: Routes = [{
  path: "",
  redirectTo: "content",
  pathMatch: "full"
},
{
  path: "content/:id",
  component: DogDetailedComponent
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {}
