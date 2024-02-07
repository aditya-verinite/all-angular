import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-abc',
  standalone: true,
  templateUrl: './abc.component.html',
  imports: [NgbCollapseModule],
  styleUrls: ['./abc.component.css']
})
export class AbcComponent {
	isCollapsed = false;
}
