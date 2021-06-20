import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'; //this imports our recipe model object from a folder before our curent folder


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeItemSelectedEvent = new EventEmitter<Recipe>();
  //only the recipe array object will be stored in this array 
  recipes:Recipe[] = [ 
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fgrilled-chicken-breast-fried-chicken-fillet-and-royalty-free-image-928823336-1545082121.jpg' ),
    new Recipe('Another Test Recipe', 'This is simply a test',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fgrilled-chicken-breast-fried-chicken-fillet-and-royalty-free-image-928823336-1545082121.jpg' )
  ];

    constructor() {}

  ngOnInit(): void {
  }

  onRecipeItemClicked(recipe: Recipe){
    this.recipeItemSelectedEvent.emit(recipe);
    console.log('#2 Recipe list component reached');
  }

}
