import { Component, Input } from '@angular/core';
import { Event } from "../domain/event.domain";

@Component({
    selector: 'details-component',
    templateUrl: 'app/template/details.html',
    styles: ['']
})
export class DetailsComponent {

    @Input()
    event: Event;
}