import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyHomePageComponent} from './my-home-page/my-home-page.component';
import {MyCenterComponent} from './my-center/my-center.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'list', component: MyHomePageComponent},
  {path: 'kayit', component: MyCenterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
