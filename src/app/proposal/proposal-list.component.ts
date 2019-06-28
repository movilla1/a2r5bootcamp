import { Component } from '@angular/core';
import { Proposal } from './proposal';
@Component({
  templateUrl: 'proposal-list.component.html',
  selector: 'app-proposal-list'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal( 15, 'Abc Company', 'http://www.google.com', 'Ruby On Rails', 150, 120, 15, 'test@here.com');
  proposalTwo: Proposal = new Proposal( 16, 'ZZTop Company', 'http://www.google.com/?q=zztop', 'Ruby On Rails 5', 100, 140, 15,
   'test2@here.com');
  proposalThree: Proposal = new Proposal( 17, 'Weirdness Company', 'http://www.google.com/?q=weirdness', 'Rust', 180, 90, 15,
    'test@here.com');

  proposals: Proposal[] = [ this.proposalOne, this.proposalTwo, this.proposalThree ];
}
