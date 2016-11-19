import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms'

import { AppComponent }  from './component/app.component';
import { ListComponent } from './component/list.component';
import { DetailsComponent } from './component/details.component';

import { EventService } from './service/event.service';

@NgModule({
    imports:        [ BrowserModule, FormsModule ],
    declarations:   [ AppComponent, ListComponent, DetailsComponent ],
    providers:      [ EventService ],
    bootstrap:      [ AppComponent ]
})
export class AppModule { }
