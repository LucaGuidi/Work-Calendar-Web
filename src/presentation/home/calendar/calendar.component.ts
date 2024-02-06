import { Component } from '@angular/core';
import { CalendarHeaderComponent } from './widgets/header/calendar-header.component';
import { CalendarBodyComponent } from './widgets/body/calendar-body.component';

@Component({
  standalone: true,
  selector: 'app-calendar',
  imports: [CalendarHeaderComponent, CalendarBodyComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {}
