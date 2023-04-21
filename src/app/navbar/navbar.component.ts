import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	@Input() navbarOpen = false;
	@Output() navbarClickEvent = new EventEmitter<boolean>();

	toggleMenu(isOpen: boolean) {
		this.navbarClickEvent.emit(isOpen);
	}
}
