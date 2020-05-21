import IState from "../types/State";


const initialState: IState = {
    user: {
        name: 'Jason',
    },
    teachers: {
        byId: {},
        allIds: []
    }

}
export default initialState;

