import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/notes', pathMatch: 'full'},
  {path: 'notes', component: HomeComponent},
  {path: 'notes/:id', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
