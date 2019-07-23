import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { createWiresService } from 'selenium-webdriver/firefox';
import { DOCUMENT } from '@angular/platform-browser';
import { AccountsService } from './accountService.service';
import { UsersService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[]=[];
  private currentTheme: string = 'darkly';
  bootstrapthemes =[
    'cerulean','cosmo','cyborg','darkly','flatly',
    'journal','lumen','paper','readable','sandstone',
    'simplex','slate','spacelab','superhero','united','yeti'
  ];
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document,private accountService:AccountsService,private usersService:UsersService ) { }
  //activeUsers = [];
  //inactiveUsers = [];

  ngOnInit(): void {
    //this.accounts= this.accountService.accounts;
    // this.activeUsers= this.usersService.activeUsers;
    // this.inactiveUsers= this.usersService.inactiveUsers;
   }
  title = 'Account';
  numberElement=[];
  count:number=0;
  myVar;
  current=0;
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddNumbers=[1,3,5];
  evenNumbers=[2,4];
  value=1;
  
  

  
 
 
 
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
  setTheme(type) {
    this.renderer.removeClass(document.body, 'theme-'+this.currentTheme);
    this.currentTheme = type;
    this.renderer.addClass(document.body, 'theme-'+this.currentTheme);
    this.document.getElementById('theme').href = '/assets/CssThemes/'+type+'.min.css';
  }
}
