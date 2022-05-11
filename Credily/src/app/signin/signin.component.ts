import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],

})
export class SigninComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}
  getValue(value: String) {
    if (value.length == 10) {
      document.getElementById("validationError").innerHTML="";
      setTimeout(() =>{
        this.router.navigate(['./details'])

      },1000);
    }
    else{
      
       document.getElementById("validationError").innerHTML="Please enter valid NPI";
    }
  }


}
