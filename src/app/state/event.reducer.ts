import { Event } from '../models/event';
import { EventActions, EventActionTypes } from './event.action';

export interface EventState {
  events: Event[];
  loaded: boolean;
  error: string;
}

const initialState: EventState = {
  events: [],
  loaded: false,
  error: '',
};

export function EventReducer(
  state = initialState,
  action: EventActions
): EventState {
  switch (action.type) {
    case EventActionTypes.LoadSuccess:
      return {
        ...state,
        events: [...action.payload],
        loaded: true,
        error: '',
      };
    default:
      return state;
  }
}
