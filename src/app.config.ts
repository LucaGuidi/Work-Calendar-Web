import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { ActionReducer, MetaReducer, State, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { HomeEffects } from './presentation/home/store/home.effects';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SettingsEffects } from './presentation/settings/store/settings.effects';

import * as fromApp from './base/store/app.reducer';

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}
export const metaReducers: MetaReducer<any>[] = [logger];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore(fromApp.appReducer, { metaReducers }),
    provideEffects([HomeEffects, SettingsEffects]),
    importProvidersFrom([HttpClientModule]),
    provideAnimationsAsync(),
  ],
};
