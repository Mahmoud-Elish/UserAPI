import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  constructor(protected userService:UserService,  private router: Router,) {}
  AllUsers:any;
  displayForm = 'd-none';
  mulUser:{name:any,email:any,phone:any,address:any}[]=[];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next:(data)=>{ this.AllUsers = data; },
      error:(err)=>{console.log(err)}
    })
  }

  //========================================================================
  addUser() {
    let newUser = {
      name: this.AllUsers.name,
      email: this.AllUsers.email,
      phone: this.AllUsers.phone,
      address: this.AllUsers.address.city
    };

    if (newUser) {
      this.AllUsers.push(newUser);
    }

    this.closePopup();

  }
  //=========================================================================
  openPopup(){this.displayForm = 'd-block';}
  closePopup() {
    this.displayForm = 'd-none';
   this.router.navigate(['/home']);
  }
  //=========================================================================

}
