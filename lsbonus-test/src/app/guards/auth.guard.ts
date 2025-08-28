import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../providers/api/auth/auth.service';
import { catchError, map, of } from 'rxjs';

function isHasSid(v: string | null): boolean {
  console.log(112312)
  return Boolean(v);
}

export const authGuard: CanActivateFn = () => {
  const auth: AuthService = inject(AuthService);

  const sid: string | null = localStorage.getItem('sid');
  if (isHasSid(sid)) return of(true);

  return auth.login$().pipe(
    map((sidFromLogin: string) => isHasSid(sidFromLogin)),
    catchError(() => of(false))
  );
};
