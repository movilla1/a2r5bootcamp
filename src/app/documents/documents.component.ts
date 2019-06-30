import { Component, OnInit } from '@angular/core';
import { DocumentArray } from './document_array';
import { Document } from './documents';
import { DocumentService } from './documents.service';
import { interval, timer } from 'rxjs';

@Component({
  templateUrl: 'documents.component.html',
  selector: 'app-documents',
  providers: [ DocumentService ]
})

export class DocumentsComponent implements OnInit {
  pageTitle = 'Documents Dashboard';
  documents: Document[];
  errorMessage: string;
  model = 'Observable';

  constructor(
    private documentService: DocumentService,
  ) {}

  ngOnInit() {
    const periodical = timer(0, 15000);
    periodical.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
                        .subscribe(
                          response => { this.documents = response.data; },
                          error => this.errorMessage = error as any
                        );
  }
}
