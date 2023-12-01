import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css','./big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {
  /***
   * se colocar o @Input(),consiggo utilizar como propriedade o photoCover,lá no app-big-card
   */
  @Input()
  photoCover:string="";
  @Input()
  cardTitle:string="";
  @Input()
  cardDescription:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
