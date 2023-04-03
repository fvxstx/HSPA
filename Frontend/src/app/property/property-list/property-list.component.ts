import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Birla House',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Name: 'Erose Villa',
      Type: 'House',
      Price: 18400,
    },
    {
      Id: 3,
      Name: 'Arembepe Hou',
      Type: 'House',
      Price: 20000,
    },
    {
      Id: 4,
      Name: 'Cajacity',
      Type: 'House',
      Price: 78050,
    },
    {
      Id: 5,
      Name: 'Pernambues',
      Type: 'House',
      Price: 18700,
    },
    {
      Id: 6,
      Name: 'Inocoop',
      Type: 'House',
      Price: 19580,
    },
    {
      Id: 7,
      Name: 'Dias Dvila',
      Type: 'House',
      Price: 24500,
    },
    {
      Id: 8,
      Name: 'Candeias',
      Type: 'House',
      Price: 10000,
    },
  ];
}
