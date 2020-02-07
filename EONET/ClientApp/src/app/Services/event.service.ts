import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { DtoCategory } from './category.service';


@Injectable({
  providedIn: 'root',
})
export class EventService {
  private http: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  public GetEvents(eventRequest: DtoEventsRequest) {
    return this.http.post<DtoSimpleEvent[]>(this.baseUrl + 'api/Event/GetEvents', eventRequest);
  }

  public GetEventById(id: string) {
    return this.http.get<DtoEvent>(this.baseUrl + 'api/Event/GetEventById?id='+id);
  }
}

/* Request */
export class DtoEventsRequest {
  constructor() {
    this.filter = new DtoEventsFilterResquest();
    this.order = new DtoEventsOrderRequest();
  }
  public filter: DtoEventsFilterResquest;
  public order: DtoEventsOrderRequest;
}

export class DtoEventsFilterResquest {
  public date: Date;
  public status: string;
  public idCategory: number;
}

export class DtoEventsOrderRequest {
  public orderBy: string;
  public ascending: boolean;
}
/* Response */
export class DtoSimpleEvent {
  public id: string;
  public title: string;
  public closed: Date;
  public categories: DtoCategory[];
  public sources: DtoSource[];
  public geometries: DtoGeometry[];

}

export class DtoEvent extends DtoSimpleEvent {
  public description: string;
  public link: string;
}

export class DtoSource {
  public id: string;
  public url: string;
}

export class DtoGeometry {
  public date: Date;
  public type: string;
}