import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
	model: any = {};
	constructor(private authService: AuthService) {}

	ngOnInit() {}
	login() {
		this.authService.login(this.model).subscribe(
			(result) => {
				console.log("login successfully!");
			},
			(error) => {
				console.log("error in login", error);
			}
		);
	}
	loggedIn() {
		const token = localStorage.getItem("token");
		// !!: if the variable has value then returns true, else returns false
		return !!token;
	}
	logout() {
		localStorage.removeItem("token");
		console.log("Logged out");
	}
}
