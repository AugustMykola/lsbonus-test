import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { defer, first, map, Observable, of, shareReplay, tap } from 'rxjs';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);
  sid: any = signal<string | null>(null);

  sendLoginRequest(): Observable<string> {
    const body = {
      login: environment.credentials.login,
      password: environment.credentials.password
    };

    return this.http.post<{ sid: string }>(`${environment.apiBase}/user/login`, body).pipe(
      first(),
      tap(res => {
        const sid = res?.sid ?? '';
        localStorage.setItem('sid', sid);
      }),
      map(res => res.sid),
    );
  }

  login$(): Observable<string> {
    return defer(() => {
      const sidFromStorage: string | null = localStorage.getItem('sid');
      if (sidFromStorage) {
        this.sid.set(sidFromStorage);
        return of(sidFromStorage);
      }
      return this.sendLoginRequest();
    }).pipe(shareReplay(1));
  }
}
