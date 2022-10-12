import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  RegisterForm! : FormGroup;
  submitted = false;
  constructor( private formBuilder : FormBuilder, private user :UserService, private router : Router,
    private snackbar : MatSnackBar) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      EmailId: ['', Validators.required],
      Password: ['', Validators.required],
      Mobile: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.RegisterForm.valid) {
      console.log("valid", this.RegisterForm.value);
      let reqData = {
        fullName: this.RegisterForm.value.FullName,
        email: this.RegisterForm.value.EmailId,
        phone: parseInt(this.RegisterForm.value.Mobile),
        password: this.RegisterForm.value.Password
      }
      this.user.registerUser(reqData).subscribe((response: any) => {
        console.log(response);
        this.snackbar.open(response.message, '',{ duration: 2000})
        this.router.navigateByUrl('/login');
      }
      );
    }
    
  }
  

}
