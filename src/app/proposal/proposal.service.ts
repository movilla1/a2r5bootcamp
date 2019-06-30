import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ProposalArray } from './proposal_array';
import { catchError, retry } from 'rxjs/operators';
import { ProposalContainer } from './proposal_container';
import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:3000/proposals.json';
  private proposalUrl = 'http://localhost:3000/proposals/';
  constructor(
    private http: HttpClient
  ) { }

  getProposals(): Observable<ProposalArray> {
    return this.http.get<ProposalArray>(this.proposalsUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getProposal(id: string): Observable<ProposalContainer> {
    return this.http.get<ProposalContainer>(this.proposalUrl + '/' + id + '.json').pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  createProposal(proposal: Proposal) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
    return this.http.post(this.proposalsUrl, '{"proposal": ' + JSON.stringify(proposal) + ' }', httpOptions).pipe(
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

