import initialState from "../context/initialState";
import IState from "../types/State";
import {render} from '@testing-library/react';
import RouterDispatchStateContext from "../__mocks__/RouterDispatchStateContext";
import TeachersList from "./TeachersList";
import React from "react";
import {Teacher} from "../api";

describe('<TeachersList>', () => {

    const t1 = {
        id: '837648ef-8f07-447a-b207-646cd821c187',
        name: 'Bob Anderson',
        pictureUrl: 'bob.anderson.jpg',
        email: 'bob.anderson@gmail.com'
    } as Teacher

    const t2 = {
        id: '926712e6-4428-4229-9071-5b3178bd4ea6',
        name: 'Frank Smith',
        pictureUrl: 'frank.smith.jpg',
        email: 'frank.smith@gmail.com'
    } as Teacher

    it('Should display correct message when no teachers', () => {

        const state: IState = {
            ...initialState,
            teachers: {
                byId: {},
                allIds: []
            }
        }

        const {getByText} = render(
            <RouterDispatchStateContext testState={state}>
                <TeachersList/>
            </RouterDispatchStateContext>
        )

        expect(getByText(/no teachers/i)).toBeInTheDocument()

    })

    it('Should render teachers list', () => {
            const state: IState = {
                ...initialState,
                teachers: {
                    byId: {
                        ['837648ef-8f07-447a-b207-646cd821c187']: t1,
                        ['926712e6-4428-4229-9071-5b3178bd4ea6']: t2
                    },
                    allIds: ['837648ef-8f07-447a-b207-646cd821c187', '926712e6-4428-4229-9071-5b3178bd4ea6']
                }
            }

            const {getByText} = render(
                <RouterDispatchStateContext testState={state}>
                    <TeachersList/>
                </RouterDispatchStateContext>
            )

            expect(getByText(/hello - Bob Anderson/i)).toBeInTheDocument()
            expect(getByText(/hello - Frank Smith/i)).toBeInTheDocument()
        }
    )
})