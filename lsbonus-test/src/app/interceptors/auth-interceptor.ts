import {
  HttpInterceptorFn,
  HttpErrorResponse,
  HttpContextToken,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { environment } from '../../environment/environment';

export const AUTH_REQUIRED = new HttpContextToken<boolean>(() => true);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const needsAuth: boolean = req.context.get(AUTH_REQUIRED);

  const isApi: boolean = req.url.startsWith(environment.apiBase);
  const isLogin: boolean = req.url.endsWith('/user/login');

  const sid: string | null = localStorage.getItem('sid');

  const authReq =
    sid && needsAuth && isApi && !isLogin
      ? req.clone({ setHeaders: { Authorization: `Bearer ${sid}` } })
      : req;

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        localStorage.removeItem('sid');
      }
      return throwError(() => err);
    })
  );
};
