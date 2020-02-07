import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  public GetCategories() {
    return this.http.get<DtoCategory[]>(this.baseUrl + 'api/Category/GetCategories');
  }
}


export class DtoCategory {
  public id: number;
  public title: string;
}