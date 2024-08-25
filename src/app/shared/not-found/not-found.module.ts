import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { NOTFOUND } from 'dns';



@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path:"" , component:NotFoundComponent
      }
    ])
  ]
})
export class NotFoundModule { }
