import { Component,OnInit, ViewChild, AfterViewInit, AfterContentChecked, Inject} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource, MatTable} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

import {SelectionModel, DataSource} from '@angular/cdk/collections';
import { Data } from '@angular/router';
import { DataServerService } from '../data-server.service';

import { DataTransferService } from '../data-transfer.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditTableComponent } from '../edit-table/edit-table.component';
import { AddTableComponent } from '../add-table/add-table.component';
import { DeleteTableComponent } from '../delete-table/delete-table.component';
import { DeleteallTableComponent } from '../deleteall-table/deleteall-table.component';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';








@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})

export class DataTableComponent implements OnInit

{
  
 @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild('ref') ref:any;
 
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = ["select", "firstName", "lastName","email","companyName","country","city","addressLine1","addressLine2","zipCode","phone","actions"];
  dataSource: MatTableDataSource<Data>;

  newData = this.dataSource;
  selection = new SelectionModel<Data>(true,[]);
   public EmailList : string[]= [];
  public EmailList1 : string[]=[];
  data: Data[];
  id: number;
  index: number;
  selectedData: Data[]= [];
 // filterValues = {};
 // filterSelectObj = [];

  first_Name  = [];
  last_Name = [];
  email_Name = [];
  company_Name = [];
  country_Name = [];
  city_Name = [];
  address_1 = [];
  address_2 = [];
  zipcode_Number = [];
  phone_Number = [];

  firstnameFilter = new FormControl();
  lastnameFilter = new FormControl();
  emailFilter = new FormControl();
  companyFilter = new FormControl();
  countryFilter = new FormControl();
  cityFilter = new FormControl();
  address1Filter = new  FormControl();
  address2Filter = new FormControl();
  zipCodeFilter = new FormControl();
  phoneFilter = new FormControl();
  globalFilter = '';
  filteredValues = {firstName:'', lastName:'', email:'', companyName:'', country:'', city:'', addressLine1:'', addressLine2:'', zipCode:'', phone:''};

  constructor(private dataservice: DataServerService, private datatransfer : DataTransferService, public dialog: MatDialog)
  {

    this.first_Name = [
      {
         columnProp: 'firstName',
         options: []
      }
    ]
    this.last_Name = [
      { 
        columnProp: 'lastName',
        options: [] 
      }
    ]
    this.email_Name = [
      {
        columnProp: 'email',
        options: [] 
      }
    ]
    this.company_Name = [
      {
        columnProp: 'companyName',
        options: [] 
      }
    ]
    this.country_Name = [
      {
        columnProp: 'country',
        options: [] 
      }
    ]
    this.city_Name = [
      {
        columnProp: 'city',
        options: [] 
      }
    ]
    this.address_1 = [
      {
        columnProp: 'addressLine1',
        options: [] 
      }
    ]
    this.address_2 = [
      {
        columnProp: 'addressLine2',
        options: [] 
      }
    ]
    this.zipcode_Number = [
      {
        columnProp: 'zipCode',
        options: [] 
      }
    ]
    this.phone_Number = [
      {
        columnProp: 'phone',
        options: [] 
      }
    ]
    
    
    // this.filterSelectObj = [
     
    //   {
    //     name: 'FIRST NAME',
    //     columnProp: 'firstName',
    //     options: []
    //   }, {
    //     name: 'LAST NAME',
    //     columnProp: 'lastName',
    //     options: []
    //   }, {
    //     name: 'EMAIL',
    //     columnProp: 'email',
    //     options: []
    //   }, {
    //     name: 'COMPANY NAME',
    //     columnProp: 'companyName',
    //     options: []
    //   }, {
    //     name: 'COUNTRY',
    //     columnProp: 'country',
    //     options: []
    //   },
    //   {
    //     name: 'CITY',
    //     columnProp: 'city',
    //     options: []
    //   },
    //   {
    //     name: 'ADDRESS LINE 1',
    //     columnProp: 'addressLine1',
    //     options: []
    //   },
    //   {
    //     name: 'ADDRESS LINE 2',
    //     columnProp: 'addressLine2',
    //     options: []
    //   },
    //   {
    //     name: 'ZIP-CODE',
    //     columnProp: 'zipCode',
    //     options: []
    //   },
    //   {
    //     name: 'PHONE',
    //     columnProp: 'phone',
    //     options: []
    //   },
    // ]

  }
  

