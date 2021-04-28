// import { Component, OnInit } from '@angular/core';
// import { DataTransferService } from '../data-transfer.service';


// @Component({
//   selector: 'app-mail-preview',
//   templateUrl: './mail-preview.component.html',
//   styleUrls: ['./mail-preview.component.css']
// })
// export class MailPreviewComponent implements  OnInit 
// {

//   mailText: string;
//   htmlContent: string;
//   htmlContent1:string;
//   i = -1 ;
//   j = -1 ;
//   k = -1 ;
//   l = -1 ;
//   word = '{fullName}';
//   word1 = '{email}';
//   constructor(public datatransfer:DataTransferService) { }
//   ngOnInit() 
//   {
    
//    }
   
      
 

  
//  next()
//  {
  
//    this.htmlContent =  this.htmlContent.replace(this.word,this.datatransfer.fname[this.i =  this.i + 1])
//    this.htmlContent1 = this.htmlContent.replace(this.word1,this.datatransfer.email1[this.k = this.k + 1])
//    this.htmlContent = this.htmlContent1;
//    console.log("first value:",this.i);
//    console.log("first value:",this.k);
//   this.word = this.datatransfer.fname[this.j = this.j + 1]
//   this.word1 = this.datatransfer.email1[this.l = this.l + 1]
//   console.log(this.word1);
//   console.log("second value:",this.j);
//   console.log("first value:",this.l);
  
//  }
//  previous()
//  {
//     this.htmlContent = this.htmlContent.replace(this.word,this.datatransfer.fname[this.i = this.i - 1])
//     this.htmlContent1 = this.htmlContent.replace(this.word1,this.datatransfer.email1[this.k = this.k - 1])
//     this.htmlContent = this.htmlContent1;
//     console.log("previous value:",this.i);
//     console.log("first value:",this.k);
//     this.word = this.datatransfer.fname[this.j = this.j - 1]
//     this.word1 = this.datatransfer.email1[this.l = this.l - 1]
//     console.log("previous second value:",this.j);
//     console.log("first value:",this.l);
//  }


// // increase()
// // {
  
// //   this.i = this.i + 1;
// //   console.log("updated value",this.i);
// // }
// // decrease()
// // {
// //   this.i = this.i - 1;
// //   console.log("updated new value",this.i);
// //   return this.i;

// // }



