import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';

const routes: Routes = [
    { path: '', component: AppComponent} ,
    { path: ':type', component: ContentWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
