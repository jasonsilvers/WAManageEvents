import mockAxios from 'axios';
import {render, fireEvent, waitFor, screen, wait} from '@testing-library/react'
import {getEventsAsync, setEvents, setUserName} from "./actions";
import {DefaultApi, WaEvent} from "../api";

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
    getEventsThunk(dispatch, getState, () => new DefaultApi())
    await waitFor(() => expect(dispatch).toHaveBeenCalledWith(setEvents(events)))
    //This is generally a wrong thing because you are testing for the wrong things. React could rerender multiple times
    //https://testingjavascript.com/lessons/react-test-drive-mocking-react-router-s-redirect-component-on-a-form-submission
    // await waitFor(() =>  expect(dispatch).toHaveBeenCalledTimes(1))
});