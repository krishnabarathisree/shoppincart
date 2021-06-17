import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any;

  constructor() { }

  ngOnInit(): void {
  }
  loginUser(signInForm:NgForm){
    console.log(signInForm),
    console.log(signInForm.value.passwordField)
  }

}
