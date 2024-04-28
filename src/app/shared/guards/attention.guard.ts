import { inject } from '@angular/core';
import type { CanDeactivateFn } from '@angular/router';
import { DataFormManagerService } from '../services/data-form-manager.service';

export const attentionGuard: CanDeactivateFn<unknown> = () => {
  const dataFormManagerService = inject(DataFormManagerService);
  let result;

  dataFormManagerService.hasChanged$.subscribe((response) => {
    result = response 
  });
  if(result){
    if(confirm ('Bu sayfadan çıkmak istediğinize emin misiniz ?')){
      dataFormManagerService.setHasChanged(false);
      return true;
    }else{
      return false;
    }
  }else{
    return true;
  }
};
