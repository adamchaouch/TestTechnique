import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person : Person = <Person>{};
  constructor(public activatedroute:ActivatedRoute,route:Router) { }
//au chargement de aboutcomponent 
//les données passée en url vont etre affceté dans les attribut de person déja crée
  ngOnInit(): void {
    this.person.id = this.activatedroute.snapshot.params['id'];
    this.person.name = this.activatedroute.snapshot.params['name'];
    this.person.lastname = this.activatedroute.snapshot.params['lastname'];
    this.person.email = this.activatedroute.snapshot.params['email'];
    console.log(this.person);
    

  }

}
