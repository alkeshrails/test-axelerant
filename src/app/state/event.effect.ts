import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { Action, Store, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as fromEvent from './index';

import * as eventAction from './event.action';
import { of } from 'rxjs/internal/observable/of';
import { empty } from 'rxjs/internal/observable/empty';
import { ApicallService } from '../services/apicall.service';

@Injectable()
export class EventEffect {
  constructor(
    private apiCallService: ApicallService,
    private action$: Actions,
    private store: Store<any>
  ) {}

  @Effect()
  loadProduct$: Observable<Action> = this.action$.pipe(
    ofType(eventAction.EventActionTypes.Load),
    withLatestFrom(this.store.pipe(select(fromEvent.getLoaded))),
    switchMap(([, loaded]) => {
      if (loaded) {
        return empty();
      }

      return this.apiCallService.getEvents().pipe(
        map((events: any) => {
          return new eventAction.LoadSuccess(events);
        }),
        catchError((err) => of(new eventAction.LoadFail(err)))
      );
    })
  );
}
