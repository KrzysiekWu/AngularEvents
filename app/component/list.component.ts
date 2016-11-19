import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Event } from '../domain/event.domain';

import { EventService } from '../service/event.service';

@Component({
    selector: 'list-component',
    templateUrl: 'app/template/list.html',
    styles: ['.selected {text-decoration: underline}']
})

export class ListComponent implements OnInit {

    events: Event[];
    selectedEvent: Event;

    public constructor(private eventService: EventService) {}

    public ngOnInit(): void {
        this.getEvents();
    }

    public onClick(event: Event) {
        this.selectedEvent = event;
    }

    private getEvents(): void {
        this.eventService.getEventsWithLag().then(events => this.events = events);
    }
}