import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  public showSpinner(): void {
    this.spinner.show();
  }

  public hideSpinner(): void {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
