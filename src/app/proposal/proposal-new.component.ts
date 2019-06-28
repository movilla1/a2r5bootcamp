import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'app-proposal-new',
  templateUrl: 'proposal-new.component.html'
})

export class ProposalNewComponent {
  proposal: Proposal = new Proposal();
}
