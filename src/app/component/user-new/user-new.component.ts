import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ResponseApi } from '../../model/response.api';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  
  @ViewChild("form")
  form: NgForm

  user = new User('','','','');
  shared : SharedService;
  message : {};
  classCss: {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
  }


  findById(id:string){
    this.userService.findById(id).subscribe((responseApi: ResponseApi) => {
      this.user = responseApi.data;
      this.user.password = '';
    }, err =>{

    }

    })
  }

  private showMessage(message: {type: string, text: string}) :void {
    this.message = message;
  }

  private buildClasses(type: string):void{
    this.classCss = {
      
    }
  }


}
