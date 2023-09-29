import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appSelected]',
  standalone: true,
})
export class ColorDirective implements OnChanges {
  constructor(private el: ElementRef) {
    this.appSelected = false;
    this.backgroundColor = 'white';
    this.fontWeight = '400';
    this.color = 'var(--text-regular)';
  }
  // @Input('color') public surColor?: string;
  @Input() public appSelected?: boolean;
  @HostBinding('style.backgroundColor') private backgroundColor?: string;
  @HostBinding('style.color') private color?: string;
  @HostBinding('style.fontWeight') private fontWeight?: string;

  // @HostListener('mouseenter') private s() {
  //   this.el.nativeElement.style.color = this.surColor;
  // }
  // @HostListener('mouseleave') private n() {
  //   this.el.nativeElement.style.color = 'black';
  // }

  ngOnChanges(): void {
    if (this.appSelected) {
      this.backgroundColor = 'var(--bs-primary)';
      this.color = 'white';
      this.fontWeight = '500';
    } else {
      this.backgroundColor = 'white';
      this.fontWeight = '400';
      this.color = 'var(--text-regular)';
    }
  }
}
