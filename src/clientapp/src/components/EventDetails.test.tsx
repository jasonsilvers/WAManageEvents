import React from "react";
import {render, waitFor} from '@testing-library/react';

import RouterDispatchStateContext from "../__mocks__/RouterDispatchStateContext";
import EventDetails from "./EventDetails";
import {WaEvent} from "../api";
import mockAxios from "axios";

describe('<EventsDetails />', () => {
    const event: WaEvent = {
        Id: 34233,
        Details: {
            DescriptionHtml: "<h1>This is going to be an awesome event</h1>"
        }
    }

    it('should render event', async() => {

        (mockAxios.request as jest.Mock).mockImplementation(() => Promise.resolve({data: event}))
        const {getByText, debug} = render(
            <RouterDispatchStateContext route={'/events/34233'} path={'/events/:id'}>
                <EventDetails/>
            </RouterDispatchStateContext>
        )
        await waitFor(() => expect(getByText(/This is going to be an awesome event/i)).toBeInTheDocument())
        debug()
    });


})