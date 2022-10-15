import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  durationInSeconds = 3;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService, 
    private router: Router,
    private snackbar : MatSnackBar) { }
    

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log("Valid", this.loginForm.value);

      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      this.userService.loginUser(reqData).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.data);
        this.snackbar.open(response.message,'', {duration : 2000})
        this.router.navigateByUrl('/home/books')
      })
      
    }
  }
}
