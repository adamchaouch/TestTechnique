import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from '../person.module';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  local_data:Person;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    //@Optional() is used to prevent error if no data is passed
    //@Inject(MAT_DIALOG_DATA) passe data de home vers edit a travers l'objet data 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Person) {
    console.log(data);
    this.local_data = data;

   
  }

 
  ngOnInit(): void {
  }

}
