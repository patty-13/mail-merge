import { Component, OnInit, Inject } from '@angular/core';
import { DataServerService } from '../data-server.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent  {

  constructor(public dialogRef: MatDialogRef<AddTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
    public dataService: DataServerService) { }

  // ngOnInit(): void {
  // }
 submit(){
   
 }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    public addData(): void {
      this.dataService.createData(this.data);
    }

}
