import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DocumentArray } from './document_array';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://127.0.0.1:3000/freelance_documents.json';

  constructor(
    private http: HttpClient
  ) { }

  getDocuments(): Observable<DocumentArray> {
    return this.http.get<DocumentArray>(this.documentsUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(error as T);
    };
  }
}
