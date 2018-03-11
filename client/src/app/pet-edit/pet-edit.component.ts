import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  model: Pet = new Pet();
  message: string;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.model = id === null
      ? new Pet()
      : await this.petService.getPet(+id);
  }

  async submit(form) {
    if (!form.valid) {
      return;
    }

    try {
      await this.petService.updatePet(this.model.id, this.model);
      this.router.navigate(['/pets']);
    }
    catch (e) {
      console.log(e);
      this.message = 'Something bad happened! Try later!'
    }
  }
}
