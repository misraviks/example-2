import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { BasicHighLightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterdirectiveDirective } from './better-directive/betterdirective.directive';
import { UnlessDirective } from './unless-directive/unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsService } from './accountService.service';
import { LoggingService } from './logging.service';
import { DropDownDirective } from './dropdown.directive';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersService } from './user.service';
import { CountUserActivity } from './statusCount.service';


@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighLightDirective,
    BetterdirectiveDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    DropDownDirective,
    ActiveUsersComponent,
    InactiveUsersComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountsService,LoggingService,UsersService,CountUserActivity],
  bootstrap: [AppComponent]
})
export class AppModule { }
