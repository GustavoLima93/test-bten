import { HttpErrorResponse } from '@angular/common/http';
import {
  ErrorHandler,
  Injectable,
  Injector,
  NgZone,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';


@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
  constructor(
    private zone: NgZone,
    private injector: Injector,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    if (errorResponse instanceof HttpErrorResponse) {
      const router = this.injector.get(Router);
      const alert = this.injector.get(AlertService);
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            alert.info('Info', errorResponse.error.message || 'an error has occurred', 'Ok')
            localStorage.clear();
            router.navigate(['/login']);
            break;
          default:
            alert.info('Info', errorResponse.error.message || 'an error has occurred', 'Ok')
            break;
        }
      });
    }
    super.handleError(errorResponse);
  }
}
