import {Teacher} from "../api";

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
    readonly teachers: IEntity<Teacher>;
}

export default IState;