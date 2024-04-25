import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostModelRequest } from '../../models/post-model-request';
import { BrandListItemDto } from '../../../brands/models/brand-list-item-dto';
import { BrandsApiService } from '../../../brands/services/brands-api.service';
import { ErrorMessageTsPipe } from '../../../../core/pipes/error-message.ts.pipe';
import { NoCharacterInputDirective } from '../../../../core/directives/noCharacterInput.directive';

@Component({
  selector: 'app-create-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageTsPipe,
    NoCharacterInputDirective
  ],
  templateUrl: './create-model-form.component.html',
  styleUrl: './create-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelFormComponent implements OnInit{
  allBrands: Array<BrandListItemDto> = [];


  
  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
      this.allBrands = response;
      this.change.markForCheck();
      console.log(this.allBrands);
    });
  }
  form: FormGroup = this.fb.group({
    // Form Controls
    brandName: ['', [Validators.required]],
    imageUrl: ['', [Validators.required]],
    name: ['', [Validators.required]],
    modelYear:['', [Validators.required]],
    dailyPrice: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private modelApiService: ModelsApiService,
    private brandsApiService: BrandsApiService,
    private change: ChangeDetectorRef
  ) { }

  createModel() {
    const brand = this.allBrands.find(
      (brand) => brand.name == this.form.value.brandName
    );
    console.log(brand);
    const request: PostModelRequest = {
      brandId: brand!.id,
      name: this.form.value.name,
      imageUrl: this.form.value.imageUrl,
      modelYear: this.form.value.modelYear,
      dailyPrice: this.form.value.dailyPrice,
      brand: brand!
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
      
      this.form.markAllAsTouched();
      console.error('Form is invalid');
      return;
    }

    this.createModel();
  }
}