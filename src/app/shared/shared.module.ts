import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule

  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
