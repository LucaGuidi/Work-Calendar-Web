import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromSubmitted } from './store/home.actions';

import * as fromApp from '../../base/store/app.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  workingDaysForm!: FormGroup;
  isCountVisible = false;
  calculatedDays: number = 0;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.workingDaysForm = new FormGroup({
      initialDate: new FormControl(null, [Validators.required]),
      finalDate: new FormControl(null, [Validators.required]),
    });

    this.store.select('home').subscribe((state) => {
      if (state.calculatedDays !== -1) this.isCountVisible = true;
      this.calculatedDays = state.calculatedDays;
    });
  }

  onSubmit() {
    this.store.dispatch(
      fromSubmitted({
        initialDate: this.workingDaysForm.value['initialDate'],
        finalDate: this.workingDaysForm.value['finalDate'],
      })
    );
  }
}
