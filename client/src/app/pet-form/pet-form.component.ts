import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {
  model: Pet = new Pet();
  message: string;
  constructor(private petService: PetService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.model = id === null
      ? new Pet()
      : await this.petService.getPet(+id);
  }

  async submit(form) {
    if (!form.valid) {
      return;
    }
    try {
      await this.petService.addPet(this.model);
      this.router.navigateByUrl('/pets');
    }
    catch (e) {
      console.log(e);
      this.message = 'Something bad happened! Try later!'
    }
  }
}
