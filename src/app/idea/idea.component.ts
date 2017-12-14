import { Component, OnInit } from '@angular/core';
import{ CattegoriesService }from '../categories/cattegories.service';
import { CategoriesService } from '../categories.service';
@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  catagoriesList:String[];
  constructor(private categoriesService:CattegoriesService) { }

  ngOnInit(){
    
      this.categoriesService.getCategories().subscribe(
        result=>{
          this.catagoriesList=result;
        })
  }
}

