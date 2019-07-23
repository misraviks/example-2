import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      /**
       *
       */
      constructor(private log:LoggingService) {
          
          
      }
      statusUpdated=new EventEmitter<string>();
      onAccountAdded(name: string, status: string) {
        this.accounts.push({name:name, status:status});
        this.log.log('A server status changed, new status: ' + status);
      }
    
      onStatusChanged(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.log.log('A server status changed, new status: ' + newStatus);
      }
}