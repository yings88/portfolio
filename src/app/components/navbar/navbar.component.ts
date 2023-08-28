import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public showName = false;
  constructor(public router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/about-me') {
      this.showName = false;
    } else {
      true;
    }
  }
}
