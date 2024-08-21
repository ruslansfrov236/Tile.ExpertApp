import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { link } from 'fs';
import path from 'path';

export const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"links" , loadChildren :()=> import("./components/links/links.module").then(module=>module.LinksModule)},
  {path:"visits" , loadChildren:()=> import("./components/visits/visits.module").then(module=>module.VisitsModule)},
  {path:"tags" , loadChildren:()=> import("./components/tags/tags.module").then(module=>module.TagsModule)},
  {path:"wishlist" , loadChildren:()=> import("./components/wishlist/wishlist.module").then(module=>module.WishlistModule)},
  {path:"contacts" , loadChildren:()=> import("./components/contacts/contacts.module").then(module=>module.ContactsModule)},
  {path:"**" , loadChildren:()=> import('./shared/not-found/not-found.module').then(module=>module.NotFoundModule)}
];
