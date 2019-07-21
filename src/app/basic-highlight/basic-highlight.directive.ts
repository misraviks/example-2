import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHighLightDirective implements OnInit{
    /**
     *
     */
    constructor(private elementRef:ElementRef) {
        
        
    }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor='green';
    }

}