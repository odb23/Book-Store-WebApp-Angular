import { BookService } from './../../services/book.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit, OnDestroy{
  public books : any

  constructor(private bookService: BookService) { }
 
  ngOnInit(): void {
    this.getBooks()
  }

  private getBooks() : void {
    this.bookService.getBooks().subscribe(
      response => this.books = response
    )
  }

  public openModal( ): void {

  }

  ngOnDestroy(): void {
  }

}
