import { Component, EventEmitter, Output } from '@angular/core';
import { CreateTags } from '../../../entities/create-tags';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  data: CreateTags[] = [];

  @Output() createTags: EventEmitter<CreateTags> = new EventEmitter();

  constructor() {
    this.loadData();
  }

  private loadData(): void {
    try {
      const tagsData = localStorage.getItem('CreateTags');
      if (tagsData) {
        this.data = JSON.parse(tagsData);
      }
    } catch (error) {
      console.error('Error loading tags from localStorage', error);
      this.data = [];
    }
  }

  createTagsValue(name: HTMLInputElement): void {
    const newTag = new CreateTags();

    if(name.value==""){
      alert("not found")
    }
    newTag.Id = this.data.length ? Math.max(...this.data.map(tag => tag.Id)) + 1 : 1;
    newTag.name = name.value;

    this.data.push(newTag);
    localStorage.setItem('CreateTags', JSON.stringify(this.data));


    try {
      this.createTags.emit(newTag);
    } catch (error) {
      console.error('Error saving tags to localStorage', error);
    }
  }
}
