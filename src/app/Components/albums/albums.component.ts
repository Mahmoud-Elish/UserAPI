import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styles: [
  ]
})
export class AlbumsComponent {
  displayAlert = 'd-none';
  userId=0;
  AllAlbums:any;
  User:any;
  AllPhotos:any;

  constructor(
    protected userService: UserService,
    private activeRoute: ActivatedRoute
  ){}
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.userId = params['id'];
      this.get(params['id']);
      //console.log("the id is ====>"+ this.userId);
    });
    this.userService.getUserByID(this.userId).subscribe({
      next:(data)=>{ this.User = data; },
      error:(err)=>{console.log(err)}
    })
    this.userService.getAllAlbumsByID(this.userId).subscribe({
      next:(data)=>{ this.AllAlbums = data; },
      error:(err)=>{console.log(err)}
    })

}
  get(id: any) {
    this.userService.getUserByID(id).subscribe((data: any) => {
      this.User = data;
    });
  }
  go2Photos(aid:number){
    console.log("=====>"+aid)
    this.userService.getAllPhotosByID(aid).subscribe({
      next:(data)=>{ this.AllPhotos = data; },
      error:(err)=>{console.log(err)}
    })

    this.displayAlert = 'd-block';
  }
  close(){
    this.displayAlert = 'd-none';
  }
}
