import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _router: Router) {}

  async login(email: string, password: string) {
    this._router.navigate(['/home']);
  }

  async signUp(email: string, password: string) {
    this._router.navigate(['/auth']);
  }

  async logout() {
    this._router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return true;
  }
}
