import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

function symbolValidator(control:any){
  if(control.value.indexof('@')>-1){
    return null
  }else{
    return {symbol:true}
  }


}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      email:new FormControl('' ,[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required,symbolValidator])
    })
  }
  register(){
    console.log(this.registerForm?.value)
  }

}
