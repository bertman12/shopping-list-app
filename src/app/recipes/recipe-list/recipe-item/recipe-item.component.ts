import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  @Output() recipeItemEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeItemClicked(){
    this.recipeItemEvent.emit();
    console.log('#1 Recipe item component reached');
  }
}
