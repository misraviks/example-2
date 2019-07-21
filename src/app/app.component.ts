import { Component } from '@angular/core';
import { createWiresService } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  numberElement=[];
  count:number=0;
  myVar;
  current=0;
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddNumbers=[1,3,5];
  evenNumbers=[2,4];
  value=1;

  /**
   *
   */
  constructor() {
    this.count=1;
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
