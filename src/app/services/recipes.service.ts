import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})

//manages our recipes data and actions
export class RecipesService {

  //we protect our data by making it private and retieve it by value and not by reference
  //by using the slice method in the getRecipes function
  recipeSelected = new EventEmitter<Recipe>();
  

  private recipes:Recipe[] = [ 
    new Recipe('Chicken Salad', 'Filled with nutrients and protein!',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fgrilled-chicken-breast-fried-chicken-fillet-and-royalty-free-image-928823336-1545082121.jpg',
    [new Ingredient("Chicken Breast", 2),
    new Ingredient("Lettuce Head", 1),
    new Ingredient("Tomatoes", 2)]
     ),
    new Recipe('Exquisite Omelet', 'Cheesy, tasty and healthy!',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fomelet-picture-id121690656&f=1&nofb=1',
    [new Ingredient("Eggs", 3),
    new Ingredient("Spinach", 2),
    new Ingredient("Tomatoes", 1),
    new Ingredient("Ounces of Cheese", 16)])
  ];

  getRecipes() {
    return this.recipes.slice(); //returns new array that is a copy of the one in the service
  }

 getRecipe(index: number){
   return this.recipes[index];
 }

  displayRecipe(recipe: Recipe){
    this.recipeSelected.emit(recipe)
  }

  constructor() { }

}
