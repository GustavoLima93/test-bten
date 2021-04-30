import { Injectable, Injector } from '@angular/core';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginService } from 'src/app/pages/login/services/login.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const loginService = this.injector.get(LoginService);
    if (loginService.token) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${loginService.token}`,
          // CorrelationId: 'Guid',
        },
      });
      return next.handle(authRequest);
    } else {
      const otherRequest = request.clone({
        // setHeaders: { CorrelationId: 'Guid' },
      });
      return next.handle(otherRequest);
    }
  }
}
