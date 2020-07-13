import { Injectable } from '@angular/core';
import {Data} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataTransferService 
{
  tabledata: Data[] = [];
  fname : string[]=[];
  email1 :string[]=[];
  ids : number[]=[];
  mailtext : string[]=[];
  checkstate : string[]=[];
  public addToList(data)
  {
    this.tabledata.push(data);
    console.log(this.tabledata);
  }
  public removeFromList(data)
  {
    let index = this.tabledata.indexOf(data); 
    this.tabledata.splice(index,1);
    console.log(this.tabledata);
  }
  getSelectedData1()
  {
    return this.tabledata;
  }
  clearSelection(data)
  {
    let index = this.tabledata.indexOf(data); 
    this.tabledata.splice(index,1);
    //this.tabledata = [];
   // return this.tabledata;
    console.log(this.tabledata);
  }

clearAllselection()
{
  this.tabledata = [];
  console.log(this.tabledata);
}


  // For id
  public id_import(data)
  {
    this.ids.push(data);
    console.log(this.ids);
  }
  public id_remove(data)
  {
    let index = this.ids.indexOf(data); 
    this.ids.splice(index,1);
    console.log(this.ids);
  }
  getids()
  {
    return this.ids;
  }
  clearids(data)
  {
   // this.ids= [];
   
      let idx = this.ids.indexOf(data);
      this.ids.splice(idx,1);
      console.log(this.ids);
    
    
  }
  clearallids()
  {
    this.ids = [];
    console.log(this.ids);
  }

 
  // FOR MAIL
  public email_import(data)
  {
    this.email1.push(data);
    console.log(this.email1);
  }
  public email_remove(data)
  {
    let index = this.email1.indexOf(data); 
    this.email1.splice(index,1);
    console.log(this.email1);
  }
  getEmail1()
  {
    return this.email1;
  }
  clearEmail1(data)
  {
    let idx = this.email1.indexOf(data); 
    this.email1.splice(idx,1);
    console.log(this.email1);
  }
  clearAllEmail1()
  {
    this.email1 = [];
    console.log(this.email1);
  }




// FOR NAME 
public name_import(data)
  {
    this.fname.push(data);
    console.log(this.fname);
  }
  public name_remove(data)
  {
    let index = this.fname.indexOf(data); 
    this.fname.splice(index,1);
    console.log(this.fname);
  }
  getfName()
  {
    return this.fname;
  }
  clearfname(data)
  {
    
      let idx = this.fname.indexOf(data); 
      this.fname.splice(idx,1);
    //this.fname= [];
    console.log(this.fname);
  }
  clearAllfName()
  {
    this.fname = [];
    console.log(this.fname);
  }

// For mailtext
public mailtext_import(data)
  {
    this.mailtext.push(data);
    console.log(this.mailtext);
  }
  public mailtext_remove(data)
  {
    let index = this.mailtext.indexOf(data); 
    this.mailtext.splice(index,1);
    console.log(this.mailtext);
  }
  getmailtext()
  {
    return this.mailtext;
  }
  clearmailtext()
  {
    this.mailtext= [];
    console.log(this.mailtext);
  }


//checkstate
public check_import(data)
  {
    this.checkstate.push(data);
    console.log(this.checkstate);
  }
  public check_remove(data)
  {
    let index = this.checkstate.indexOf(data); 
    this.checkstate.splice(index,1);
    console.log(this.checkstate);
  }
  getcheck()
  {
    return this.checkstate;
  }
  clearcheck(data)
  {
    
      let idx = this.checkstate.indexOf(data); 
      this.checkstate.splice(idx,1);
    //this.fname= [];
    console.log(this.checkstate);
  }
  clearAllcheck()
  {
    this.checkstate = [];
    console.log(this.checkstate);
  }



}
