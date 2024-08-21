import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { CreateTags } from '../../../entities/create-tags';
import { JitEvaluator } from '@angular/compiler';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() data: CreateTags[] = [];
  @Output() tagDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(){

   this.loadData();
  }

  public loadData(): void {
   const tagsDate = localStorage.getItem('CreateTags');
   if (tagsDate) {
     this.data = JSON.parse(tagsDate);
   }
 }

 deleteTag(id: number): void {

  this.data = this.data.filter(a => a.Id !== id);

    localStorage.setItem('CreateTags', JSON.stringify(this.data));


    this.tagDeleted.emit(id);
}
}
