import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core'; //imports the component decorator 
import { Ingredient } from 'src/app/shared/ingredient.model';


@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: 'shopping-list-edit.component.html'
})


export class ShoppingListEditComponent implements OnInit{
    @ViewChild('nameInput') nameInput: ElementRef;
    @ViewChild('amountInput') amountInput: ElementRef;
    @Output() newItemAdded = new EventEmitter<Ingredient>();


    ngOnInit(){
        
    }

    onAddRecipe(){
        
        const ingName: string = this.nameInput.nativeElement.value;
        const ingAmount: number = this.amountInput.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);
        this.newItemAdded.emit(newIngredient);

    }
}