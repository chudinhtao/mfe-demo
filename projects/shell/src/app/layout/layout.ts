import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthLibService, User } from 'auth-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  user$: Observable<User | null>;

  constructor(private authService: AuthLibService, private router: Router) {
    this.user$ = this.authService.user$;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  pass() {
    const event = new CustomEvent('mini-erp:user-changed', {
      detail: {
        username: 'Data tu shell',
        role: 'ADMIN',
        token: 'token111',
      },
    });
    window.dispatchEvent(event);
  }
}
