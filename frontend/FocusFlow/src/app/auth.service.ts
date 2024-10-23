import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { catchError, Observable, of, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode'
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private apiUrl = environment.apiUrl;
//   constructor(private http: HttpClient, private cookieService: CookieService) {
//    }


//    login(email: string, password: string): Observable<any> {
//     return this.http.post<any>(this.apiUrl + "api/token", { email, password })
//       .pipe(
//         tap(response => {
//           localStorage.setItem('access_token', response.access);
//           localStorage.setItem('refresh_token', response.refresh);
//         })
//       );
//   }

//   logout(): void {
//     localStorage.removeItem('access_token');
//     localStorage.removeItem('refresh_token');
//   }

//   getToken(): string | null {
//     console.log(localStorage.getItem('access_token'))
//     return localStorage.getItem('access_token');
//   }

// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private refreshTokenKey = 'refreshToken';
  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient, private router: Router) { }


  login(email: string, password: string): Observable<any> {
    console.log('login attempted')
    return this.http.post<any>(this.apiUrl + "/api/token", { email, password }).pipe(
      tap(response => {
        console.log('Login Response', response)
        this.setToken(response.access);
        this.setRefreshToken(response.refresh);
      }),
      catchError(error => {
        if (error.status === 401) {
          return of({ error: 'Invalid credentials' });
        } else {
          return of({ error: 'An unknown error occurred' });
        }
      })
    );
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  logout(): void {
    this.removeToken();
    this.removeRefreshToken();
    this.router.navigate(['/login']);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(this.refreshTokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (token && !this.isTokenExpired(token)) {
      return true;
    } else {
      this.logout();
      return false;
    }
  }

  isTokenExpired(token: string): boolean {
    const decoded: any = jwtDecode(token);
    const expiryTime = decoded.exp * 1000;
    return Date.now() >= expiryTime;
  }

  refreshAccessToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    return this.http.post<any>('/api/refresh-token/', { refresh: refreshToken }).pipe(
      tap(response => {
        this.setToken(response.access); // Update access token
      }),
      catchError(err => {
        this.logout();
        return throwError(err);
      })
    );
  }
}