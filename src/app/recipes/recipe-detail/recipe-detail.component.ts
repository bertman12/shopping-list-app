import { Component, Input, OnInit } from '@angular/core';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe:Recipe = null;
  constructor() { }

  ngOnInit(): void {
  }
  
}
