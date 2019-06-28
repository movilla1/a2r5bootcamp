import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Proposal } from './proposal';

@Component({
  templateUrl: 'proposal-show.component.html',
  selector: 'app-proposal-show',
  styleUrls: ['proposal-show.component.css']
})

export class ProposalShowComponent implements OnInit {
  public id: number ;
  public routeId: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params.id;
      }
    );
  }
}
