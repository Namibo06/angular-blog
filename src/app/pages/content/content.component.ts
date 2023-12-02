import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="";
  contentTitle:string="";
  contentDescription:string="";
  private id:string | null="0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    /**
     * através da inicialização automatica pelo construtor,foi importado o ActiveRoute,e na OnInit peguei pelo this,a propriedade route,acessei o paramMap,até a subscribe(),nela recuperei os valores pelo value e uma arrow function e pelo console.log(value.get("id")) consegui ver o id
     */
    this.route.paramMap.subscribe(value=>
      this.id = value.get("id")
    )
      this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }

}
