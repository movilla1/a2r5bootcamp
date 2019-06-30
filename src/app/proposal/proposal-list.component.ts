import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ProposalService } from './proposal.service';

import { ProposalUnit } from './proposal_unit';
import { Router } from '@angular/router';
import { Proposal } from './proposal';

@Component({
  templateUrl: 'proposal-list.component.html',
  selector: 'app-proposal-list',
  providers: [
    ProposalService
  ]
})

export class ProposalListComponent implements OnInit {
  proposals: ProposalUnit[];
  constructor(
    private proposalService: ProposalService,
    private router: Router
  ) {}

  ngOnInit() {
    const timr = timer(0, 5000);
    timr.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals()
        .subscribe (
          proposals => this.proposals = proposals.data,
          error => console.log(error)
        );
  }

  goToShow(proposal: Proposal): void {
    const link = ['/proposals', proposal.id];
    this.router.navigate(link);
  }
}
