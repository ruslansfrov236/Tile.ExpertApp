import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { CreateTags } from '../../../entities/tags/create-tags';

import { TagService } from '../../../services/tags/tag.service';
import { Tags } from '../../../entities/tags/tags';

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  

  @Output() createTags: EventEmitter<CreateTags> = new EventEmitter();
     
    constructor( @Inject(TagService) public tagsService: TagService){
    
   }
 
  

  createTagsValue(name: HTMLInputElement): void {
    const newTag = new CreateTags();

    if(name.value==""){
      alert("not found")
    }
    
    newTag.title = name.value;

     this.tagsService.create(newTag)


    try {
      this.createTags.emit(newTag);
    } catch (error) {
      console.error('Error saving tags to localStorage', error);
    }
  }
}
