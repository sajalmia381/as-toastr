import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { toasts } from './as-toastr.data';
import { Toastr } from './as-toastr.interface';

import { ComponentPortal, DomPortalHost } from '@angular/cdk/portal';
import { AsToastrComponent } from './as-toastr.component';

@Injectable()
export class AsToastrService {

  private toasterPortal: ComponentPortal<AsToastrComponent>;
  private portalHost: DomPortalHost;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
    this.toasterPortal = new ComponentPortal(AsToastrComponent);

    this.portalHost = new DomPortalHost(
      document.body,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );
  }

  open(toast: Toastr) {
    if (!this.portalHost.hasAttached()) {
      this.portalHost.attach(this.toasterPortal);
    }
    toasts.push(toast);
    this.scheduleDismiss(toast.dismissAfter);
    return toasts.length - 1;
  }

  dismiss(index: number) {
    if (toasts[index]) {
      clearTimeout(toasts[index]['timeoutRef']);
      toasts[index]['dismiss'] = true;
    }
    toasts.splice(index, 1);
    if (toasts.length === 0) {
      this.portalHost.detach();
    }
  }

  private scheduleDismiss(dismissAfter: number = 8000) {
    toasts[toasts.length - 1]['timeoutRef'] = setTimeout(() => {
      toasts[0]['dismiss'] = true;
      setTimeout(() => toasts.shift(), 480);
    }, dismissAfter);
  }
}
