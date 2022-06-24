import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    hide = true;
    loginForm = this.formBuilder.group({
        correo: [''],
        password: ['']
    })


    constructor(private formBuilder: FormBuilder) { }
    
}