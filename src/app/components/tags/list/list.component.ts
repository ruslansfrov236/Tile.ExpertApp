import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { CreateTags } from '../../../entities/tags/create-tags';
import { TagService } from '../../../services/tags/tag.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data: CreateTags[] = [];
  @Output() tagDeleted: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleEdit: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleCreate: EventEmitter<void> = new EventEmitter<void>();
  
  constructor(@Inject(TagService) private tagsService: TagService) {}

  async ngOnInit(): Promise<void> {
    await this.loadData();
  }

  async loadData(): Promise<void> {
    try {
      this.data = await this.tagsService.getAll();
    } catch (error) {
      console.error('Error loading tags', error);
    }
  }

  editTag(id: string): void {
   debugger
    return this.toggleEdit.emit(id);
  }

  createTag(): void {
    
    this.toggleCreate.emit();
  }

  deleteTag(id: string): void {
    this.tagsService.delete(id).then(() => {
      this.tagDeleted.emit(id);
      this.loadData(); 
    }).catch(error => {
      console.error('Error deleting tag:', error);
    });
  }
}
