import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  canActivate(): Observable<boolean> {
    return this._authService.isLoggedIn$.pipe(
      take(1),
      map(e => {
        if (!e) {
          this._router.navigate(['/'])
        }
        return e
      })  
    );
  }
  
}