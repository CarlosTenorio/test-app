import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';

const childRoutes: Route[] = [{ path: '', component: CollectionPageComponent }];

@NgModule({
  declarations: [CollectionPageComponent],
  imports: [CommonModule, RouterModule.forChild(childRoutes)],
})
export class BooksModule {}
