import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
   users: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();
  constructor(private userService:UsersService) {}
  ngOnInit(): void {
    //this.accounts= this.accountService.accounts;
    this.users= this.userService.activeUsers;
    
   }
  onSetToInactive(id: number) {
   // this.userSetToInactive.emit(id);
   this.userService.inactivateUser(id);
  }
}
