import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accountService.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent  {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
/**
 *
 */
constructor(private loggingService:LoggingService,private accountService:AccountsService) {}

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
  this.accountService.onStatusChanged(this.id,status);
    //this.loggingService.log('A server status changed, new status: ' + status);
    this.accountService.statusUpdated.emit(status);
  }
}
