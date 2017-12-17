import {Funding} from './funding';
import {Service} from './service'; 
export class Idea {
    name:string;
    description:string;
    totalFunds:number;
    endDate:number;
    category:string;
    ideaId:number;
    serviceCreations:Service[];
    fundingCreations:Funding[];
}
