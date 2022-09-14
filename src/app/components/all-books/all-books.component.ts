import { AddBookComponent } from './../add-book/add-book.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from './../../services/book.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit, OnDestroy{
  public books : any

  constructor(private bookService: BookService, private modalService : NgbModal) { }
 
  ngOnInit(): void {
    this.getBooks()
  }

  private getBooks() : void {
    this.books = this.bookService.getBooks()
  }

  public deleteBook (id: number)  {
    console.log("Got here", id)
    this.bookService.deleteBook(id).subscribe(
      res => console.log(res)
    )
  }

  public openModal(): void {
    this.modalService.open(AddBookComponent)
  }

  ngOnDestroy(): void {
  }

}
