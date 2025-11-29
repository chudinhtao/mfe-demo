import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// Import trực tiếp từ đường dẫn alias (tsconfig) hoặc relative path
// Trong workspace này, thường nó sẽ là 'auth-lib' (nếu tsconfig paths đã config)
// Hoặc import relative:
import { AuthLibService } from '../../../../auth-lib/src/public-api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="padding: 20px; border: 1px solid #ccc; width: 300px; margin: 50px auto;">
      <h2>Đăng nhập Shell</h2>
      <input
        [(ngModel)]="username"
        placeholder="Username"
        style="display:block; margin-bottom:10px; width: 100%"
      />
      <select [(ngModel)]="role" style="display:block; margin-bottom:10px; width: 100%">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button (click)="onLogin()">Login</button>
    </div>
  `,
})
export class LoginComponent {
  username = '';
  role: 'ADMIN' | 'USER' = 'USER';

  constructor(private authService: AuthLibService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.role);
    this.router.navigate(['/']);
  }
}
