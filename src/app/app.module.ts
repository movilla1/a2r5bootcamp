import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/documents.service';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent} from './proposal/proposal-show.component';
import { ProposalService } from './proposal/proposal.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [
    DocumentService,
    ProposalService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
