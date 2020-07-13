import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataServerService } from '../data-server.service';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-delete-table',
  templateUrl: './delete-table.component.html',
  styleUrls: ['./delete-table.component.css']
})
export class DeleteTableComponent  {
  selectedID : number[];
  constructor(public dialogRef: MatDialogRef<DeleteTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataServerService, public selectedrowdelete : DataTransferService) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  
    confirmDelete() :void{
    this.dataService.deleteData(this.data.id);
    }
    // confirmAllDelete(): void{
      
    //   for(let i in this.selectedrowdelete.ids)
    //   {
    //     this.dataService.deleteData(this.selectedrowdelete.ids[i]);
    //   }
    // }

}
