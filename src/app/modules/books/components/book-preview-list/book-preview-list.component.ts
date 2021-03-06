import { Component, Input } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-book-preview-list',
  templateUrl: './book-preview-list.component.html',
  styleUrls: ['./book-preview-list.component.scss'],
})
export class BookPreviewListComponent {
  @Input() books: Book[] | null = [];

  constructor() {}
}
