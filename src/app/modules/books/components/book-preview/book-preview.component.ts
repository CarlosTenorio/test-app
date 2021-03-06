import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent implements OnInit {
  @Input() book: Book | undefined;

  constructor() {}

  ngOnInit(): void {}
}
