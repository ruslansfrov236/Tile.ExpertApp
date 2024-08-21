import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ComponentsModule } from "./components/components.module";
import { SharedModule } from "./shared/shared.module";

import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationDriver } from "@angular/animations/browser";






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentsModule ,SharedModule,  CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
