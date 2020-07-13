import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteTableComponent } from '../delete-table/delete-table.component';
import { DataServerService } from '../data-server.service';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-deleteall-table',
  templateUrl: './deleteall-table.component.html',
  styleUrls: ['./deleteall-table.component.css']
})
export class DeleteallTableComponent  {

  constructor(public dialogRef: MatDialogRef<DeleteTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataServerService, public selectedrowdelete : DataTransferService) { }
    onNoClick(): void {
      this.dialogRef.close();
    }
    confirmAllDelete(): void{
      
      for(let i in this.selectedrowdelete.ids)
      {
        this.dataService.deleteData(this.selectedrowdelete.ids[i]);
      }
    }

}
