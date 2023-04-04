import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: any;

  constructor(private housingService: HousingService) {}

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe({
      next: (data) => (this.properties = data),
      error: (error) => console.log(error),
    });
  }
}
