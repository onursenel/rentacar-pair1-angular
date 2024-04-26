import { HttpInterceptorFn } from '@angular/common/http';
import { Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';



export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const toastr = Inject(ToastrService)

  return next(req).pipe(   // rxjs pipe: Observable'ı manipüle etmek / araya girmek için kullanılır
  catchError((err : any) => {


  
    toastr.error(err.message);
  
    throw err;
  })
);
};
