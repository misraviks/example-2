import { CountUserActivity } from './statusCount.service';
import { Injectable } from '@angular/core';
@Injectable()
export class UsersService{
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    /**
     *
     */
    constructor(private activityCount:CountUserActivity) {
        
        
    }

    inactivateUser(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        
      }
    
      activateUser(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
      }
}