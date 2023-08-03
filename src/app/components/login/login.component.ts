import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  login!: FormGroup;

  loginSubmit() {
    if(this.login.get("email")?.value === "email@gmail.com" &&
      this.login.get("password")?.value === "Password123#"){

        localStorage.setItem("@sicredi-dragons: token", "Token981249ajwidawi0292814");

        this.router.navigate([""]);
      }
  }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ["",Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      password: ["", Validators.compose([
        Validators.required
      ])]
    })
  }
}
