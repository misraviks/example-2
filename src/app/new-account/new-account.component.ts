import { Component, EventEmitter, Output, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accountService.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  
  constructor(private loggingService:LoggingService,private accountService:AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status:string)=>alert('New Status '+status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded(accountName,accountStatus);
    //this.loggingService.log('A server status changed, new status: ' + accountStatus);
  }
}
