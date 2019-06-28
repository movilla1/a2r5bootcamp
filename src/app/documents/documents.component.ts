import { Component } from '@angular/core';
import { Document } from './documents';
@Component({
  templateUrl: 'documents.component.html',
  selector: 'app-documents'
})

export class DocumentsComponent {
  pageTitle: string = 'Documents Dashboard';
  documents: Document[] = [
    {
      title: 'Test book1',
      description: 'Donec consequat nisi nec mi sodales, non tempor erat semper. Cras sem massa, iaculis interdum vehicula et \
      , placerat eget tellus. Phasellus ut mi in neque tincidunt vestibulum at eu justo. Nam euismod volutpat porta.\
       Pellentesque consequat felis non ultricies sollicitudin. Duis volutpat risus nec dui sagittis gravida non tincidunt nunc.\
        Nunc consectetur commodo odio ut pharetra. Sed posuere commodo finibus. Sed non tellus vel neque porttitor lobortis at\
         non diam. Cras cursus nunc vel est luctus, at vulputate neque rhoncus.',
      file_url: 'https://www.google.com',
      updated_at: '2019-06-26 10:00:00',
      image_url: 'https://cdn.pixabay.com/photo/2017/02/13/11/45/ice-2062433_960_720.jpg',
    },
    {
      title: 'Test book2',
      description: 'Nullam venenatis risus ut eros ultrices venenatis. Duis fermentum risus sed elit pharetra, a aliquet nibh\
       vestibulum. Fusce nec nisi ac odio interdum rhoncus. Duis ac neque ipsum. In sit amet sapien lacinia, mollis est non,\
        condimentum tellus. Etiam et aliquam mauris, id fermentum diam. Sed efficitur lacus nulla, ac tincidunt eros mollis id.\
         Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec aliquam semper efficitur.\
         Donec quam ante, vehicula ac lacinia quis, lobortis ac massa. Mauris lacinia urna vitae interdum cursus. Praesent quis\
         ligula quis justo volutpat hendrerit et ut lacus. Cras maximus dapibus mi, a placerat nisl bibendum at.',
      file_url: 'https://www.google.com',
      updated_at: '2019-06-26 11:00:00',
      image_url: 'https://cdn.pixabay.com/photo/2018/09/28/21/10/church-3710237_960_720.jpg',
    }
  ];
}
