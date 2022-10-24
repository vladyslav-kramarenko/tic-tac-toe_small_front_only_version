import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseInterceptor } from './response-interceptor.service';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ResponseInterceptor,
    multi: true
  }
];
