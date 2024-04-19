import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';
import { PostModelRequest } from '../models/post-model-request';
import { PostBrandResponse } from '../../brands/models/post-brand-response';
import { PostModelResponse } from '../models/post-model-response';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  getList(
    brandId: number | null = null,
    searchBrandName: string | null = null
  ): Observable<ModelListItemDto[]> {
    const requestQueryParams: any = {
      // brandId: brandId
    };
    if (brandId !== null) requestQueryParams.brandId = brandId;
    if (searchBrandName) requestQueryParams.name_like = searchBrandName;

    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models', {
      params: requestQueryParams, // ?brandId=1&name_like=land
    });
  }

  postModel(model: PostModelRequest): Observable<PostModelResponse> {
    return this.http.post<PostModelResponse>(
      'http://localhost:3000/models',
      model
    );
  }
}
