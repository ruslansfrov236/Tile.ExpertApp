import { Component, Input } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import $ from 'jquery';
import { SearchFilter } from '../../entities/search-filter';
import { CreateTags } from '../../entities/create-tags';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

})

export class NavbarComponent {

  @Input() data: CreateTags[] = [];
  constructor(public _router:Router){
    this.loadData();
  }
  searchButton() {
    this.isActive = !this.isActive;

}
  public loadData(): void {
    const tagsDate = localStorage.getItem('CreateTags');
    if (tagsDate) {
      this.data = JSON.parse(tagsDate);
    }
  }
  public isActive: boolean = false;
  searchFilterButtton(search:HTMLInputElement){



  var _filter =  this.data.filter(a=>a.name.toLowerCase()==search.value.toLowerCase())

    if(_filter.toLocaleString()==""){
     this._router.navigate(["**"]);
    }else{
      this.data;
    }

    }
  }




