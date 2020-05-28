import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { WaEvent } from "../api";
import {DispatchContext} from "../context/AppContext";
import {useEvent} from "../utilities/events";
import {Spin} from "antd";

interface OwnProps {
}

type Props = OwnProps;

const EventDetails: FunctionComponent<Props> = (props) => {
    let {id} = useParams()
    const {status, data, error} = useEvent(id)

    if (status === 'loading') {
        return (
            <Spin data-testid="spinner"/>
        )
    }

    return (
        <div>
            <h1>Event Details</h1>
            <p>{id}</p>
            <div dangerouslySetInnerHTML={{__html: data?.Details?.DescriptionHtml ? data?.Details?.DescriptionHtml: ''}} />

        </div>
    );
};

export default EventDetails;
