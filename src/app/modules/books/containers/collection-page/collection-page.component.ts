import { Component, OnInit } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss'],
})
export class CollectionPageComponent implements OnInit {
  books: Book[] = [];

  constructor() {}

  ngOnInit(): void {
    this.books = [
      {
        volumeInfo: {
          title: 'Title 1',
          subtitle: 'Subtitle 1',
          description: 'Description 1',
        },
      },
      {
        volumeInfo: {
          title: 'Title 2',
          subtitle: 'Subtitle 2',
          description: 'Description 2',
        },
      },
      {
        volumeInfo: {
          title: 'Title 3',
          subtitle: 'Subtitle 3',
          description: 'Description 3',
        },
      },
    ];
  }
}
