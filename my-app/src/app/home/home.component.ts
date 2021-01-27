import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Person } from '../person.module';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
emps : any[] = [];
persons : Person[] = [];




  constructor(private apiservice :ApiService ,public router:Router,public dialog :MatDialog ) { }
  
 /**
  * la méthode select va afficher la liste des personnes 
  */ select():void{
/**
  * this.apiservice va éxecuter la methode de selection de data personne de mock server 
  */
  this.apiservice.get().subscribe((data: any[])=>{  
      
    this.emps=data;
    console.log(this.emps); 
    this.emps.forEach(element => this.persons.push(element)
      );

  }) 	

 }
  ngOnInit(): void {
    
      this.select();
  }

  showmore(obj:Person){
    this.router.navigate(['/about',obj]);

}

delete(obj:Person) {
  const objIndex = this.persons.findIndex(element => element.id === obj.id);
    if (objIndex > -1) {
      this.persons.splice(objIndex, 1);

}
console.log(this.persons)}

updateRowData(obj:Person){
  console.log("update")
   this.persons.filter((value,key)=>{
    if(value.id == obj.id){
      value.name = obj.name;
      value.lastname = obj.lastname;
      value.email = obj.email;

    }
    return false;
  });
}
 /**
  * la méthode openDialog permet l'ouverture de modol EditComponent et l'envoi de data
  *  de homecomp  vers editcomp d'une maniére sync 
  *  la modification de object ce fait avec la fonction updateRowData(obj:Person)
  */
  openDialog(obj:Person) {
  const dialogRef = this.dialog.open(EditComponent, {
    width: '250px',
    data:obj
  }).afterClosed().subscribe(result => {
    console.log(result)
      this.updateRowData(result);
    
  });

  


}
}