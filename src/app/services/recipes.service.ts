import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})

//manages our recipes data and actions
export class RecipesService {

  //we protect our data by making it private and retieve it by value and not by reference
  //by using the slice method in the getRecipes function
  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [ 
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fgrilled-chicken-breast-fried-chicken-fillet-and-royalty-free-image-928823336-1545082121.jpg' ),
    new Recipe('Another Test Recipe', 'This is simply a test',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fgrilled-chicken-breast-fried-chicken-fillet-and-royalty-free-image-928823336-1545082121.jpg' )
  ];

  getRecipes() {
    return this.recipes.slice(); //returns new array that is a copy of the one in the service
  }



  constructor() { }
}
