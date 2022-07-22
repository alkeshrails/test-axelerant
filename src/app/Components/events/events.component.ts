import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { select, Store } from '@ngrx/store';
import * as fromApp from '../../state/event.reducer';
import * as fromEvent from '../../state/index';
import * as eventActions from '../../state/event.action';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass'],
})
export class EventsComponent implements OnInit {
  searchText: string = '';
  eventData: any = [];
  filteredEventData: any = [];
  tickets:any;
  title:any;
  constructor(
    private apicall: ApicallService,
    private router: Router,
    private store: Store<fromApp.EventState>
  ) {}

  ngOnInit(): void {
    // this.apicall.getResponse().subscribe((res) => {
    //   this.eventData = res;
    //   this.filteredEventData = res;
    // });
    this.store.dispatch(new eventActions.Load());
    this.store.pipe(select(fromEvent.getEvents)).subscribe((data) => {
      this.eventData = data;
      this.filteredEventData = data;
    });
  }
  search() {
    console.log('serch working ');
    if (this.searchText.length !== 0) {
      this.filteredEventData = this.eventData.filter((item: any) =>
        item['title'].toLowerCase().includes(this.searchText)
      );
    } else {
      this.filteredEventData = this.eventData;
    }
  }
  OpenBookingPage(tickets:any,title:string){
    this.tickets = tickets;
    this.title = title;
    this.router.navigate(['/booking'], { state: { count: this.tickets , title:this.title} });
  }
}
