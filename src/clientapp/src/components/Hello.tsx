import React, {FunctionComponent, useContext, useEffect} from 'react';
import {DispatchContext, StateContext} from "../context/AppContext";
import {Button} from "antd";

interface OwnProps {
}

type Props = OwnProps;

const Hello: FunctionComponent<Props> = (props) => {

    const {state} = useContext(StateContext)
    return (
        <div>
            Welcome - {state.user.name}
            <div>
                <Button>Default</Button>
            </div>
        </div>
    );
};

export default Hello;
