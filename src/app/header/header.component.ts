import { Component,  OnInit, } from '@angular/core';

@Component({
    selector: 'app-header',
    styles: ['.active{background: #DDDDDD; border-radius: 15px; }' ],
    templateUrl: './header.component.html'
}) 

export class HeaderComponent implements OnInit {

  ngOnInit(): void { 
  }
}