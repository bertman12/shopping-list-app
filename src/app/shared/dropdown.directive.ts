import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
//this directive should add a css class to the element it sits on once it is clicked
export class DropdownDirective {

  @HostBinding('class.open') isOpen:boolean  = false;
  @HostListener('click') settoggleOpen() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

}
