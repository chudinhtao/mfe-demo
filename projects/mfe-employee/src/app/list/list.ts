import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import service từ Shared Lib
import { AuthLibService } from '../../../../auth-lib/src/public-api';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div style="border: 2px dashed blue; padding: 20px;">
      <h2>MFE: (Port 4201)</h2>

      <p>
        User đang xem:
        <strong *ngIf="user">{{ user.username }}</strong>
        <span *ngIf="!user" style="color:red">Chưa đăng nhập!</span>
      </p>
      <button routerLink="detail">detail</button>

      <router-outlet></router-outlet>
    </div>
  `,
})
export class ListComponent implements OnInit {
  user: any = null;

  constructor(private authService: AuthLibService) {}

  ngOnInit() {
    this.user = this.authService.currentUserValue;
  }
}
