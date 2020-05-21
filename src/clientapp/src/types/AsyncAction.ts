import {Thunk} from "./Thunk";
import IState from "./State";
import {Action} from "../actions/actions";

export type AsyncAction = (...a: any[]) => Thunk<IState, Action>;