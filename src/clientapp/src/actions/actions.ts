import {action, ActionType} from 'typesafe-actions';

export const SET_USERNAME = 'SET_USERNAME';

export const setUserName = (username: string) => action(SET_USERNAME, username);

export type Action =
    | ActionType<typeof setUserName>

