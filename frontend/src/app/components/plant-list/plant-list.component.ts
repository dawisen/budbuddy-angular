import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlantListService } from './plant-list.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {

  plants$: Observable<any> | undefined;

  constructor(private plantListService: PlantListService) { }

  ngOnInit(): void {
    this.plants$ = this.plantListService.getPlants();
  }

}
