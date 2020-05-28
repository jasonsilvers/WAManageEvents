import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { WaEvent } from "../api";
import {DispatchContext} from "../context/AppContext";

interface OwnProps {
}

type Props = OwnProps;

const EventDetails: FunctionComponent<Props> = (props) => {
    let {id} = useParams()
    const {getApi} = useContext(DispatchContext)
    const [event, setEvent] = useState({} as WaEvent)

    useEffect(() => {
        getApi().getEventById(id.toString()).then(response => {
            console.log(response)
            setEvent(response.data as WaEvent)
        })
    }, [getApi]);

    return (
        <div>
            <h1>Event Details</h1>
            <p>{id}</p>
            <div dangerouslySetInnerHTML={{__html: event.Details?.DescriptionHtml ? event.Details?.DescriptionHtml: ''}} />
            {event.Details?.TimeZone?.Name}
        </div>
    );
};

export default EventDetails;
