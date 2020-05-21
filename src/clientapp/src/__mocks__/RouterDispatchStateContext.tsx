// import {createMemoryHistory, MemoryHistory} from 'history'
import React, {Dispatch, useCallback, useRef, useState} from "react";
// import {Route, Router} from "react-router-dom";
import {Action} from "../actions/actions";
import {DefaultApi} from "../api";
import {DispatchContext, StateContext} from "../context/AppContext";
import initialState from "../context/initialState";
import reducer from "../reducers/reducer";
import IState from "../types/State";
import {Thunk} from "../types/Thunk";

interface IRDSC {
    mockDispatch?: jest.Mock;
    testState?: IState;
    // path?:string
    // route?:string
    // history?: MemoryHistory
}

const defaultTestState: IState = {
    ...initialState
}

const RouterDispatchStateContext:React.FC<IRDSC> = ({mockDispatch, testState = defaultTestState, children}) => {

    const [appState, setAppState] = useState(testState);
    const api = useRef(new DefaultApi(undefined, window.baseApiUrl));
    const getApi = useCallback(() => api.current, []);

    const state = useRef(appState);
    const getState = useCallback(() => state.current, []);
    const setState = useCallback(
        newState => {
            state.current = newState;
            setAppState(newState);
        },
        [setAppState]
    );

    const reduce = useCallback((action: Action) => reducer(getState(), action), [getState]);
    const thunkDispatch: Dispatch<Action | Thunk<IState, Action>> = useCallback(
        actionOrFunction =>
            typeof actionOrFunction === 'function'
                ? actionOrFunction((a: Action) => setState(reduce(a)), getState, getApi)
                : setState(reduce(actionOrFunction)),
        [getApi, getState, reduce, setState]
    );


    return <DispatchContext.Provider value={{ dispatch: mockDispatch ? mockDispatch : thunkDispatch, getApi }}>
        <StateContext.Provider value={{state: appState}}>
            {/*<Router history={history}>*/}
            {/*    <Route path={path}>{children}</Route>*/}
            {/*</Router>*/}
            {children}
        </StateContext.Provider>
    </DispatchContext.Provider>
};
export default RouterDispatchStateContext;