import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthLibService {
  private userSubject = new BehaviorSubject<User | null>(null);

  public readonly user$ = this.userSubject.asObservable();

  constructor() {
    const savedUser = localStorage.getItem('mini-erp-user');
    if (savedUser) {
      this.userSubject.next(JSON.parse(savedUser));
    }
  }

  login(username: string, role: 'ADMIN' | 'USER') {
    const user: User = {
      username,
      role,
      token: 'fake-jwt-token-' + Date.now(),
    };

    this.userSubject.next(user);
    localStorage.setItem('mini-erp-user', JSON.stringify(user));
  }

  logout() {
    this.userSubject.next(null);
    localStorage.removeItem('mini-erp-user');
  }

  get currentUserValue(): User | null {
    return this.userSubject.value;
  }
}
