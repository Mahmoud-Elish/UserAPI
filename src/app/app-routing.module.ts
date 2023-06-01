import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { ActionsComponent } from './Components/actions/actions.component';
import { AlbumsComponent } from './Components/albums/albums.component';
const routes: Routes = [
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"users", component:HomeComponent},

  {
    path: 'add',
    component: HomeComponent,
    //data: { action: 'ADD' },
  },
  {
    path: 'users/details/:id',
    component: ActionsComponent,
    data: { action: 'DETAILS' },
  },
  {
    path: 'users/update/:id',
    component: ActionsComponent,
    data: { action: 'UPDATE' },
  },
  {
    path: 'users/delete/:id',
    component: ActionsComponent,
    data: { action: 'DELETE' },
  },
  {
    path: 'users/:id/albums',
    component: AlbumsComponent,
  },

  {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
