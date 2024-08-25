import { Component, HostListener, OnInit, PLATFORM_ID, Inject, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule, SharedModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to styleUrls
})
export class AppComponent implements  AfterViewInit {
  title = "";
  isActiveMobile: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}



  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.widthMobile();
    }
  }

  @HostListener('window:resize')
  widthMobile(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isActiveMobile = window.innerWidth < 768;
    }
  }
}
