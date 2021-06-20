import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
}) 

export class HeaderComponent implements OnInit {

 @Output() linkClicked = new EventEmitter<MouseEvent>();



  onLinkClick(myEvent: MouseEvent){
    console.log( `My event info: ${myEvent}`);
    console.log("Back in the header component: " + myEvent);
    this.linkClicked.emit(myEvent);
    


  }
  
  ngOnInit(): void { 
  }
}