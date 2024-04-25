import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wellcome-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './wellcome-page.component.html',
  styleUrl: './wellcome-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WellcomePageComponent { }
