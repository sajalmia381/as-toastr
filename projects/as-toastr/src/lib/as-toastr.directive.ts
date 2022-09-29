import { Directive, Input, HostListener } from '@angular/core';
import { AsToastrService } from './as-toastr.service';

@Directive({ selector: '[closeToastr]' })
export class AsToastrDirective {
  @Input() closeToastr!: number;

  constructor(
    private toastrService: AsToastrService
  ) { }

  @HostListener('click') onClose() {
    this.toastrService.dismiss(this.closeToastr);
  }

}