// }
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
  htmlContent2:string;
  htmlContent3:string;
  htmlContent4:string;
  htmlContent5:string;
  htmlContent6:string;
  htmlContent7:string;
  htmlContent8:string;
  i = -1 ;
  j = -1 ;
  k = -1 ;
  l = -1 ;
  m = -1;
  n = -1;
  o = -1;
  p = -1;
  i1 = -1 ;
  j1 = -1 ;
  k1 = -1 ;
  l1 = -1 ;
  m1 = -1;
  n1 = -1;
  o1 = -1;
  p1 = -1;
  q = -1;
  q1 = -1;
  word = '{fullName}';
  word1 = '{email}';
  word2 = '{companyName}';
  word3 = '{country}';
  word4 = '{city}';
  word5 = '{addressLine1}';
  word6 = '{addressLine2}';
  word7 = '{zipCode}';
  word8 = '{phone}';
  count = -1;
  a = true;
  b = true;
  constructor(public datatransfer:DataTransferService) { }
  ngOnInit() 
  {
    
   }
   
      
 

  
 next()
 {
  
   this.htmlContent =  this.htmlContent.replace(this.word,this.datatransfer.fname[this.i =  this.i + 1])
   this.htmlContent1 = this.htmlContent.replace(this.word1,this.datatransfer.email1[this.j = this.j + 1])
   this.htmlContent2 = this.htmlContent1.replace(this.word2,this.datatransfer.company[this.k = this.k + 1])
   this.htmlContent3 = this.htmlContent2.replace(this.word3,this.datatransfer.country[this.l = this.l + 1])
   this.htmlContent4 = this.htmlContent3.replace(this.word4,this.datatransfer.city[this.m = this.m + 1])
   this.htmlContent5 = this.htmlContent4.replace(this.word5,this.datatransfer.address1[this.n = this.n + 1])
   this.htmlContent6 = this.htmlContent5.replace(this.word6,this.datatransfer.address2[this.o = this.o + 1])
   this.htmlContent7 = this.htmlContent6.replace(this.word7,this.datatransfer.zipcode[this.p = this.p + 1])
   this.htmlContent8 = this.htmlContent7.replace(this.word8,this.datatransfer.phone[this.q = this.q + 1])
   this.htmlContent = this.htmlContent8;
   console.log("first value:",this.i);
   console.log("first value:",this.k);
  this.word = this.datatransfer.fname[this.i1 = this.i1 + 1]
  this.word1 = this.datatransfer.email1[this.j1 = this.j1 + 1]
  this.word2 = this.datatransfer.company[this.k1 = this.k1 + 1]
  this.word3 = this.datatransfer.country[this.l1 = this.l1 + 1]
  this.word4 = this.datatransfer.city[this.m1 = this.m1 + 1]
  this.word5 = this.datatransfer.address1[this.n1 = this.n1 + 1]
  this.word6 = this.datatransfer.address2[this.o1 = this.o1 + 1]
  this.word7 = this.datatransfer.zipcode[this.p1 = this.p1 + 1]
  this.word8 = this.datatransfer.phone[this.q1 = this.q1 + 1]
  console.log(this.word1);
  console.log("second value:",this.j);
  console.log("first value:",this.l);
  this.count++;
  console.log(this.count);
  if(this.count > this.datatransfer.fname.length  )
  {
  this.onEnd(this.b);
 }
}
 previous()
 {
    this.htmlContent = this.htmlContent.replace(this.word,this.datatransfer.fname[this.i = this.i - 1])
    this.htmlContent1 = this.htmlContent.replace(this.word1,this.datatransfer.email1[this.j = this.j - 1])
    this.htmlContent2 = this.htmlContent1.replace(this.word2,this.datatransfer.company[this.k = this.k - 1])
    this.htmlContent3 = this.htmlContent2.replace(this.word3,this.datatransfer.country[this.l = this.l - 1])
    this.htmlContent4 = this.htmlContent3.replace(this.word4,this.datatransfer.city[this.m = this.m - 1])
    this.htmlContent5 = this.htmlContent4.replace(this.word5,this.datatransfer.address1[this.n = this.n - 1])
    this.htmlContent6 = this.htmlContent5.replace(this.word6,this.datatransfer.address2[this.o = this.o - 1])
    this.htmlContent7 = this.htmlContent6.replace(this.word7,this.datatransfer.zipcode[this.p = this.p - 1])
    this.htmlContent8 = this.htmlContent7.replace(this.word8,this.datatransfer.phone[this.q = this.q - 1])
    this.htmlContent = this.htmlContent8;
    console.log("previous value:",this.i);
    console.log("first value:",this.k);
    this.word = this.datatransfer.fname[this.i1 = this.i1 - 1]
  this.word1 = this.datatransfer.email1[this.j1 = this.j1 - 1]
  this.word2 = this.datatransfer.company[this.k1 = this.k1 - 1]
  this.word3 = this.datatransfer.country[this.l1 = this.l1 - 1]
  this.word4 = this.datatransfer.city[this.m1 = this.m1 - 1]
  this.word5 = this.datatransfer.address1[this.n1 = this.n1 - 1]
  this.word6 = this.datatransfer.address2[this.o1 = this.o1 - 1]
  this.word7 = this.datatransfer.zipcode[this.p1 = this.p1 - 1]
  this.word8 = this.datatransfer.phone[this.q1 = this.q1 - 1]
    console.log("previous second value:",this.j);
    console.log("first value:",this.l);
    this.count--;
    if(this.count < -1)
    {
    
      this.onBegin(this.a);
    }

  
    console.log(this.count);
 }

onBegin(a)
{
      console.log(a);
      return a;
  
}
onEnd(b)
{
  console.log(b);
  return b; 
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
