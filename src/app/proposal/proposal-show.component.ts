import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Proposal } from './proposal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProposalService } from './proposal.service';
import { flatMap } from 'rxjs/operators';

@Component({
  templateUrl: 'proposal-show.component.html',
  selector: 'app-proposal-show',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalService ]
})

export class ProposalShowComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private http: HttpClient) {}

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
   this.route.paramMap.subscribe( params => {
      this.proposalService.getProposal(params.get('id')).subscribe(
        (response) => { this.proposal = response.data.attributes; console.log(response.data); },
        (error) => console.log(error)
      );
   });
  }
}
