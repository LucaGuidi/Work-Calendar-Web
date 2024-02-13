import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../base/store/app.reducer';
import { init } from '../settings/store/settings.actions';
import { calendarInit } from '../home/calendar/store/calendar.actions';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(init());
    this.store.dispatch(calendarInit());
  }

  constructor(private store: Store<fromApp.AppState>) {}
}
