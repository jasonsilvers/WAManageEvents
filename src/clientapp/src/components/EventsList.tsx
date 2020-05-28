import React, {FunctionComponent, useContext, useEffect} from 'react';
import {DispatchContext, StateContext} from "../context/AppContext";
import {Spin} from 'antd';
import {List} from 'antd';
import {Link} from 'react-router-dom';
import {getAllEvents} from "../reducers/reducer";
import {getEventsAsync} from "../actions/actions";

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
        <>
            <h1>Events List</h1>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={events}
                renderItem={event => (
                    <List.Item key={event.Id}>
                        <Link
                            aria-labelledby={event.Id.toString()}
                            to={`events/${event.Id}`}
                        >{event.Name}</Link>
                    </List.Item>
                )}
            />
        </>
    );

};

export default EventsList;
