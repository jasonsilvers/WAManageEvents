import React from "react";
import initialState from "../context/initialState";
import IState from "../types/State";
import {fireEvent, render, waitFor} from '@testing-library/react';
import RouterDispatchStateContext from "../__mocks__/RouterDispatchStateContext";
import {createMemoryHistory} from 'history'
import {WaEvent} from '../api/api'
import EventsList from "./EventsList";
import mockAxios from "axios";

describe('<EventsList />', () => {
    const e1: WaEvent = {
        EndDate: "2019-10-11T12:00:00-05:00",
        Id: 3584588,
        Location: "Renaissance Montgomery Hotel & Spa",
        Name: "2020 Montgomery IT Summit",
        StartDate: "2019-10-07T07:00:00-05:00",
    }

    const e2: WaEvent = {
        EndDate: "2019-10-11T12:00:00-05:00",
        Id: 3234320,
        Location: "The Alley Bar",
        Name: "2019 MITS - Wednesday Evening Social Sponsorship",
        StartDate: "2019-10-07T07:00:00-05:00",
    }

    const events = [e1, e2]


    it('should render loading spinner when getting events', () => {

        const {getByTestId} = render(
            <EventsList/>
        )

        expect(getByTestId('spinner')).toBeInTheDocument()

    });

    it('should render no events', () => {

        (mockAxios.request as jest.Mock).mockImplementation(() => Promise.resolve({data: []}))
        const {getByText} = render(
            <EventsList/>
        )

        waitFor(() => expect(getByText(/no events/i)).toBeInTheDocument())

    });

    it('should render events', async () => {

        (mockAxios.request as jest.Mock).mockImplementation(() => Promise.resolve({data: events}))

        const {getByText} = render(
            <RouterDispatchStateContext>
                <EventsList/>
            </RouterDispatchStateContext>
        )

        await waitFor(() => {
            expect(getByText(/2020 Montgomery IT Summit/i)).toBeInTheDocument()
        })

        expect(getByText(/2019 MITS - Wednesday Evening Social Sponsorship/i)).toBeInTheDocument()
    });

})