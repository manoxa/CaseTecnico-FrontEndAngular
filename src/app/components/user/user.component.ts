import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.getFindAll();
  }

  getFindAll(){
    this.userService.findAllUser("OpenShiftDemos").subscribe((user: User) =>{
      this.user = user;
    });
  }

}
