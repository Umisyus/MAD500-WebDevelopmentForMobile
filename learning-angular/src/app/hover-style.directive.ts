import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})

export class HoverStyleDirective {
  @Input() style: string;

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.textDecoration = "gold";
  }

  @HostListener('mouseenter') onMouseEnter = () => {
    if (this.elementRef.nativeElement.className.includes("Title"))
      this.elementRef.nativeElement.style.textDecoration = 'underline';

    this.elementRef.nativeElement.style.fontWeight = 'bold';

    // console.log(`You are hovering: ${document.querySelector(this.elementRef.nativeElement[0].className)}`);

  };


  @HostListener('mouseleave') onMouseLeave = () => {
    this.elementRef.nativeElement.style.textDecoration = '';
    this.elementRef.nativeElement.style.color = '';
    this.elementRef.nativeElement.style.fontWeight = '';

    // console.log(`You have stopped hovering: ${this.elementRef.nativeElement.toString()}!`);
  };
}
