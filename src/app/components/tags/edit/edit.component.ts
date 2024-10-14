import { Component, Inject, OnInit } from '@angular/core';
import { TagService } from '../../../services/tags/tag.service';
import { EditTags } from '../../../entities/tags/edit-tags';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Tags } from '../../../entities/tags/tags';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] // Fixed property name
})
export class EditComponent implements OnInit {
  data: Tags;

  constructor(@Inject(TagService) private tagService: TagService, private route: ActivatedRoute, private router:Router) {}

  async ngOnInit(): Promise<void> {
    await this.getEditById();
  }

  async  getEditById( ): Promise<void> {

       
    const _id = this.route.snapshot.paramMap.get('id');
   
    try {
  this.data = await this.tagService.getById(_id);
    
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

   async edit(title: HTMLInputElement ): Promise<void> {
    debugger
    const _id = this.route.snapshot.paramMap.get('id');
   
    const editTags = new EditTags();
    editTags.id=_id;
    editTags.title = title.value;
    
    try {
       await this.tagService.edit(editTags);
      this.router.navigate(["/tags"])
    } catch (error) {
      console.error('Error editing tag:', error);
    }
  }
}
