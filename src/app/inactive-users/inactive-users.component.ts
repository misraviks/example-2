import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
   users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();
  /**
   *
   */
  constructor(private userService:UsersService) {
    
    
  }
  ngOnInit(): void {
    //this.accounts= this.accountService.accounts;
    this.users= this.userService.inactiveUsers;
    
   }

  onSetToActive(id: number) {
    //this.userSetToActive.emit(id);
    this.userService.activateUser(id);
    
  }
}
