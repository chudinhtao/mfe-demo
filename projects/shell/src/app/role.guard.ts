import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthLibService } from 'auth-lib';

export const roleGuard = (requiredRole: 'ADMIN' | 'USER'): CanActivateFn => {
  return (route, state) => {
    const authService = inject(AuthLibService);
    const router = inject(Router);
    const user = authService.currentUserValue;

    if (!user) {
      return router.createUrlTree(['/login']);
    }

    if (user.role === requiredRole) {
      return true;
    }

    alert(`Bạn là ${user.role}, không được vào khu vực ${requiredRole}!`);
    return router.createUrlTree(['/']);
  };
};
