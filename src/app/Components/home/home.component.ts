import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  constructor(protected userService:UserService) {}
  AllUsers:any;
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next:(data)=>{ this.AllUsers = data; },
      error:(err)=>{console.log(err)}
    })
  }
}
