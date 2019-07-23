import { Directive, HostBinding, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector:'[appDropDown]'
})
export class DropDownDirective 
{
     @HostBinding('class.open') isOpen:boolean=false;



constructor(private elRef: ElementRef,private renderer:Renderer2) {}
@HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    //console.log(event.target);
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
  @HostListener('mouseenter') mouseover() {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
//   @HostListener('mouseleave') mouseleave() {
//     this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
//   }
}