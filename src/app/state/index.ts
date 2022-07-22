import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromEvent from './event.reducer';

export interface State {
  eventFeature: fromEvent.EventState;
}
export const reducers: any = {
  eventFeature: fromEvent.EventReducer,
};

const getEventFeatureState =
  createFeatureSelector<fromEvent.EventState>('eventFeature');

export const getEvents = createSelector(getEventFeatureState, (state) => {
  return state.events;
});

export const getLoaded = createSelector(getEventFeatureState, (state) => {
  return state.loaded;
});
