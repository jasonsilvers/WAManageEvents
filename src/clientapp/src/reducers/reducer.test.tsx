import initialState from "../context/initialState";
import IState from "../types/State";
import {setUserName} from "../actions/actions";
import reducer from "./reducer";

it('should set username correct in global state',  () => {
    const expectedState = {
        ...initialState,
        user: {
            name: 'frank'
        }
    } as IState

    const action = setUserName("frank")
    const newState = reducer(initialState, action)
    expect(newState).toEqual(expectedState);
    expect(newState).not.toBe(initialState)
});