import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
forgotForm! : FormGroup;
submitted = false;
  constructor(private formBuilder : FormBuilder, private userService : UserService,
    private snackbar : MatSnackBar) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email : ['', Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true;
    if(this.forgotForm.valid){
    console.log('valid', this.forgotForm.value)
    let reqData = {
      email : this.forgotForm.value.email
    }
    this.userService.forgot(reqData).subscribe((response : any) =>{
      console.log(response);
      this.snackbar.open(response.message,'',{duration : 2000})
    })
    }
  }
}
