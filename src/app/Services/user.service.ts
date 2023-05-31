import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userHttp:HttpClient) {}
  URL="https://jsonplaceholder.typicode.com/users";
  URLphotos="https://jsonplaceholder.typicode.com/albums";

  getAllUsers(){
    return this.userHttp.get(this.URL);
  }
  addUser(data: any) {
    return this.userHttp.post(`${this.URL}`, data);
  }
  getUserByID(id:number){
    return this.userHttp.get(`${this.URL}/${id}`);
  }
  updateUser(data: any){
    return this.userHttp.put(`${this.URL}/${data.id}`, data);
  }
  deleteUser(id: number){
    return this.userHttp.delete(`${this.URL}/${id}`);
  }
  //========================================================
  getAllAlbumsByID(id:number){
    return this.userHttp.get(`${this.URL}/${id}/albums`);
  }
  getAllPhotosByID(aid:number){
    return this.userHttp.get(`${this.URLphotos}/${aid}/photos`);
  }
}
