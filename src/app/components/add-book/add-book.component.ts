import { BookService } from './../../services/book.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  @Input() fromParent: any;
  public modalTitle!: string;
  public bookForm!: FormGroup;
  public saving = false;

  public title!: string;
  public description!: string;
  public bookId!: number;

  constructor(
    private activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.modalTitle =
      this.fromParent.op == 'add-book' ? 'Add new book' : 'Update book';

    this.title = this.fromParent.book?.title || '';
    this.description = this.fromParent.book?.description || '';
    this.bookId = this.fromParent.book?.id;

    this.initialize();
  }

  private initialize() {
    this.bookForm = this.formBuilder.group({
      title: [this.title, Validators.required],
      description: [this.description, Validators.required],
    });
  }

  public saveBook(): void {
    this.saving = true;

    if (this.fromParent.op == 'add-book') {
      this.addNewBook();
    } else {
      this.updateBook();
    }
  }

  private addNewBook(): void {
    this.bookService.addBook(this.bookForm.value).subscribe((result) => {
      this.close();
      this.saving = false;
    });
  }

  private updateBook(): void {
    this.bookService
      .updateBook(this.bookId, this.bookForm.value)
      .subscribe((result) => {
        this.close();
        this.saving = false;
      });
  }

  public close(): void {
    this.activeModal.dismiss('Cross click');
  }
}
