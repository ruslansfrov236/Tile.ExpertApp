import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundModule } from './not-found/not-found.module';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';




@NgModule({
  declarations: [NavbarComponent, MobileNavbarComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    NotFoundModule

  ],
  exports:[
    NavbarComponent,
    MobileNavbarComponent
  ]
})
export class SharedModule { }
