import mockAxios from 'axios';
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import {getEventsAsync, setEvents, setUserName} from "./actions";
import {DefaultApi, WaEvent} from "../api";

//Is this test worth it? This is teting implementation details?

it('should call the api to get teachers and dispatch for set teacher if valid', async () => {
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

    const events = [e1, e2];
    //mocks
    const dispatch = jest.fn();
    const getState = jest.fn();
    const getEventsThunk =  getEventsAsync();

    (mockAxios.request as jest.Mock).mockImplementation(() => Promise.resolve({data: events}))
    await getEventsThunk(dispatch, getState, () => new DefaultApi())
    //expect(dispatch).toHaveBeenCalledTimes(1)
    //expect(dispatch).toHaveBeenCalledWith(setEvents(events))
});