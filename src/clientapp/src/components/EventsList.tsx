import React, {FunctionComponent, useContext, useEffect} from 'react';
import {DispatchContext, StateContext} from "../context/AppContext";
import {Spin} from 'antd';
import { List, Typography, Divider } from 'antd';

import {getAllEvents} from "../reducers/reducer";
import {getEventsAsync, setEventsLoading} from "../actions/actions";

interface OwnProps {
}

type Props = OwnProps;

const EventsList: FunctionComponent<Props> = (props) => {
    const {state} = useContext(StateContext)
    const {dispatch} = useContext(DispatchContext)
    const events = getAllEvents(state)

    useEffect(() => {
        dispatch(getEventsAsync());
    }, [dispatch]);

    if (state.ui.isLoadingEvents) {
        return (
            <Spin data-testid="spinner"/>
        )
    }

    if (events.length === 0) {
        return <div>No Events</div>
    }

    return (
        <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={events}
            renderItem={event => (
                <List.Item key={event.Id}>
                    {event.Name}
                </List.Item>
            )}
        />
    );

};

export default EventsList;
