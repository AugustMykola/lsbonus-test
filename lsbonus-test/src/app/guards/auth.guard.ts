import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../providers/api/auth/auth.service';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.login$().pipe(
    map(() => true),
    catchError(() => of(false))
  );
};
