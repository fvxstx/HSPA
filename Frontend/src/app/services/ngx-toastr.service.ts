import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NgxToastrService {
  constructor(private toast: ToastrService) {}

  success(message: string) {
    this.toast.success(message);
  }

  warning(message: string) {
    this.toast.warning(message);
  }

  error(message: string) {
    this.toast.error(message);
  }
}
