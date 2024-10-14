import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CreateTags } from '../../entities/tags/create-tags';

@Component({
  selector: 'app-tags',
  standalone: false,

  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent  {
  @ViewChild(ListComponent) listComponent: ListComponent;

 showEdit:boolean=false;

toggleCreate(){
  this.showEdit=false
}
toggleEdit(tagId: string): void {
 
  this.showEdit = true;
}

 createTags(createTags:CreateTags){

  this.listComponent.loadData();
 }
 tagDeleted( id:string){


  this.listComponent.loadData();
  
 }
 onToggleEdit(tagId: string): void {
  this.toggleEdit(tagId);
}

onToggleCreate(): void {
  this.toggleCreate();
}
}
