import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private http: HttpClient, public authService: AuthService,
     private alertify: AlertifyService, private router: Router) {}

  ngOnInit() {}

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  makeRandomAlert() {
    this.http.get("https://uselessfacts.jsph.pl/random.json?language=en").subscribe((value) => {
      this.alertify.success(value["text"]);
    }, (error) => {
      this.alertify.error(error);
    });
  }

}
