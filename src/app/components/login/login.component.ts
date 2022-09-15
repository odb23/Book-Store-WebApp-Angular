import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  year = new Date().getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

  loginUser (form : Form) {
    console.log(form)
  }

}
