import { Component, OnInit } from '@angular/core';
import { toasts } from './as-toastr.data';
import { Toastr } from './as-toastr.interface';
import { AsToastrService } from './as-toastr.service';

@Component({
  selector: 'as-toastr',
  templateUrl: './as-toastr.component.html',
  styleUrls: ['./as-toastr.component.scss']
})
export class AsToastrComponent implements OnInit {
  toasts: Array<Toastr> = toasts;
  constructor(private toastrService: AsToastrService) { }

  ngOnInit(): void { }

  dismissToastr(index: number): void {
    this.toastrService.dismiss(index)
  }
}
