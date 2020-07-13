import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';


@Component({
  selector: 'app-mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.css']
})
export class MailPreviewComponent implements  OnInit 
{

  mailText: string;
  htmlContent: string;
  htmlContent1:string;
  i = -1 ;
  j = -1 ;
  k = -1 ;
  l = -1 ;
  word = '{fullName}';
  word1 = '{email}';
  constructor(public datatransfer:DataTransferService) { }
  ngOnInit() 
  {
    
   }
   
      
 

  
 next()
 {
  
   this.htmlContent =  this.htmlContent.replace(this.word,this.datatransfer.fname[this.i =  this.i + 1])
   this.htmlContent1 = this.htmlContent.replace(this.word1,this.datatransfer.email1[this.k = this.k + 1])
   this.htmlContent = this.htmlContent1;
   console.log("first value:",this.i);
   console.log("first value:",this.k);
  this.word = this.datatransfer.fname[this.j = this.j + 1]
  this.word1 = this.datatransfer.email1[this.l = this.l + 1]
  console.log(this.word1);
  console.log("second value:",this.j);
  console.log("first value:",this.l);
  
 }
 previous()
 {
    this.htmlContent = this.htmlContent.replace(this.word,this.datatransfer.fname[this.i = this.i - 1])
    this.htmlContent1 = this.htmlContent.replace(this.word1,this.datatransfer.email1[this.k = this.k - 1])
    this.htmlContent = this.htmlContent1;
    console.log("previous value:",this.i);
    console.log("first value:",this.k);
    this.word = this.datatransfer.fname[this.j = this.j - 1]
    this.word1 = this.datatransfer.email1[this.l = this.l - 1]
    console.log("previous second value:",this.j);
    console.log("first value:",this.l);
 }


// increase()
// {
  
//   this.i = this.i + 1;
//   console.log("updated value",this.i);
// }
// decrease()
// {
//   this.i = this.i - 1;
//   console.log("updated new value",this.i);
//   return this.i;

// }



}