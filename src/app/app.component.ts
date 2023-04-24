import { Component } from '@angular/core';
import { companies } from './data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	navbarOpen = false;
	companies = companies;
	btnStyle = {
		marginTop: '2.5em' 
	};

	toggleMenu(isOpen: boolean) {
		this.navbarOpen = isOpen;
	}

	contactMe() {
		console.log("contact me clicked");
	}
}
