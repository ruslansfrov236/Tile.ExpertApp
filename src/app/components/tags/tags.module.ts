import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './tags.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { TagService } from '../../services/tags/tag.service';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TagsComponent, ListComponent, CreateComponent, EditComponent],

  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:"" , component:TagsComponent},
      {path:"edit/:id" , component:EditComponent},
      { path: '', redirectTo: '/edit', pathMatch: 'full' }
    ])
  ],
  exports:[
    ListComponent, CreateComponent, TagsComponent, EditComponent
  ],
  
})
export class TagsModule { }
