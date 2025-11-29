import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<router-outlet></router-outlet>`, // Chỉ làm placeholder cho routing
})
export class App implements OnInit {
  constructor(private authService: AuthLibService) {}

  ngOnInit() {

    if (!this.authService.currentUserValue) {
      this.authService.login('CDT', 'ADMIN');
      //fake login vi remote chay doc lap len cung can role admin
    }
  }
}
