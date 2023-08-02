import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';


const routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: AppComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
