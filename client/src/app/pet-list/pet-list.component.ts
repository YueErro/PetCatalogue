import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];
  
  constructor(private petService: PetService) { }

  async ngOnInit() {
    this.pets = await this.petService.getPets();
  }

}
