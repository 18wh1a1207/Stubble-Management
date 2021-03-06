import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
//import { Router } from '@angular/router';
declare var toaster:any;
declare var jQuery: any;

@Component({
  selector: 'app-farmer-register',
  templateUrl: './farmer-register.component.html',
  styleUrls: ['./farmer-register.component.scss']
})

export class FarmerRegisterComponent implements OnInit {
farmer: any;
otpsent: any;
otp: any;
number: any;
value: any;
RegisterForm: any;
  constructor(private service : UserService,private router : Router,private notifyService : NotificationService) {
   this.farmer={};
   }
   
   showToasterSuccess(){
    this.notifyService.showSuccess("Registration Successfull !!", "FARMER REGISTERATION")
}

showToasterError(){
    this.notifyService.showError("Invalid Ceredentials", "FAILED")
}

  ngOnInit(): void {
    this.otp = {};
  }

  verifyOTP(): void {
    if(this.otpsent == this.otp) {
      this.value = 1;
    } else {
      this.value = 0;
    }
  }

  RegisterSubmit(): void {
    //this.number = this.RegisterForm.number;
    this.verifyOTP();
   if(this.value == 1) {
      this.service.registerFarmer(this.RegisterForm).subscribe((result: any)=>{console.log("Venkat result " + result);});
    console.log("Venkat registerform " + this.RegisterForm);
    this.showToasterSuccess();
    this.router.navigate(['FarmerLogin']);
   } else {
     alert("Wrong OTP");
   }
  }

  openPop(RegisterForm: any) : void {
    this.RegisterForm = RegisterForm;
    this.number = this.RegisterForm.mobile
    this.service.getOtp(this.number).subscribe((result: any)=>{console.log(result); this.otpsent = result;});
    //jQuery('#otp').modal('show');
  }
}
