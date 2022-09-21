import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // auth header koyacağız
    let token = localStorage.getItem("token");
    let newRequest: HttpRequest<any>;
    // kullanıcının yaptığı işlemi klonla
    // ekstra bir şey eklemek istiyorsak {data}
    newRequest = request.clone({
      headers: request.headers.set("Authoratization", "Bearer " + token)
    });

    return next.handle(newRequest);
  }
}
