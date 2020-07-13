import { Component, OnInit, ViewChild, SecurityContext } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import { SendMessageService } from '../send-message.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MailPreviewComponent } from '../mail-preview/mail-preview.component';
import { DomSanitizer } from '@angular/platform-browser';


interface headers{
    value: string;
    viewValue :string;
}

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.css']
})
export class MailComposeComponent implements OnInit 
{
  
  blured = false;
  focused =false;
  editorForm : FormGroup;
  text_data : string[] = [];
  Headers: headers[] = [
    {value:'',viewValue:''},
    {value: '{fullName}',viewValue: 'Full Name'},
    {value: '{email}',viewValue: 'Email'},
  ];
  selectedOption = this.Headers[0].value;
  public editor;
  public TexttoInsert: string;
  
  displayedColumns: string[] = ["fullName" ,"email"];
  
  dataSource: MatTableDataSource<any>;
  tabledata;
  fname;
  email1;
  mailText;
  subject:string;
  multipleFiles = [];
  fileName : string[]=[];
  files: File[] = [];
  getSubject = new FormControl();
  durationInSeconds = 5;
  htmlContent : string;

  constructor(private gettingdata:DataTransferService, private sendingMessage : SendMessageService,private _snackBar: MatSnackBar,public dialog: MatDialog, private dom : DomSanitizer) {}
  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;

  ngOnInit() 
  {
    this.tabledata = this.gettingdata.getSelectedData1();
    this.dataSource = new MatTableDataSource(this.tabledata);
    this.tabledata.paginator = this.paginator;
    //console.log(this.tabledata[1]);
    this.editorForm = new FormGroup({
      'editor': new FormControl(null)
 });
}


onSubmit()
{
  //console.log(this.editorForm.get('editor').value);
 this.text_data.push(this.editorForm.get('editor').value);
 console.log(this.text_data);
 var text = this.editor.getText();
 var delta = this.editor.getContents();
 console.log(text);
 console.log(delta);
 console.log(justHtml);
 const formData = new FormData()
 for(let f of this.files)
      {
        //formData.append('files',this.multipleFiles[f]);
        formData.append('files',f);
      //this.fileName.push(this.multipleFiles[f].name);
      this.fileName.push(f.name);  
    }
      console.log("files in fileName",this.fileName);
 this.sendingMessage.sendMessage1(formData).subscribe(
  (res) => console.log(res),
  (err) => console.log(err)
);
 


 for (let i in this.gettingdata.fname)
 {
 var justHtml = this.editor.root.innerHTML.replace('{fullName}',this.gettingdata.fname[i]);
 var justHtml1 = justHtml.replace('{email}',this.gettingdata.email1[i]);
  this.email1  =  this.gettingdata.email1[i];
      
 this.sendData(justHtml1,this.email1,this.fileName);
 this._snackBar.openFromComponent(PizzaPartyComponent, {
  duration: this.durationInSeconds * 1000,
});

 }
 
 
}


ongetSubject()
{
  this.subject = this.getSubject.value;
}
 

created(event)
{
  console.log('editor-created',event);
  this.editor = event;
}
changedEditor(event : EditorChangeContent | EditorChangeSelection)
{
  console.log('editor-change',event);
  
}

focus($event) {
  // tslint:disable-next-line:no-console
  console.log('focus', $event)
  this.focused = true
  this.blured = false
}

blur($event) {
  // tslint:disable-next-line:no-console
  console.log('blur', $event)
  this.focused = false
  this.blured = true
}
selectOption(event : Event)
{
  this.selectedOption = (event.target as HTMLSelectElement).value;
  this.TexttoInsert = this.selectedOption;
  const selection = this.editor.getSelection(true);
  this.editor.insertText(selection.index,this.TexttoInsert);
}

sendData(justHtml1,email1,fileName)
{
    let user={
      email : email1,
      subject1:this.subject,
      html_Text: justHtml1,
      filename1: fileName
    }
    this.sendingMessage.sendMessage(user).subscribe(d =>
      {
        let res = d;
        console.log("email sending!!!");
      },
      err =>
      {
        console.log(err);
      }
      );
}


 selectMultipleFiles(event)
 {
   this.fileName = [];
  // if(event.target.files.length > 0)
  // {
  //   this.multipleFiles = [];
  //   this.multipleFiles = event.target.files;
  
  // }
  this.files.push(...event.addedFiles);   
  console.log(this.files);
 }
 onRemove(event) {
  console.log(event);
  this.files.splice(this.multipleFiles.indexOf(event), 1);
}

 onPreview()
 {
  let dialogRef = this.dialog.open(MailPreviewComponent);
  //  let mailText = this.editor.root.innerHTML;
  //  this.gettingdata.mailtext_import(mailText);
    let htmlContent = this.editor.root.innerHTML
   dialogRef.componentInstance.htmlContent = this.dom.sanitize(SecurityContext.HTML, htmlContent)
  //  dialogRef.afterClosed().subscribe(r=>{
  //    if(r===1)
  //    {
  //      this.gettingdata.clearmailtext();
  //    }
  //  })
 }
 


//  ngAfterViewInit() {
    
//      this.tabledata.paginator = this.paginator;
//     //this.dataSource.paginator = this.paginator;
    
//    }
//   // for filter object that is in the table 
//  ngAfterContentChecked()
//  {
//   this.dataSource = new MatTableDataSource(this.tabledata);
  
//  } 




}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}

