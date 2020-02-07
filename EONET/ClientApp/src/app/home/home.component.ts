import { Component } from '@angular/core';
import { EventService, DtoEventsRequest, DtoSimpleEvent, DtoSource, DtoGeometry } from '../Services/event.service';
import { DtoCategory, CategoryService } from '../Services/category.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public loadingEvents: boolean = false;
  public categories: DtoCategory[];
  public events: DtoSimpleEvent[];
  public request: DtoEventsRequest;

  constructor(private eventService: EventService, private categoryService: CategoryService) {
    this.request = new DtoEventsRequest();
    this.loadCategories();
    this.search();
  }

  public search() {
    this.loadingEvents = true;
    this.events = [];
    this.eventService.GetEvents(this.request).subscribe(result => {
      this.loadingEvents = false;
      this.events = result;
    });
  }

  private loadCategories() {
    this.categories = [];
    this.categoryService.GetCategories().subscribe(result => {
      this.categories = result;
    });
  }

  public joinCategories(categories: DtoCategory[]) {
    return categories.map(x => x.title).join(", ");
  }

  public getDateEvent(event: DtoSimpleEvent) {
    var lastGeometry: DtoGeometry = event.geometries[event.geometries.length - 1];
    var date: string = lastGeometry.date.toLocaleString();
    date = date.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2}).*/gi, "$3/$2/$1");
    return date;
  }

  public changeOrder(orderBy: string) {
    if (this.request.order.orderBy != orderBy) {
      this.request.order.orderBy = orderBy;
      this.request.order.ascending = true;
      this.search();
      return;
    }

    if (this.request.order.ascending) {
      this.request.order.ascending = false;
      this.search();
      return;
    }

    this.request.order.orderBy = null;
    this.search();
  }
}
