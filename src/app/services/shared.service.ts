import { User } from './../model/User.model';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core'; //'@angular/core/src/event_emitter' 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
public static instance : SharedService = null;
user: User;
token: string;
showTemplate = new EventEmitter<boolean>();

  constructor() { 
    return SharedService.instance = SharedService.instance || null;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService();
    }
    return this.instance;
  }

  isLoggedIn():boolean{
    if(this.user == null){
      return false;
    }
    return this.user.email != '';
  }
}
