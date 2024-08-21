import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitsComponent } from './visits.component';
import { RouterModule } from '@angular/router';
import path from 'path';



@NgModule({
  declarations: [VisitsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
    {  path:"" , component:VisitsComponent}
    ])
  ]
})
export class VisitsModule { }
