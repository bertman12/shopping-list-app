import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showRecipes: boolean = true;
  showShoppingList: boolean = false;
 
  whichLinkClicked(theLink){
    console.log("Back in the app component: " + theLink.srcElement.innerHTML);
    console.log("Back in the app component: " + theLink);
    
    if(theLink.srcElement.innerHTML === "Shopping List"){
      this.showShoppingList = true;
      this.showRecipes = false;
    }

    else if(theLink.srcElement.innerHTML === "Recipes"){
      this.showRecipes = true;
      this.showShoppingList = false;
    }
  }

}

// "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"