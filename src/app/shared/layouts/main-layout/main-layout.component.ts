import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CreateModelPageComponent } from '../../../routers/create-model-page/create-model-page.component';
import { WellcomeDirective } from '../../../core/directives/wellcome.directive';
import { WellcomePageComponent } from '../../../routers/wellcome-page/wellcome-page.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    CreateModelPageComponent,
    WellcomeDirective,
    WellcomePageComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent { }
