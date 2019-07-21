import { Component } from '@angular/core';
import { createWiresService } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Account';
  // numberElement=[];
  // count:number=0;
  // myVar;
  // current=0;
  // numbers = [1, 2, 3, 4, 5];
  // onlyOdd = false;
  // oddNumbers=[1,3,5];
  // evenNumbers=[2,4];
  // value=1;
  //
  // constructor() {
  //   this.count=1;
  // }

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
  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  numberType(num:number)
  {
    if(num%2==0) return'Even';
    if(num%2!=0) return'Odd';
  }
  GameStarted()
  {
    
   this.myVar= setInterval(()=>{ 
    
      console.log('Value ' +this.count);
      this.numberElement.push({
        type:this.numberType(this.count),
        value:this.count
      });

      this.count += 1;
      //this.increaseCount();
     }, 1000);

  
  }
  GameStopped()
  {
    console.log('Stopped');
    clearInterval(this.myVar);
  }
}
