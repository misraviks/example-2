import { Directive, OnInit, ElementRef, Renderer2,  HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterdirective]'
})
export class BetterdirectiveDirective implements OnInit {
  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
  ngOnInit(): void {
    //this.renderer.setStyle(this.el.nativeElement,"backgroundColor",'blue');
    this.backgroundColor=this.defaultColor;
  }

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData:Event)
  {
    // this.renderer.setStyle(this.el.nativeElement,"backgroundColor",'blue');
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData:Event)
  {
    // this.renderer.setStyle(this.el.nativeElement,"backgroundColor",'transparent');
    this.backgroundColor=this.defaultColor;
  }
}
