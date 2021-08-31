import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Roast Chicken', 'How to roast a chicken', 'https://static01.nyt.com/images/2020/03/25/dining/18clark-roast-chicken/clark-roast-chicken-square640-v4.jpg')
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
