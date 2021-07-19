import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'; //this imports our recipe model object from a folder before our curent folder
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  //only the recipe array object will be stored in this array 
  recipes:Recipe[];

  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route })
  }
}
