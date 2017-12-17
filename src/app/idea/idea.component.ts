import { Component, OnInit } from '@angular/core';
import{ CattegoriesService }from '../categories/cattegories.service';
import {IdeaService} from './idea.service';
import {Idea}from './idea';
import {Funding} from"./funding";
import { Fundingcreation } from './fundingcreation';
@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {
  catagoriesList:String[];
  ideas:Idea[];
  fund:Funding;
  fundingcreation=new Fundingcreation;
  constructor(private categoriesService:CattegoriesService,private ideaService:IdeaService) { }
  ngOnInit(){
      this.categoriesService.getCategories().subscribe(
        result=>{
          this.catagoriesList=result;
        })
  }
  onCategories(category:string){
    console.log(category);
    this.ideaService.getIdeas(category).subscribe(
      result=>{
              console.log(result);
              this.ideas=result;
      }
    )
  }
  buyFund(fund:Funding){

    console.log(fund.FundingId)
    this.fundingcreation=new Fundingcreation();
    console.log(fund)
  this.fundingcreation.categoryIds.push(fund.fundingId);
  this.ideaService.fundIdea(this.fundingcreation).subscribe(
    result=>{
      console.log("purchase sucessfully")
}
  )
  }
  
  
}

