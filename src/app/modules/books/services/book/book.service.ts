import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models';
import { finalize } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class BookService {
  // First option
  // private books: Book[] = [];

  // Second Option
  private booksSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  readonly books$: Observable<Book[]> = this.booksSubject.asObservable();

  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string = 'Hello') {
    this.http
      .get<{ items: Book[] }>(`https://www.googleapis.com/books/v1/volumes?q=${queryTitle}`)
      .pipe(finalize(() => {}))
      .subscribe((response: { items: Book[] }) => {
        // First option
        // this.books = response.items;

        // Second Option
        this.booksSubject.next(response.items);
      });
  }

  // First option
  // getBooks(): Book[] {
  //   return this.books;
  // }
}
