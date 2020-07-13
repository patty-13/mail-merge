import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServerService } from '../data-server.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent {
  

  constructor(public dialogRef: MatDialogRef<EditTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataServerService){}
  
  
    formControl = new FormControl('', [
      Validators.required
      // Validators.email,
    ]);


submit()
{
  
}

onNoClick(): void{
  console.log("you have closed it");

  this.dialogRef.close();
 
}
stopEdit(){
  console.log("you have made changes");
  this.dataService.updateData(this.data);
}

}
