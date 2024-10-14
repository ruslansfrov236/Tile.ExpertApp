import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TagService } from '../../services/tags/tag.service';
import { HistoryService } from '../../services/history/history.service';
import { History } from '../../entities/histories/history';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() tagFiltered: EventEmitter<string> = new EventEmitter<string>();
  @Input() data: History[] = [];
  public isActive: boolean = false;

  constructor(
    private tagsService: TagService,
    private historyService: HistoryService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadData();
  }

  searchButton() {
    this.isActive = !this.isActive;
  }

  async loadData(): Promise<void> {
    try {
      this.data = await this.historyService.get();
    
      
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  async onEnter(search: HTMLInputElement): Promise<void> {
    if (search.value.trim()) {
      await this.createFilter(search.value.trim());
    }
  }

  async createFilter(search: string): Promise<void> {
    try {
      const data = await this.tagsService.search(search);
      this.isActive = true;

      if (!data || data.length === 0) {
        this.isActive = false;
        this.router.navigate(['**']); 
        return;
      }

      const history = new History();
      history.title = search;
      await this.historyService.create(history);
      
      this.tagFiltered.emit(search);
    } catch (error) {
      console.error('Error creating filter:', error);
    }
  }
}
