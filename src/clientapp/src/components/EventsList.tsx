import React, {FunctionComponent} from 'react';
import {Spin} from 'antd';
import {List} from 'antd';
import {Link} from 'react-router-dom';
import {useEvents} from "../utilities/events";

interface OwnProps {
}

type Props = OwnProps;

const EventsList: FunctionComponent<Props> = (props) => {
    const {status, data, error} = useEvents()

    if (status === 'loading') {
        return (
            <Spin data-testid="spinner"/>
        )
    }

    if (data?.length === 0) {
        return <div>No Events</div>
    }

    return (
        <>
            <h1>Events List</h1>
            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
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
