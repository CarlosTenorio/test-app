import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { BookPreviewComponent, BookPreviewListComponent } from './components';
import { BookService } from './services';
import { MatCardModule } from '@angular/material/card';

const childRoutes: Route[] = [{ path: '', component: CollectionPageComponent }];

@NgModule({
  declarations: [CollectionPageComponent, BookPreviewComponent, BookPreviewListComponent],
  imports: [CommonModule, RouterModule.forChild(childRoutes), HttpClientModule, MatCardModule],
  providers: [BookService],
})
export class BooksModule {}
