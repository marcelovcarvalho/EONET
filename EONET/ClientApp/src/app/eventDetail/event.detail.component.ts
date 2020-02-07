import { Component } from '@angular/core';
import { EventService, DtoEventsRequest, DtoSimpleEvent, DtoSource, DtoGeometry, DtoEvent } from '../Services/event.service';
import { DtoCategory, CategoryService } from '../Services/category.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event.detail.component.html',
})
export class EventDetailComponent {
  public event: DtoEvent;

  constructor(private route: ActivatedRoute, private eventService: EventService) {
    this.route.params.subscribe(args => {
      this.eventService.GetEventById(args.id).subscribe(result => {
        this.event = result;
      });
    });
  }

  public joinCategories(categories: DtoCategory[]) {
    return categories.map(x => x.title).join(", ");
  }


  public formatDate(dateParam: Date) {
    var date: string = dateParam.toLocaleString();
    date = date.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2}).*/gi, "$3/$2/$1");
    return date;
  }
}
