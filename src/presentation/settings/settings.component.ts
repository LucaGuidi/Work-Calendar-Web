import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';

import * as fromApp from '../../base/store/app.reducer';
import * as settingsActions from '../settings/store/settings.actions';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;

  ngOnInit(): void {
    this.store
      .select('settings')
      .pipe(take(1))
      .subscribe((state) => {
        this.settingsForm = new FormGroup({
          monday: new FormControl(state.monday),
          tuesday: new FormControl(state.tuesday),
          wednesday: new FormControl(state.wednesday),
          thursday: new FormControl(state.thursday),
          friday: new FormControl(state.friday),
          saturday: new FormControl(state.saturday),
          sunday: new FormControl(state.sunday),
        });
      });
  }

  onSubmit(name: string) {
    this.store.dispatch(
      settingsActions.daysChanged({
        name: name,
      })
    );
  }

  constructor(private store: Store<fromApp.AppState>) {}
}
