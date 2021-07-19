import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  @Input() index: number;
  
  constructor(private recipeService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onRecipeItemClicked(){
    // this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
