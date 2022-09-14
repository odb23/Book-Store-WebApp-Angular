import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators }  from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  public bookForm!: FormGroup;
  public saving = false;

constructor(private activeModal: NgbActiveModal,private formBuilder : FormBuilder, private bookService : BookService) { }

  ngOnInit(): void {
    this.initialize()
  }

  private initialize () {
    this.bookForm = this.formBuilder.group({
      title : ['', Validators.required],
      description: ['', Validators.required],
    })
    
  }

  public saveBook () : void {
    this.saving = true
    this.bookService.addBook(this.bookForm.value).subscribe(result => {
      this.close()
      this.saving = false
    })
  }

  public close () : void {
    this.activeModal.dismiss('Cross click')
  }
}
