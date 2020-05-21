import React, {createContext, Dispatch, FunctionComponent, useCallback, useRef, useState} from "react";
import IState from "../types/State";
import initialState from "./initialState";
import {Thunk} from "../types/Thunk";
import {Action} from "../actions/actions";
import reducer from "../reducers/reducer";
import {DefaultApi} from "../api";

export const StateContext = createContext<{ state: IState }>({state: initialState});

export const DispatchContext = createContext<{
    dispatch: Dispatch<Action | Thunk<IState, Action>>;
    getApi: () => DefaultApi;
}>({
    dispatch: () => null,
    getApi: () => new DefaultApi()
})

declare global {
    interface Window {
        baseApiUrl: string;
        authLogout: string;
    }
}

export const AppProvider: FunctionComponent<React.ReactNode> = ({children}) => {
    const [appState, setAppState] = useState(initialState);
    const api = useRef(new DefaultApi(undefined, window.baseApiUrl));
    const getApi = useCallback(() => api.current, [])

    //Add reducer to context
    const state = useRef<IState>(appState);
    const getState = useCallback(() => state.current, []);
    const setState = useCallback(
        newState => {
            state.current = newState;
            setAppState(newState);
        },
        [setAppState]
    )

    const reduce = useCallback((action: Action) => reducer(getState(), action), [getState]);
    const thunkDispatch: Dispatch<Action | Thunk<IState, Action>> = useCallback(
        actionOrFunction =>
            typeof actionOrFunction === 'function'
                ? actionOrFunction((a: Action) => setState(reduce(a)), getState, getApi)
                : setState(reduce(actionOrFunction)),
        [getApi, getState, reduce, setState]
    )


    return (
        <DispatchContext.Provider value={{dispatch: thunkDispatch, getApi}}>
            <StateContext.Provider value={{state: appState}}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};

