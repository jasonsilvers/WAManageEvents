import {action, ActionType} from 'typesafe-actions';
import {WaEvent} from "../api";
import {AsyncAction} from "../types/AsyncAction";

export const SET_USERNAME = 'SET_USERNAME';
export const SET_EVENTS = 'SET_EVENTS';
export const SET_EVENTS_LOADING = 'SET_EVENTS_LOADING'

export const setUserName = (username: string) => action(SET_USERNAME, username);
export const setEventsLoading = (flag: boolean) => action(SET_EVENTS_LOADING, flag);
export const setEvents = (events: WaEvent[]) => action(SET_EVENTS, events);
export const getEventsAsync: AsyncAction =  () => (dispatch, _, getApi) => {
    dispatch(setEventsLoading(true))
    getApi()
      .getEvents()
          .then(response => {
            dispatch(setEventsLoading(false));
            dispatch(setEvents(response.data));
        })
        .catch();
};

export type Action =
    | ActionType<typeof setUserName>
    | ActionType<typeof setEvents>
    | ActionType<typeof setEventsLoading>

