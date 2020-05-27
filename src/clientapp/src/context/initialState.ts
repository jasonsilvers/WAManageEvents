import IState from "../types/State";


const initialState: IState = {
    user: {
        name: 'Jason',
    },
    events: {
        byId: {},
        allIds: []
    },
    ui: {
        isLoadingEvents: false
    }

}
export default initialState;

