import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class attentionRouteGuard implements CanDeactivate<any> {
  constructor(private toastr: ToastrService) {}

  canDeactivate(component: any): boolean {
    // Burada formun doldurulup doldurulmadığını kontrol edin
    // Eğer doldurulduysa, kullanıcıya bir toast bildirimi gösterin
    this.toastr.warning('Değişiklikleri kaybetmek üzere sayfadan ayrılmak istiyor musunuz?', 'Uyarı');
    return true; // Sayf

  };
};