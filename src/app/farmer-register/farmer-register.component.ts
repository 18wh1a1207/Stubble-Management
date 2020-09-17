import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
//import { Router } from '@angular/router';
declare var toaster:any;
@Component({
  selector: 'app-farmer-register',
  templateUrl: './farmer-register.component.html',
  styleUrls: ['./farmer-register.component.scss']
})

export class FarmerRegisterComponent implements OnInit {
farmer: any;

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
  }

  RegisterSubmit(RegisterForm : any): void {
   this.service.registerFarmer(RegisterForm).subscribe((result: any)=>{console.log("Venkat result " + result);});
   //console.log("Venakt farmer " + this.farmer);
   console.log("Venkat registerform " + RegisterForm);
   this.showToasterSuccess();
   this.router.navigate(['FarmerLogin']);
   //toastr.success('Register', 'Registration Successful');
  }
}
