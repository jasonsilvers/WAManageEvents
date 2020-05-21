import React, {FunctionComponent, useContext, useEffect} from 'react';
import {DispatchContext, StateContext} from "../context/AppContext";
import {setUserName} from "../actions/actions";
import {Button, Icon} from "@chakra-ui/core";

interface OwnProps {
}

type Props = OwnProps;

const Hello: FunctionComponent<Props> = (props) => {

    const {state} = useContext(StateContext)
    const {dispatch} = useContext(DispatchContext)

    return (
        <div>
            Welcome - {state.user.name}

            <Button>I just consumed some ⚡️Chakra!</Button>
            <Icon name="search" />
        </div>
    );
};

export default Hello;
