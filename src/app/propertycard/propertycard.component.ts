import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css']
})
export class PropertycardComponent implements OnInit {

  Property : any = {
    "id":1,
    "Type" : "Townhome",
    "Price" : 350000,
    "Image":"assets/images/home.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
