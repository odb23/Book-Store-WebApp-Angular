import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'https://localhost:7291/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getBookById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/' + id);
  }

  addBook(book: any): Observable<any> {
    return this.http.post(this.baseUrl, book);
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  updateBook (id: number, book: any) {
    return this.http.put(this.baseUrl + "/" + id, book);
  }
}
