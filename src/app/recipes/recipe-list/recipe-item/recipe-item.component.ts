import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  onRecipeItemClicked(){
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
