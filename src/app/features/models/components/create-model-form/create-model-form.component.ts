import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandsApiService } from '../../../brands/services/brands-api.service';
import { ModelsApiService } from '../../services/modelsApi.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostModelRequest } from '../../models/post-model-request';

@Component({
  selector: 'app-create-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-model-form.component.html',
  styleUrl: './create-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelFormComponent { 
  form: FormGroup = this.fb.group({    
     // Form Controls
     name: [
      '', // Başlangıç değeri
      [Validators.required], // Validasyonlar
    ],
    modelYear: [
      '', // Başlangıç değeri
      [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())], // Validasyonlar
    ],
    imageUrl: [
      '', // Başlangıç değeri
      [Validators.required], // Validasyonlar
    ],
    dailyPrice: [
      '', // Başlangıç değeri
      [Validators.required, Validators.min(0)], // Validasyonlar
    ],
    brandId: [
      '', // Başlangıç değeri
      [Validators.required], // Validasyonlar
    ],
  });

  constructor(
    private fb: FormBuilder,
    private modelApiService: ModelsApiService
  ) {}

  createModel() {
    const request: PostModelRequest = {
      name: this.form.value.name,
      brandId: this.form.value.brandId,
      modelYear: this.form.value.modelYear,
      imageUrl: this.form.value.imageUrl,
      dailyPrice: this.form.value.dailyPrice,

    };
    this.modelApiService.postModel(request).subscribe({
      next: (response) => {
        console.info('Response:', response);
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.info('Model created successfully');
        this.form.reset();
      },
    });
  }

  onFormSubmit() {
    console.log(this.form);

    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.createModel();
  }
}
