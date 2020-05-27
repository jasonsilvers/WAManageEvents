import IState from "../types/State";
import initialState from "../context/initialState";
import {Action, SET_EVENTS, SET_EVENTS_LOADING, SET_USERNAME,} from "../actions/actions";
import {WaEvent} from "../api";
import {createEntities} from "../utilities/utils";

//Used to update state
const reducer = (state: IState = initialState, action: Action): IState => {

    /**
     * Reducer Switch statements are split in to categories
     *  1
     */

    /**
     * Event Switch Cases
     */
    switch (action.type) {

        case SET_USERNAME: {
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload
                }
            }
        }

        case SET_EVENTS_LOADING: {
            return {
                ...state,
                ui: {
                    isLoadingEvents: action.payload
                }
            }
        }

        case SET_EVENTS: {
            const eventEntities = createEntities<WaEvent>(action.payload)
            return {
                ...state,
                events: eventEntities
            };
        }
        default:
            return state;
    }

}

export default reducer;

//Selectors - Allows extraction of data from the store state
//export const getState = (state: IState) => state
export const getAllEvents = (state: IState) => state.events.allIds.map(eventId => state.events.byId[eventId]);