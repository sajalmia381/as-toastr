export interface Toastr {
  icon?: string;
  iconBg?: string;
  title: string;
  message?: string;
  // Dismiss
  closeBtn?: boolean;
  dismissAfter?: number;
  timeoutRef?: any;
  dismiss?: boolean;
}
