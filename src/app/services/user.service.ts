import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import {HELP_DESK_API} from './helpdesk.api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(user : User){
    return this.http.post(`${HELP_DESK_API}/api/auth`, user);
  }
}
