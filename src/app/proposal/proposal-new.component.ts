import { Component } from '@angular/core';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-proposal-new',
  templateUrl: 'proposal-new.component.html',
  providers: [
    ProposalService,
  ]
})

export class ProposalNewComponent {
  proposal: Proposal = new Proposal();
  submitted = false;
  constructor(
    private proposalService: ProposalService
  ) {}

  createProposal(proposal: Proposal) {
    this.submitted = true;
    this.proposalService.createProposal(this.proposal).subscribe(
      _ => true,
      error => {
        console.log(error);
        return Observable.throw(error);
      }
    );
  }
}
