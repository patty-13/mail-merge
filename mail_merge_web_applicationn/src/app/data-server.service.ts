import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataServerService 
{
  dialogData : any;
  dataChange: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([])
  private baseUrl ='http://localhost:8080/data';
  constructor(private http:HttpClient) { }
  // for getting all the list
  
  public getAllData()
  {
    return this.http.get('http://localhost:8080/data');
  }
  public getAllData1()
  {
    return this.http.get('http://localhost:8080/data');
  }
  // for creating a data
  createData(data):void
  {
    this.http.post('http://localhost:8080/data',data).subscribe(
      data=>  {
        this.dialogData = data;
      this.dialogData = [];}
    );
  }
  
  // for updating the data
  updateData(value):void
  {
    this.http.put('http://localhost:8080/data/'+ value.id,value).subscribe(data=>
    {
      this.dialogData = value;
    });
  }
  // for deleting the data
  // you can give a response type 
  // make a return string statement in spring boot
  // and use,{responseType:'Text'}
  deleteData(id:number):void
  {
    this.http.delete('http://localhost:8080/data/'+id).subscribe(data=>{
    console.log(data['']);}
    );
  }
 

  
  getDialogData()
  {
    return this.dialogData;
  }
}
