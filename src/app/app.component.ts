import { Component, HostListener, OnInit, PLATFORM_ID, Inject, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  ComponentsModule, SharedModule, CommonModule ],
  providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to styleUrls
})
export class AppComponent implements  AfterViewInit {
  @ViewChild(NavbarComponent) navbarComponent: NavbarComponent;

  title = "";
  isActiveMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}



  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.widthMobile();
    }
  }
   tagFilter(search:any){
    this.navbarComponent.loadData();
   }
  @HostListener('window:resize')
  widthMobile(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isActiveMobile = window.innerWidth < 768;
    }
  }
}
