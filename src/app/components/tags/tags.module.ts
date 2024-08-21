import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [TagsComponent, ListComponent, CreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"" , component:TagsComponent},

    ])
  ],
  exports:[
    ListComponent, CreateComponent
  ]
})
export class TagsModule { }
