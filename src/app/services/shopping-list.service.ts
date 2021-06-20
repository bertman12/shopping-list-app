import { Injectable, EventEmitter  } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})

/*refactor code in components to utilize functions and data structures here
* Feed data to each shopping list component 
* I could also inject a service to save ingredient lists the user has created and recall them on demand
*/
export class ShoppingListService {
  
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ];

  ingredientAdded = new EventEmitter<Ingredient[]>();
  ingredientsCleared = new EventEmitter<void>();

  constructor() { }

  //give value of ingredients array
  getIngredients(){
    return this.ingredients.slice();
  }

  //add indredient to array, emit event that a new ingredient is added and should be displayed on the shopping list
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.getIngredients());
  }

  //remove ingredient from array
  removeIngredient(ingredient: Ingredient){

  }
  
  //empties array of ingredients in the service and the local arrays in components
  clearIngredientArray(){
    this.ingredients = [];
    this.ingredientsCleared.emit();
  }


}
