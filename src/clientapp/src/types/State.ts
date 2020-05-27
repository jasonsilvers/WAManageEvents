import {WaEvent} from "../api";

export interface ById<E> {
    [key:string]: E
}

export interface IEntity<E> {
    readonly byId: ById<E>;
    readonly allIds: ReadonlyArray<string>;
}

interface IUser {
    name: string
}

interface IState {
    readonly user: IUser;
    readonly events: IEntity<WaEvent>
    readonly ui: {
        isLoadingEvents: boolean
    }
}

export default IState;