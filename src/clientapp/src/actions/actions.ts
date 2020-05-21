import {action, ActionType} from 'typesafe-actions';
import {Teacher} from "../api";
import {AsyncAction} from "../types/AsyncAction";

export const SET_USERNAME = 'SET_USERNAME';
export const SET_TEACHERS = 'SET_TEACHERS';

export const setUserName = (username: string) => action(SET_USERNAME, username);
export const setTeachers = (teachers: Teacher[]) => action(SET_TEACHERS, teachers);
export const getTeachersAsync: AsyncAction = () => async (dispatch, _, getApi) => {
     await getApi()
        .getTeachers()
        .then(response => {
            dispatch(setTeachers(response.data))
        })
        .catch();
};

export type Action =
    | ActionType<typeof setUserName>
    | ActionType<typeof setTeachers>
