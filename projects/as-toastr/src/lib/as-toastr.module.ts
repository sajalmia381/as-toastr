import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsToastrComponent } from './as-toastr.component';
import { AsToastrDirective } from './as-toastr.directive';
import { AsToastrService } from './as-toastr.service';



@NgModule({
  declarations: [
    AsToastrComponent,
    AsToastrDirective
  ],
  imports: [CommonModule],
  exports: [
    AsToastrComponent,
    AsToastrDirective
  ],
  providers: [AsToastrService]
})
export class AsToastrModule { }
