import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { BookPreviewComponent, BookPreviewListComponent } from './components';

const childRoutes: Route[] = [{ path: '', component: CollectionPageComponent }];

@NgModule({
  declarations: [CollectionPageComponent, BookPreviewComponent, BookPreviewListComponent],
  imports: [CommonModule, RouterModule.forChild(childRoutes)],
})
export class BooksModule {}
