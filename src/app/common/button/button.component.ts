import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent {
	@Input() csStyles = "";
	@Input() content = "";
	@Output() onClickListener = new EventEmitter<void>();
	@Input() cs = {};

	buttonClick() {
		this.onClickListener.emit();
	}
}
