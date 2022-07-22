import { Action } from '@ngrx/store';
import { Event } from '../models/event';

export enum EventActionTypes {
  Load = '[Event] Load',
  LoadSuccess = '[Event] Load Success',
  LoadFail = '[Event] Load Fail',
}

export class Load implements Action {
  readonly type = EventActionTypes.Load;

  constructor() {}
}

export class LoadSuccess implements Action {
  readonly type = EventActionTypes.LoadSuccess;

  constructor(public payload: Event[]) {}
}

export class LoadFail implements Action {
  readonly type = EventActionTypes.LoadFail;

  constructor(public payload: string) {}
}

// Union the valid types
export type EventActions = Load | LoadSuccess | LoadFail;
