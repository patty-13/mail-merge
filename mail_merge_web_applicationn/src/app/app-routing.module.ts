import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailPreviewComponent } from './mail-preview/mail-preview.component';


const routes: Routes = [
  {path: 'data-table', component: DataTableComponent},
  {path: 'mail-compose',component: MailComposeComponent },
  {path:'mail-preview', component: MailPreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
