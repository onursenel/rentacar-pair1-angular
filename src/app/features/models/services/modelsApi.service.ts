import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';
import { PostModelRequest } from '../models/post-model-request';
import { PostModelResponse } from '../models/post-model-response';
import { ModelDetailsDto } from '../models/model-details-dto';
import { UpdateModelRequest } from '../models/update-model-request';
import { UpdateModelResponse } from '../models/update-model-response';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  getList(
    brandId: number | null = null,
    searchBrandName: string | null = null,
    pageIndex: number = 0,
    pageSize: number = 3
  ): Observable<ModelListItemDto[]> {
    const requestQueryParams: any = {
      // brandId: brandId
      _page: pageIndex + 1,
      _limit: pageSize,
    };
    if (brandId !== null) requestQueryParams.brandId = brandId;
    if (searchBrandName) requestQueryParams.name_like = searchBrandName;

    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models', {
      params: requestQueryParams, // ?brandId=1&name_like=land
    });
  }

  getById(id: number): Observable<ModelDetailsDto> {
    return this.http.get<ModelDetailsDto>(`http://localhost:3000/models/${id}`);
  }
  postModel(model: PostModelRequest): Observable<PostModelResponse> {
    return this.http.post<PostModelResponse>(
      'http://localhost:3000/models',
      model
    );
  }
  putModel(model: UpdateModelRequest): Observable<UpdateModelResponse> {
    return this.http.put<UpdateModelResponse>(
      'http://localhost:3000/models',
      model
    );
  }
}
