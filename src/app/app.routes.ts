import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { TestPageComponent } from './routers/test-page/test-page.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateBrandPageComponent } from './routers/create-brand-page/create-brand-page.component';
import { UpdateBrandFormComponent } from './features/brands/components/update-brand-form/update-brand-form.component';
import { UpdateBrandPageComponent } from './routers/update-brand-page/update-brand-page.component';
import { CreateModelPageComponent } from './routers/create-model-page/create-model-page.component';
import { ModelDetailsPageComponent } from './routers/model-details-page/model-details-page.component';
import { CustomersListComponent } from './features/customers/components/customers-list/customers-list.component';
import { RentalsListComponent } from './features/rentals/components/rentals-list/rentals-list/rentals-list.component';
import { UpdateModelPageComponent } from './routers/update-model-page/update-model-page.component';

export const routes: Routes = [
  // Home
  {
    path: '', // /
    pathMatch: 'full',
    redirectTo: 'home',
    // children: []
  },
  {
    path: 'home', // /home
    // pathMatch: 'prefix', // Default // ^(/home)
    component: MainLayoutComponent,
    children: [
      {
        path: "models", // /home/models
        component: HomePageComponent,
      },
      {
        path: 'models/:modelId', // /home/models/1
        // : ile başlayanlar route parametresi olur.
        component: ModelDetailsPageComponent,
      },
    ]
  },
  // Test Page
  {
    path: 'layout-test',
    component: TestPageComponent
  },
  {
    path: 'customers',
    component: CustomersListComponent,
  },

  {
    path: 'rentals',
    component: RentalsListComponent,
  },

  // Create Brand Page
  {
    path: 'brands/create',
    component: CreateBrandPageComponent,
  },



  {
    path: 'models/create',
    component: CreateModelPageComponent,
  },

  {
    path: 'models/update',
    component: UpdateModelPageComponent,
  },

//  {
//    path: 'brands/update',
//    component: UpdateBrandPageComponent,
//  },
  

  // 404 Not Found Page
  {
    path: '**', // Her path'de çalışır. En sona yazılmalı.
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  }
];
