import { Component, OnInit, Output, EventEmitter } from '@angular/core'; //imports the component decorator 
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: 'shopping-list-edit.component.html'
})


export class ShoppingListEditComponent implements OnInit{

    @Output() newItemAdded = new EventEmitter<Ingredient>();

    ingredientName: string = '';
    ingredientAmount: number = null;

    constructor(private readonly shoppingListService: ShoppingListService){}
    
    ngOnInit(){
        this.shoppingListService.ingredientAdded.subscribe(
            () => {
              this.ingredientName = '';
              this.ingredientAmount = null;
            })
    }

    //send new ingredient to shopping list service
    onAddIngredient(){
        this.shoppingListService.addIngredient(new Ingredient(this.ingredientName, this.ingredientAmount ));
    }
    
    onClearIngredients(){
        this.shoppingListService.clearIngredientArray();
    }
}