  ngOnInit()
  {
    this.dataservice.getAllData().subscribe(( data: Data[])=>{
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.createFilter();
      this.dataSource.sort = this.sort;
      
       this.first_Name.filter((o) => {
         o.options = this.getFilterObject(this.data, o.columnProp);
       })
       this.last_Name.filter((o) =>{
         o.options = this.getFilterObject(this.data,o.columnProp);
       })

       this.email_Name.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.company_Name.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.country_Name.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.city_Name.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.address_1.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.address_2.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.zipcode_Number.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.phone_Number.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
     })

////
    })
      
////
    this.firstnameFilter.valueChanges.subscribe((nameFilterValue) => {
      this.filteredValues['firstName'] = nameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.lastnameFilter.valueChanges.subscribe((lastnameFilterValue) => {
      this.filteredValues['lastName'] = lastnameFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.emailFilter.valueChanges.subscribe((emailFilterValue) => {
      this.filteredValues['email'] = emailFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.companyFilter.valueChanges.subscribe((companyFilterValue) => {
      this.filteredValues['companyName'] = companyFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.countryFilter.valueChanges.subscribe((countryFilterValue) => {
      this.filteredValues['country'] = countryFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.cityFilter.valueChanges.subscribe((cityFilterValue) => {
      this.filteredValues['city'] = cityFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.address1Filter.valueChanges.subscribe((address1FilterValue) => {
      this.filteredValues['addressLine1'] = address1FilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.address2Filter.valueChanges.subscribe((address2FilterValue) => {
      this.filteredValues['addressLine2'] = address2FilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
    this.zipCodeFilter.valueChanges.subscribe((zipcodeFilterValue) => {
      this.filteredValues['zipCode'] = zipcodeFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
     
    this.phoneFilter.valueChanges.subscribe((phoneFilterValue) => {
      this.filteredValues['phone'] = phoneFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });
   
   this.component_change();
  }
component_change()
{
  for(let i in this.datatransfer.getids)
  {
    this.ref.checked = true;
    this.selectData(this.datatransfer.getSelectedData1[i],this.ref[i]);
  }
}

  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // filterChange(filter, event) {
  //   //let filterValues = {}
  //   this.filterValues[filter.columnProp] = event.target.value.trim().toLowerCase();
  //   this.dataSource.filter = JSON.stringify(this.filterValues);
  // }

  createFilter() {
    
         

    const myFilterPredicate = (data:any, filter:string) :boolean =>{
      
      
      var globalMatch = !this.globalFilter;
      
      let firstnameFound1 = data.firstName.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1
      let lastnameFound1 = data.lastName.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1
      let emailFound1 = data.email.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1
      let companyFound1 = data.companyName.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1
      let countryFound1 = data.country.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1
      let cityFound1 = data.city.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1
      let address1Found1 = data.addressLine1.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1
      let address2Found1 = data.addressLine2.toString().trim().toLowerCase().indexOf(this.globalFilter.toLowerCase()) !== -1
      let zipcodeFound1 = data.zipCode.toString().trim().indexOf(this.globalFilter) !== -1
      let phoneFound1 = data.phone.toString().trim().indexOf(this.globalFilter) !== -1

      if (this.globalFilter) {
        // search all text fields
        globalMatch = firstnameFound1 || lastnameFound1 || emailFound1 || companyFound1 || countryFound1 || cityFound1 || address1Found1 || address2Found1 || zipcodeFound1 || phoneFound1 ;
      }

      if (!globalMatch) {
        return;
      }

      let searchString = JSON.parse(filter);
      let firstnameFound = data.firstName.toString().trim().toLowerCase().indexOf(searchString.firstName.toLowerCase()) !== -1
      let lastnameFound = data.lastName.toString().trim().toLowerCase().indexOf(searchString.lastName.toLowerCase()) !== -1
      let emailFound = data.email.toString().trim().toLowerCase().indexOf(searchString.email.toLowerCase()) !== -1
      let companyFound = data.companyName.toString().trim().toLowerCase().indexOf(searchString.companyName.toLowerCase()) !== -1
      let countryFound = data.country.toString().trim().toLowerCase().indexOf(searchString.country.toLowerCase()) !== -1
      let cityFound = data.city.toString().trim().toLowerCase().indexOf(searchString.city.toLowerCase()) !== -1
      let address1Found = data.addressLine1.toString().trim().toLowerCase().indexOf(searchString.addressLine1.toLowerCase()) !== -1
      let address2Found = data.addressLine2.toString().trim().toLowerCase().indexOf(searchString.addressLine2.toLowerCase()) !== -1
      let zipcodeFound = data.zipCode.toString().trim().indexOf(searchString.zipCode) !== -1
      let phoneFound = data.phone.toString().trim().indexOf(searchString.phone) !== -1
      // let weightFound = data.weight.toString().trim().indexOf(searchString.weight) !== -1
      if (searchString.topFilter)
       {  
          return firstnameFound || lastnameFound || emailFound || companyFound || countryFound || cityFound || address1Found || address2Found || zipcodeFound || phoneFound
      } 
      else
       { 
         
          return firstnameFound && lastnameFound && emailFound && companyFound && countryFound && cityFound && address1Found && address2Found && zipcodeFound && phoneFound
      }
      
    }
   
    return myFilterPredicate ; 
  }

  applyFilter(filter) {
    this.globalFilter = filter;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
    // const filterValue = (event.target as HTMLInputElement).value;
      //  filterValue = filterValue.trim();
      //  filterValue = filterValue.toLowerCase();
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // this.dataSource.filter = filterValue;
  }
    // let filterFunction = function (data: any, filter: string): boolean {
    //   let searchTerms = JSON.parse(filter);
    //   let isFilterSet = false;
    //   for (const col in searchTerms) {
    //     if (searchTerms[col].toString() !== '') {
    //       isFilterSet = true;
    //     } else {
    //       delete searchTerms[col];
          
    //     }
    //   }

    //   console.log(searchTerms);

    //   let nameSearch = () => {
    //     let found = false;
    //     if (isFilterSet) {
    //       for (var col in searchTerms) {
    //         searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
    //           if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
    //             found = true
    //           }
    //         });
    //       }
    //       return found
    //     } else {
    //       return true;
    //     }
    //   }
    //   return nameSearch()
    // }
    // return filterFunction
  


  // Reset table filters
  resetFilters() {
    this.filteredValues = {firstName:'', lastName:'', email:'', companyName:'', country:'', city:'', addressLine1:'', addressLine2:'', zipCode:'', phone:''}
    this.dataSource.filter = "";
    this.dataservice.getAllData()
    .subscribe(( data: Data[])=>{
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.filterPredicate = this.createFilter();
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.first_Name.filter((o) => {
        o.options = this.getFilterObject(this.data, o.columnProp);
      })
      this.last_Name.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);

      })
      this.email_Name.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.company_Name.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.country_Name.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.city_Name.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.address_1.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.address_2.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.zipcode_Number.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
      this.phone_Number.filter((o) =>{
        o.options = this.getFilterObject(this.data,o.columnProp);
      })
    })

    this.datatransfer.clearAllselection();
    this.datatransfer.clearAllEmail1();
    this.datatransfer.clearAllfName();   
    this.datatransfer.clearallids();
    this.selection.clear() 
    //this.masterToggle(false);
    
  }
 

  //expandedElement:  Data| null;

 /* ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    setTimeout(() => this.dataSource.paginator = this.paginator);
    //this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
   }
  // for filter object that is in the table 
 ngAfterContentChecked()
 {
  this.dataSource = new MatTableDataSource(this.data);
  
 } */

 
  //Whether the number of selected elements matches the total number of rows  
  getPageData()
  {
    return this.dataSource._pageData(this.dataSource._orderData(this.dataSource.filteredData));
  } 
 

 isAllSelected()
 {
  return this.getPageData().every((row)=> this.selection.isSelected(row));
                                   
  //  const numSelected = this.selection.selected.length;
    // const row = this.dataSource.data.length;
    // return numSelected === row;
     // const page = this.dataSource.paginator.pageSize;
      // let endIndex: number;
      // if (this.dataSource.data.length > (this.dataSource.paginator.pageIndex + 1) * this.dataSource.paginator.pageSize) {
      //   endIndex = (this.dataSource.paginator.pageIndex + 1) * this.dataSource.paginator.pageSize;
      // } else {
      //   // tslint:disable-next-line:max-line-length
      //   endIndex = this.dataSource.data.length - (this.dataSource.paginator.pageIndex * this.dataSource.paginator.pageSize);
      // }
      //  return numSelected === endIndex;
 }

pageChange()
{
  // if(this.ref.checked && this.isAllSelected())
  // {
  //   this.ref.checked = true;
  //   this.masterToggle(this.ref);
  // }
  // else if(!this.ref.checked && this.isAllSelected() )
  // {
  //   this.ref.checked =false;
  //   this.masterToggle(this.ref);
  // }
   
}
 masterToggle(checkboxChange: MatCheckboxChange) //event:any
 {
  this.isAllSelected() ?
   this.deselecteRows() : this.selectRows()
    // this.selection.clear() : this.selectRows(event) 
//     this.dataSource.data.forEach(row => {
//       this.selection.select(row);
      
//        if(event.checked)
//       {
//         this.datatransfer.addToList(row);
//         this.datatransfer.name_import(row.firstName.toString() +" "+ row.lastName.toString())
//         this.datatransfer.email_import(row.email);
//         this.datatransfer.id_import(row.id);
//       }
//     });
//  // console.log(this.data);
//   if(!event.checked){
//     this.datatransfer.clearSelection();
//     this.datatransfer.clearfname();
//     this.datatransfer.clearEmail1();        
//     this.datatransfer.clearids();           
//   }
// if(!event.checked)
// {
//   this.deselecteRows();
// }

}

selectRows()
{
  
  let endIndex: number;
  
  if (this.dataSource.data.length > (this.dataSource.paginator.pageIndex + 1) * this.dataSource.paginator.pageSize)
  {
     endIndex = (this.dataSource.paginator.pageIndex + 1) * this.dataSource.paginator.pageSize;
  } 
  else 
  {
    
    endIndex = this.dataSource.data.length;
  }
  

  for (let index = (this.dataSource.paginator.pageIndex * this.dataSource.paginator.pageSize); index < endIndex; index++)
   {
     
    this.selection.select(this.dataSource.data[index]);
    
        
            this.datatransfer.addToList(this.dataSource.data[index]);
            this.datatransfer.name_import(this.dataSource.data[index].firstName.toString() +" "+ this.dataSource.data[index].lastName.toString())
            this.datatransfer.email_import(this.dataSource.data[index].email);
            this.datatransfer.id_import(this.dataSource.data[index].id);
           

   }
   console.log("Page index",this.dataSource.paginator.pageIndex)
        console.log("page size",this.dataSource.paginator.pageSize)
        console.log("page length",this.dataSource.paginator.length)
        console.log("endidex:",endIndex)
   this.selection.select(...this.getPageData())
  

}
deselecteRows()
{
  let endIndex1:number;
    if (this.dataSource.data.length > (this.dataSource.paginator.pageIndex + 1) * this.dataSource.paginator.pageSize) {
       endIndex1 = (this.dataSource.paginator.pageIndex + 1) * this.dataSource.paginator.pageSize;
    } 
    else 
    {  
      endIndex1 = this.dataSource.data.length;
    }
    for (let index1 = (this.dataSource.paginator.pageIndex * this.dataSource.paginator.pageSize); index1 < endIndex1; index1++)
     {
        this.selection.deselect(this.dataSource.data[index1]);
        
          this.datatransfer.clearSelection(this.dataSource.data[index1]);
          this.datatransfer.clearfname(this.dataSource.data[index1].firstName.toString() +" "+ this.dataSource.data[index1].lastName.toString());
          this.datatransfer.clearEmail1(this.dataSource.data[index1].email);        
          this.datatransfer.clearids(this.dataSource.data[index1].id)
        
     }
     console.log("Page index",this.dataSource.paginator.pageIndex)
     console.log("page size",this.dataSource.paginator.pageSize)
     console.log("page length",this.dataSource.paginator.length)
     console.log("endidex:",endIndex1)  
     this.selection.deselect(...this.getPageData());
}



selectData(data:any, event:any)
{
 //console.log(data);
  //console.log(event);
  //Check data and status true/false
  
  if(event.checked)
  {
     //this.selectedData.push(data)
    //this.EmailList.push(data.email);
    this.datatransfer.addToList(data);
    this.datatransfer.name_import(data.firstName.toString() +" "+ data.lastName.toString());
    this.datatransfer.email_import(data.email);
    this.datatransfer.id_import(data.id);
    this.datatransfer.check_import(event.checked);
  }
  else
  {
    //this.selectedData =this.selectedData.filter(d=> d.id!=data.id);
    this.datatransfer.removeFromList(data);
    this.datatransfer.email_remove(data.email);
    this.datatransfer.name_remove(data.firstName.toString() +" "+data.lastName.toString());
    this.datatransfer.id_remove(data.id);
    this.datatransfer.check_remove(event.checked);
    console.log(event.checked);
    //const index = this.EmailList.indexOf(data.email); 
    //this.EmailList.splice(index,1);
  }
 // console.log(this.selectedData);
  //console.log(this.EmailList);
}

// masterToggle_1(idx,endidx, event)
// {
//   if(event.checked)
//   {

//   }
// }




startEdit(i:number, 
          id:number,
          firstName: string,
          lastName: string,
          email: string, 
          companyName:string, 
          country: string, 
          city: string, 
          addressLine1: string, 
          addressLine2: string,
          zipCode:number,
          phone: number,
          )

          {
            this.id =id;
            this.index = i;
            console.log(this.index);
            const dialogRef = this.dialog.open(EditTableComponent,{
              data:{id:id,
                    firstName:firstName,
                    lastName:lastName,
                    email:email,
                    companyName:companyName,
                    country:country,
                    city:city,
                    addressLine1:addressLine1,
                    addressLine2:addressLine2,
                   zipCode:zipCode,
                  phone:phone}
            });

            dialogRef.afterClosed().subscribe(r=>{
              console.log("the service is started!!!");
              if(r === 1)
              {
                console.log("the data is flowing");
                const foundIndex = this.dataservice.dataChange.value.findIndex(x=>x.id === this.id);
                this.dataservice.dataChange.value[foundIndex] = this.dataservice.getDialogData();
                this.resetFilters();
              }

            })
          }
  // refreshTable() {
  //   this.paginator._changePageSize(this.paginator.pageSize);
  // }

addNew()
{
  const dialogRef = this.dialog.open(AddTableComponent,{
    data : {data : this.data }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // After dialog is closed we're doing frontend updates
      // For add we're just pushing a new row inside DataService
      this.dataservice.dataChange.value.push(this.dataservice.getDialogData());
      this.resetFilters();
    }
  });
}
deleteItem(i:number, 
  id:number,
  firstName: string,
  lastName: string,
  email: string, 
  companyName:string, 
  country: string, 
  city: string, 
  addressLine1: string, 
  addressLine2: string,
  zipCode:number,
  phone: number)
  {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteTableComponent,{
      data: {id:id,
        firstName:firstName,
        lastName:lastName,
        email:email,
        companyName:companyName,
        country:country,
        city:city,
        addressLine1:addressLine1,
        addressLine2:addressLine2,
       zipCode:zipCode,
      phone:phone}
    });
    dialogRef.afterClosed().subscribe(r=>
      {
        if(r===1)
        {
          const foundIndex = this.dataservice.dataChange.value.findIndex(x=>x.id === this.id);
          this.dataservice.dataChange.value.splice(foundIndex, 1);
          this.resetFilters();
        }
      })
  }
deleteSelectedRows()
{
  const dialogRef = this.dialog.open(DeleteallTableComponent);

  dialogRef.afterClosed().subscribe(r=>{
    if(r===1)
    {
      this.selection.selected.forEach(item => {
        this.index = this.data.findIndex(d => d === item);
        this.data.splice(this.index, 1);
       this.resetFilters();
      });
      
    }
  })
  
}






}


