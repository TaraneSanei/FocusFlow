import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const csrfInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieService = inject(CookieService)
  const token = cookieService.get('csrftoken');

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('X-CSRFToken', token)
    });
    console.log('csrf token set')
    return next(cloned);
  } else {
    return next(req);
  }
}
