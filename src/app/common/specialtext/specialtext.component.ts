import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specialtext',
  templateUrl: './specialtext.component.html',
  styleUrls: ['./specialtext.component.css']
})
export class SpecialtextComponent {
  	@Input() size = '';
  	@Input() content = '';
  	@Input() prefix = '';
  	@Input() suffix = '';

}
