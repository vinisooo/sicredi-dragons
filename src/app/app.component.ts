import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sicredi-dragons';

  constructor(private router: Router) {}

  ngOnInit():void {
    const token = localStorage.getItem("@sicredi-dragons: token");

    if(!token){
      this.router.navigate(["/login"]);
    }
  }
}
