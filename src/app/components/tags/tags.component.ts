import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ListComponent } from './list/list.component';
import { CreateTags } from '../../entities/create-tags';

@Component({
  selector: 'app-tags',
  standalone: false,

  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent  {
  @ViewChild(ListComponent) listComponent: ListComponent;



 createTags(createTags:CreateTags){

  this.listComponent.loadData();
 }
 tagDeleted(id:number){

  this.listComponent.loadData();
 }
}
