import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  pets: Pet[];
  alive: number;
  dead: number;

  constructor(private petService: PetService) { }

  async ngOnInit() {
    this.pets = await this.petService.getPets();

    var today = new Date();
    var stringdd = String( today.getDate() );
    var stringmm = String( today.getMonth() + 1 ); 
    var yyyy = today.getFullYear();
    var dd;
    var mm;
    
    var count = 0;

    if( stringdd.length == 1 )
    {
      dd = '0' + stringdd;
    }
    else
    {
      dd = parseInt(stringdd);
    }

    if( stringmm.length == 1 )
    {
      mm = parseInt('0' + stringmm);
    }
    else
    {
      mm = parseInt(stringmm);
    }
   
    for( let p of this.pets ){
      var deathdate = p.death;
      var stringday = deathdate.substring(8);
      var stringmonth = deathdate.substring(5,7);
      var stringyear = deathdate.substring(0,4);

      var day = parseInt(stringday);
      var month = parseInt(stringmonth);
      var year = parseInt(stringyear);
      if( deathdate == '' )
      {
        count++;
      }
      else{
        if( year == yyyy )
        {
          if( month == mm )
          {
            if( day > dd )
            {
              count++;
            }
          }
          else if( month > mm )
          {
            count++;
          }
        }
        else if( year > yyyy)
        {
          count++;
        }
      }
    }
    this.alive = count;
    this.dead = this.pets.length - count;
  }

}
