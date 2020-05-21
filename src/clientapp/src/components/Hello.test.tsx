import {render} from '@testing-library/react';
import RouterDispatchStateContext from "../__mocks__/RouterDispatchStateContext";
import Hello from "./Hello";
import React from "react";

it('should display the username', () =>  {
    const {getByText} = render(
        <RouterDispatchStateContext>
            <Hello />
        </RouterDispatchStateContext>
    )

    expect(getByText(/Jason/i)).toBeInTheDocument()
});