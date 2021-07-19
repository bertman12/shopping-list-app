import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe:Recipe = null;

  constructor(private readonly shoppingService: ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipesService,
              private router: Router) { }
  id: number;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddIngredientsToShopList(){
    this.shoppingService.addIngredientsToShopList(this.recipe.ingredients);
  }
 
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
