import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-swipe',
  standalone: true,
	imports: [NgbCarouselModule,NgbProgressbarModule],
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent {
  
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
