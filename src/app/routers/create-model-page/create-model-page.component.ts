import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateModelFormComponent } from '../../features/models/components/create-model-form/create-model-form.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-create-model-page',
  standalone: true,
  imports: [
    CommonModule,
    CreateModelFormComponent,
    NavbarComponent,
    FooterComponent

  ],
  templateUrl: './create-model-page.component.html',
  styleUrl: './create-model-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelPageComponent { }
