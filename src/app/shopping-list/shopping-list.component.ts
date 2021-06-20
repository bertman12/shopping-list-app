import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})

export class ShoppingListComponent implements OnInit {

  localIngredientsArr: Ingredient[] = [];
  ingredient: Ingredient = null;
  
  constructor(private readonly shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.localIngredientsArr = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientAdded.subscribe(
      (updatedIngredientList: Ingredient[]) => {
        this.localIngredientsArr = updatedIngredientList;
      }
    )
    this.shoppingListService.ingredientsCleared.subscribe(
      () => {
        this.localIngredientsArr = [];
        console.log(this.localIngredientsArr);
      }
    )
  }


}

