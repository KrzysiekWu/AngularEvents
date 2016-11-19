import { Injectable } from '@angular/core';

import { Event } from '../domain/event.domain'

import { EVENTS } from '../mock/event.mock'

@Injectable()
export class EventService {

    public getEvents(): Promise<Event[]> {
        return Promise.resolve(EVENTS);
    }

    public getEventsWithLag(): Promise<Event[]> {
        return new Promise<Event[]>(resolve => setTimeout(resolve, 2000)).then(() => this.getEvents())
    }
}