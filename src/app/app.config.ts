import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './shared/interceptors/error.interceptor';
import { timeInterceptor } from './shared/interceptors/time.interceptor';
import { loadingInterceptor } from './shared/interceptors/loading.interceptor';
import { attentionGuard } from './shared/guards/attention.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideHttpClient(withInterceptors([errorInterceptor,timeInterceptor,loadingInterceptor])), // HttpClient'ı kullanabilmek için ekledik
  ],
};
