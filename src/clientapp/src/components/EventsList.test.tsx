import React from "react";
import initialState from "../context/initialState";
import IState from "../types/State";
import {render} from '@testing-library/react';
import RouterDispatchStateContext from "../__mocks__/RouterDispatchStateContext";
import {WaEvent} from '../api/api'
import EventsList from "./EventsList";

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

    it('should render loading spinner when getting events', () => {

        const mockDispatch = jest.fn();

        let state: IState = {
            ...initialState,
            ui: {
                isLoadingEvents: true
            }
        }

        const { getByTestId } = render(
            <RouterDispatchStateContext testState={state} mockDispatch={mockDispatch}>
                <EventsList/>
            </RouterDispatchStateContext>
        )

        expect(getByTestId('spinner')).toBeInTheDocument()

    });

    it('should render no events', () => {

        const mockDispatch = jest.fn();

        const state: IState = {
            ...initialState,
            events: {
                byId: {},
                allIds: []
            }
        }

        const {getByText} = render(
            <RouterDispatchStateContext testState={state} mockDispatch={mockDispatch}>
                <EventsList/>
            </RouterDispatchStateContext>
        )

        expect(getByText(/no events/i)).toBeInTheDocument()
    });

    it('should render events', () => {

        const mockDispatch = jest.fn();

        const state: IState = {
            ...initialState,
            events: {
                byId: {
                    [e1.Id.toString()]: e1,
                    [e2.Id.toString()]: e2
                },
                allIds: [e1.Id.toString(), e2.Id.toString()]
            },
            ui: {
                isLoadingEvents: false
            }
        }

        const {getByText} = render(
            <RouterDispatchStateContext testState={state} mockDispatch={mockDispatch}>
                <EventsList/>
            </RouterDispatchStateContext>
        )

        expect(getByText(/2020 Montgomery IT Summit/i)).toBeInTheDocument()
        expect(getByText(/2019 MITS - Wednesday Evening Social Sponsorship/i)).toBeInTheDocument()
    });
})